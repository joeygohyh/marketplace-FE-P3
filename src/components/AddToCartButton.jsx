import axios from "axios";
import { AuthContext } from "../components/auth/AuthProvider";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

export default function AddToCartButton() {
  const { getUserToken } = useContext(AuthContext);
  const userToken = getUserToken();
  const { itemID } = useParams();
  
  // Local state to keep track of cart addition status
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    axios
      .post(`http://localhost:3000/api/items/${itemID}/addToCart`, null, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        const { session } = response.data;
        if (session && session.url) {
          setIsAddedToCart(true);
          window.location.href = session.url;
        }
      })
      .catch((err) => {
        console.log(err.message);
        setIsAddedToCart(false); // Update the state to false in case of an error
      });
  };
  

  return (
    <div className="mt-6 flex items-center justify-center gap-x-6">
      {isAddedToCart ? (
        <button
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          disabled
        >
          Added to Cart
        </button>
      ) : (
        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}


