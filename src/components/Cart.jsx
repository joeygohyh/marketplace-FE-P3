import { Fragment, useState, useContext, useEffect, } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import axios from "axios";
import { AuthContext } from "../components/auth/AuthProvider";
import { useNavigate } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: '$90.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     id: 2,
//     name: 'Medium Stuff Satchel',
//     href: '#',
//     color: 'Blue',
//     price: '$32.00',
//     quantity: 1,
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   // More products...
// ]

export default function Cart() {
  const [cart, setCart] = useState(true)
  const { logoutSuccess, getUserToken } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    // Get the user token from the AuthContext
    const userToken = getUserToken();

    if (userToken) {
      // Set the authorization header with the token
      axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

      // Make the API call
      axios
        .get("http://localhost:3000/api/cart")
        .then((response) => {
          setUserDetails(response.data);
          // console.log(response.data)
        })
        .catch((err) => {
          console.log("Failed to get user details");
        });
    }
  }, [getUserToken]);

  function calculateTotalPrice(userDetails) {
    let total = 0;
    userDetails.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  }
  

  return (
    <Transition.Root show={cart} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Your Cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setCart(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {userDetails.map((item) => (
                              <li key={item.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.image}
                                   
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={item.href}>{item.name}</a>
                                      </h3>
                                      <p className="ml-4">{item.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty {item.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        {/* <p>$262.00</p>
                         */}
                          <p>${calculateTotalPrice(userDetails).toFixed(2)}</p>
                      </div>
                      {/* <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> */}
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => {setCart(false);
                              navigate("/items"); // Navigate to the desired route
                            }}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}


// import { Fragment, useState, useContext, useEffect } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { XIcon } from '@heroicons/react/outline'
// import axios from "axios";
// import { AuthContext } from "../components/auth/AuthProvider";

// export default function Cart() {
//   const [cart, setCart] = useState([]);
//   const { logoutSuccess, getUserToken } = useContext(AuthContext);
//   const [userDetail, setUserDetails] = useState({});
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Get the user token from the AuthContext
//     const userToken = getUserToken();

//     if (userToken) {
//       // Set the authorization header with the token
//       axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

//       // Make the API call
//       axios
//         .get("http://localhost:3000/api/cart")
//         .then((response) => {
//           setCartItems(response.data);
//         })
//         .catch((err) => {
//           console.log("Failed to get cart items");
//         });
//     }
//   }, [getUserToken]);

//   return (
//     <Transition.Root show={cart.length > 0} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={() => setCart([])}>
//         {/* Rest of the code */}
//         <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//           <div className="flex items-start justify-between">
//             <Dialog.Title className="text-lg font-medium text-gray-900">Your Cart</Dialog.Title>
//             {/* Rest of the code */}
//           </div>

//           <div className="mt-8">
//             <div className="flow-root">
//               <ul role="list" className="-my-6 divide-y divide-gray-200">
//                 {cartItems.map((item) => (
//                   <li key={item.id} className="flex py-6">
//                     <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                       <img
//                         src={item.imageSrc}
//                         alt={item.imageAlt}
//                         className="h-full w-full object-cover object-center"
//                       />
//                     </div>

//                     <div className="ml-4 flex flex-1 flex-col">
//                       <div>
//                         <div className="flex justify-between text-base font-medium text-gray-900">
//                           <h3>
//                             <a href={item.href}>{item.name}</a>
//                           </h3>
//                           <p className="ml-4">{item.price}</p>
//                         </div>
//                         <p className="mt-1 text-sm text-gray-500">{item.color}</p>
//                       </div>
//                       <div className="flex flex-1 items-end justify-between text-sm">
//                         <p className="text-gray-500">Qty {item.quantity}</p>

//                         <div className="flex">
//                           <button
//                             type="button"
//                             className="font-medium text-indigo-600 hover:text-indigo-500"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//         {/* Rest of the code */}
//       </Dialog>
//     </Transition.Root>
//   )
// }
