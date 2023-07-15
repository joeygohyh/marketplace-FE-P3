
import { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

// const product = {
//   name: 'VR Space Invader',
//   price: '$39.99',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Items', href: '#' },
//   ],
//   image: [
//     {
//       src: 'https://i.imgur.com/1avRRaM.jpg',
//       alt: 'Model wearing plain white basic tee.',
//     },
//   ],
 
 
//   description:
//     `Experience the thrill of an otherworldly battle with VR Space Invader, exclusively available on our VR Experience Marketplace. Engulfed in a virtual reality headset, you'll find yourself seated in the cockpit of a cutting-edge space fighter, ready to defend the galaxy against relentless alien forces. As the invaders draw near, the intensity builds—your ship's engines rumble beneath you, while the VR headset flawlessly tracks your movements, immersing you further into the action. Traverse captivating star systems, each presenting unique challenges, as you unleash a range of futuristic weaponry to decimate your extraterrestrial foes. With seamless controls and immersive visuals, you'll navigate asteroid belts, outmaneuver enemy vessels, and rain down destruction with precision. But it's not just about combat; it's a full sensory experience. From stunning visuals to captivating sound effects and an enthralling soundtrack, every aspect transports you to a reality where heroes are born. VR Space Invader is your ticket to becoming the savior of the universe. Are you ready to step into the cockpit, harness the power of VR, and conquer the stars in an epic sci-fi saga? Get ready to redefine your gaming experience as you embark on this groundbreaking VR adventure—prepare for liftoff!.`,

// }


export default function ItemPage() {

    const [item, setItem] = useState(null);

    // get the item ID
    const { itemID } = useParams();

     // use item ID to call backend API localhost:3000/api/menu-items/:itemID
    useEffect(() => {
      // make api call
      axios
      .get(`http://localhost:3000/api/items/${itemID}`)
        .then((response) => {
        //   console.log(response.data);
          setItem(response.data);
          
        })
        .catch((err) => {
          console.log("failed to fetch items");
        //   console.log(item)
        });
    }, [itemID]);
  
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
            />
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

         

            <form className="mt-10">
            
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to Cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description */}
            <div>
              {/* <h3 className="sr-only">Description</h3> */}
              {/* <h3 className="text-sm font-medium text-gray-900">Description</h3> */}

              <div className="space-y-6">
                <p className="text-base text-gray-900">{item.description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
