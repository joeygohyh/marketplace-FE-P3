// import { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../components/auth/AuthProvider";

// export default function GoToCart() {
//   const { getUserToken } = useContext(AuthContext);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     // Get the user token from the AuthContext
//     const userToken = getUserToken();

//     if (userToken) {
//       // Set the authorization header with the token
//       axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

//       // make api call
//       axios
//         .get("http://localhost:3000/api/cart")
//         .then((response) => {
//           // console.log(response.data);
//           setCart(response.data);
//         })
//         .catch((err) => {
//           console.log("failed to fetch items");
//         });
//     }
//   }, [getUserToken]);


//   return (
//     <div className="mt-6 flex items-center justify-center gap-x-6">
//         <div >
//           <Link to={`/cart`} className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Go To Cart</Link>
//           </div>
        
//     </div>
//   );
// };


