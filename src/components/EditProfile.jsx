import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import validator from "validator";

export default function EditProfile() {
  // Get the user token & user info from the AuthContext
  const { getUserToken, getUserFromToken } = useContext(AuthContext);
  const userToken = getUserToken();
  const userFromToken = getUserFromToken();

  // For navigate back to the user's profile
  const navigate = useNavigate();

  // Create state to store form data
  const [formData, setFormData] = useState({
    name: userFromToken.name || "", // Set default value to an empty string
    email: userFromToken.email || "", // Set default value to an empty string
  });

  // Create state to store form errors
  const [formErrors, setFormErrors] = useState({});

  // Create state to store form validation errors
  const handleFormChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
    setFormErrors({ ...formErrors, [fieldName]: "" });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    // Call the API to update the user details
    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/user/update`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        navigate("/user/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Validate form
  const validateForm = (data) => {
    const errors = {};
  
    // Validate name field
    if (data.name && !validator.isLength(data.name, { min: 3, max: 100 })) {
      errors.name = "Username must be between 3 and 100 characters.";
    }
  
    // Validate email field
    if (data.email && !validator.isEmail(data.email)) {
      errors.email = "Invalid email address.";
    }
  
    // Validate password field
    if (
      data.password &&
      !validator.matches(
        data.password,
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      errors.password =
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.";
    }
  
    return errors;
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit your profile
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="PUT"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder={formData.name}
                  onChange={(e) => {
                    handleFormChange(e, "name");
                  }}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-sm">{formErrors.name}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder={formData.email}
                  onChange={(e) => {
                    handleFormChange(e, "email");
                  }}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm">{formErrors.email}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="********"
                  onChange={(e) => {
                    handleFormChange(e, "password");
                  }}
                />
                {formErrors.password && (
                  <p className="text-red-500 text-sm">{formErrors.password}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
