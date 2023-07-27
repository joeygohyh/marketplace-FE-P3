import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/auth/AuthProvider";

export default function Profile() {
  const { logoutSuccess, getUserToken } = useContext(AuthContext);
  const [userDetail, setUserDetails] = useState({});

  useEffect(() => {
    // Get the user token from the AuthContext
    const userToken = getUserToken();

    if (userToken) {
      // Set the authorization header with the token
      axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;

      // Make the API call
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/user/profile`)
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((err) => {
          console.log("Failed to get user details");
        });
    }
  }, [getUserToken]);

  return (
    <>
      <div className="container mx-auto px-4 my-4 sm:w-1/2">
        <div className="py-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Profile
          </h2>
        </div>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Username
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {userDetail.name}
              </p>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Email
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {userDetail.email}
              </p>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Password
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">********</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link to="/user/update">
              {" "}
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Edit profile
              </button>
            </Link>
            <button
              type="button"
              className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={logoutSuccess}
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
