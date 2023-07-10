import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function() {
    const [menuItem, setMenuItem] = useState(null)

    // get the item ID
    const {itemID} = useParams()

    // use item ID to call backend API localhost:3000/api/menu-items/:itemID
    useEffect(() => {
        axios.get('http://localhost:3000/api/items/' + itemID)
            .then(response => {
                // store result in a state
                setMenuItem(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // render the data in state if state is not empty

    return (
        <div className="container">
            
            {menuItem ? (
                <>
                    <h2>{menuItem.name}</h2>
                    <p>Price: {menuItem.price}</p>
                    <button type="submit" className="btn btn-primary">Add To Cart</button>
 
                    {menuItem.image ? (
                        <figure>
                            <img src={menuItem.image} style={{maxWidth: '450px'}}/>
                        </figure>
                    ) : ''}
                                       <p>Description: {menuItem.description}</p>
                </>
            ) : ''}
            
        </div>
    )
}
 