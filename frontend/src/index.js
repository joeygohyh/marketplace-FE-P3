import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
// import Contact from "./contact";
import ItemPage from "./components/ItemPage";
// import CreateMenuItemPage from "./components/CreateMenuItemPage";

import Register from "./components/RegisterPage";
import Login from "./components/LoginPage";
// import Profile from "./components/ProfilePage";
// import Authenticated from "./components/auth/AuthenticatedOnly";
import Guest from "./components/auth/GuestOnly";

const router = createBrowserRouter([
  {
    path: "/items",
    element: <Root />,
  },
  {
    path: "/items/:itemID",
    element: <ItemPage />,
  },
  {
    path: "/register",
    element: <Guest component={Register} />,
  },
  {
    path: "/login",
    element: <Guest component={Login} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
