
import { useEffect, useState, useContext } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { AuthContext } from "../components/auth/AuthProvider";

import AddToCartButton from "./AddToCartButton"
// import GoToCartButton from "./GoToCartButton"
import Cart from "./Cart";

export default function ItemPage() {
  const [showCartOverlay, setShowCartOverlay] = useState(false); 
  const { getUserToken } = useContext(AuthContext);
  const [item, setItem] = useState(null);
  const { itemID } = useParams();
  

  useEffect(() => {
    
    const userToken = getUserToken();

    if (userToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
      axios
        .get(`http://localhost:3000/api/items/${itemID}`)
        .then((response) => {
          setItem(response.data);
        })
        .catch((err) => {
          console.log("Failed to fetch items");
        });
    }
  }, [getUserToken, itemID]);

  // if ( ! userToken ) {
  //   return <div>You must be authenticated to view this page.</div>;
  // }

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <>
      
    <div className="bg-white">
      <div className="p-4 rounded-lg pt-6" >
       
        {/* Image gallery */}
        <div className=" mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={item.image}
              className="h-full w-full object-cover object-center"
            alt={item.name}/>
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{item.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">${item.price}</p>

            {/* Pass the setCart function as a prop to AddToCartButton */}
     {/* Pass the setCart function as a prop to AddToCartButton */}
     <AddToCartButton
        itemID={itemID}
        showCartOverlay={setShowCartOverlay} // Set the cart overlay using setShowCartOverlay
      />

          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
  {/* Description */}
  <div>
 
    <div className="space-y-6">
      <p className="text-base text-gray-900" style={{ textAlign: 'justify' }}>
        {item.description}
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>

  {/* Show the cart overlay */}
  {showCartOverlay && (
        <Cart showCartOverlay={setShowCartOverlay} itemID={itemID} />
      )}
  </>
  )
}
