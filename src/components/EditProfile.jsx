import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../components/auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import validator from "validator"; // Import the validator library

export default function EditProfile() {
  // Get the user token from the AuthContext
  const { getUserToken } = useContext(AuthContext);
  const userToken = getUserToken();

  // Navigate to the user's profile
  const navigate = useNavigate();

  // create state to store form data
  const [formData, setFormData] = useState({});

  // create state to store form validation errors
  const [formErrors, setFormErrors] = useState({});

  // Handle form change
  const handleFormChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
    // Clear the corresponding error when the user types
    setFormErrors({ ...formErrors, [fieldName]: "" });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation
    const validationErrors = validateForm(formData);

    // Check for validation errors
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    // If no validation errors, continue with the API call
    // Call the API to update the user
    axios
      .put("http://localhost:3000/api/user/update", formData, {
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
