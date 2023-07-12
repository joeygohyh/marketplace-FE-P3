import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import AuthProvider from "./components/auth/AuthProvider";
import Authenticated from './components/auth/AuthenticatedOnly';
import Guest from './components/auth/GuestOnly';
import Root from "./routes/root";
import Register from "./components/RegistrationPage";
import Login from "./components/LoginPage";
import Profile from "./components/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/users/register",
    element: <Guest component={Register} />,
  },
  {
    path: "/users/login",
    element: <Guest component={Login} />,
  },
  {
    path: "/users/profile",
    element: <Authenticated component={Profile} />,
  },
  {
    path: "/menu-items",
    element: <Root />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
