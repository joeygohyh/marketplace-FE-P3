
import { useEffect, useState, useContext } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { AuthContext } from "../components/auth/AuthProvider";

import AddToCartButton from "./AddToCartButton"
import GoToCartButton from "./GoToCartButton"


export default function ItemPage() {
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
      
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
        
          {/* quite cool, will try to include this */}
            {/* {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))} */}
            {/* <li className="text-sm"> */}
              {/* <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a> */}
              {/* <h1> {item.name} </h1> */}
            {/* </li> */}
          
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={item.image}
            //   alt={product.image[0].alt}
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

            <AddToCartButton itemID={itemID} />
            


            {/* <form className="mt-10">
            
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </form> */}
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
  {/* Description */}
  <div>
    {/* <h3 className="sr-only">Description</h3> */}
    {/* <h3 className="text-sm font-medium text-gray-900">Description</h3> */}

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
  )
}
