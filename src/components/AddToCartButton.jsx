import axios from "axios";
import { AuthContext } from "../components/auth/AuthProvider";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AddToCartButton({ itemID, showCartOverlay }) {
  const { getUserToken } = useContext(AuthContext);
  const userToken = getUserToken();
  // const { itemID, showCartOverlay } = useParams();
  
  // Local state to keep track of cart addition status
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/items/${itemID}/addToCart`, null, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        // const { session } = response.data;
        // if (session && session.url) {
        //   setIsAddedToCart(true);
        //   window.location.href = session.url;
        //   // setCart(true)
        // }
        setIsAddedToCart(true);
        // Set the cart overlay to show when the button is clicked
        // setCart(true);
       // Call the showCartOverlay function from the prop to show the cart overlay

        showCartOverlay(true);


      })
      .catch((err) => {
        console.log(err.message);
        setIsAddedToCart(false); // Update the state to false in case of an error
      });
  };
  
  const handleClick = () => {
    handleAddToCart();
    // setIsAddedToCart(true);
    // Set the cart overlay to show when the button is clicked
    
  };




return (
  <div className="mt-6 flex items-center justify-center gap-x-6">
    <button
      type="button"
      onClick={handleClick}
      className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isAddedToCart ? "bg-green-600 hover:bg-green-700" : "bg-indigo-600 hover:bg-indigo-700"
      }`}
      disabled={isAddedToCart} // Disable the button if it's already added to the cart
    >
      {isAddedToCart ? "Added to Cart" : "Add to Cart"}
    </button>
  </div>
);
}

// import axios from "axios";
// import { AuthContext } from "../components/auth/AuthProvider";
// import { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// export default function AddToCartButton() {
//   const { getUserToken } = useContext(AuthContext);
//   const userToken = getUserToken();
//   const { itemID } = useParams();

//   // Local state to keep track of cart addition status
//   const [isAddedToCart, setIsAddedToCart] = useState(
//     localStorage.getItem("isAddedToCart") === "true"
//   );

//   useEffect(() => {
//     localStorage.setItem("isAddedToCart", isAddedToCart);
//   }, [isAddedToCart]);

//   const handleAddToCart = () => {
//     axios
//       .post(`http://localhost:3000/api/items/${itemID}/addToCart`, null, {
//         headers: {
//           Authorization: `Bearer ${userToken}`,
//         },
//       })
//       .then((response) => {
//         const { session } = response.data;
//         if (session && session.url) {
//           setIsAddedToCart(true);
//           window.location.href = session.url;
//         }
//       })
//       .catch((err) => {
//         console.log(err.message);
//         setIsAddedToCart(false);
//       });
//   };

//   return (
//     <div className="mt-6 flex items-center justify-center gap-x-6">
//       <button
//         type="button"
//         onClick={handleAddToCart}
//         className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//           isAddedToCart ? "bg-green-600 hover:bg-green-700" : "bg-indigo-600 hover:bg-indigo-700"
//         }`}
//         disabled={isAddedToCart}
//       >
//         {isAddedToCart ? "Added to Cart" : "Add to Cart"}
//       </button>
//     </div>
//   );
// }
