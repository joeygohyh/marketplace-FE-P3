import { useEffect, useState } from "react";
import axios from "axios";
import {Link, Outlet} from "react-router-dom";

export default function Root() {
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        // make api call
        axios.get('http://localhost:3000/api/items')
            .then(response => {
                console.log(response.data)
                setMenuItems(response.data)
            })
            .catch(err => {
                console.log('failed to fetch menu items')
            })
    }, [])

    return (
        <div className="page-root">
            <div className="container">
                <header className="site-header">

                    <h1 className="page-title">
                        Marketplace
                    </h1>

            

                </header>

                {menuItems.length > 0 ? (
                    <ul>
                        {menuItems.map(item => {
                            return (
                                <li key={item._id}>
                                    <h2><Link to={`/menu-items/${item._id}`}>Name: {item.name}</Link></h2>
                                    <p>Price: {item.price}</p>
                                    <p>Description: {item.description}</p>
                                    {item.image ? (
                                        <figure>
                                            <img src={item.image} className="img-fluid" style={{maxWidth: '250px'}} />
                                        </figure>
                                    ) : ''}
                                </li>
                            )
                        })}
                    </ul>
                ) : '' }

            </div>
        </div>
    );
}