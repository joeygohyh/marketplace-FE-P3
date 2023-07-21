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
        .get("http://localhost:3000/api/user/profile")
        .then((response) => {
          setUserDetails(response.data);
        })
        .catch((err) => {
          console.log("Failed to get user details");
        });
    }
  }, [getUserToken]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', paddingTop: '50px' }}>
    <div>Stay tuned, coming soon!</div>
  </div>
  )}

