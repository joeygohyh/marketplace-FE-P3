import axios from "axios";
import { AuthContext } from "./auth/AuthProvider";
import { useContext } from "react";

export default function CheckoutButton() {
  // Get the user token from the AuthContext
  const { getUserToken } = useContext(AuthContext);
  const userToken = getUserToken();

  const handleCheckout = () => {
      
    // Call the API to checkout go to stripe payment page
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/payment/checkout`, null, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        const { session } = response.data;
        if (session && session.url) {
          window.location.href = session.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="button"
          className="rounded-md  bg-indigo-600  hover:text-indigo-500 px-5 py-1.5 text-lg font-semibold  text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </>
  );
}