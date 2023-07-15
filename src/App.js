import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Authenticated from "./components/auth/AuthenticatedOnly";
import Guest from "./components/auth/GuestOnly";
import Register from "./components/RegistrationPage";
import Login from "./components/LoginPage";
import Profile from "./components/ProfilePage";
import ItemListPage from "./components/ItemListPage";
import Navigation from "./components/NavigationBar";
import ItemPage from "./components/ItemPage";
import Cart from "./components/Cart";
import Home from "./components/Home";

// const router = [
//   {
//     path: "/",
//     element: <Guest component={Home} />,
//   },
//   {
//     path: "/user/register",
//     element: <Guest component={Register} />,
//   },
//   {
//     path: "/user/login",
//     element: <Guest component={Login} />,
//   },
//   {
//     path: "/user/profile",
//     element: <Authenticated component={Profile} />,
//   },
//   {
//     path: "/items",
//     element: <Guest component={ItemListPage} />,
//   },
//   {
//     path: "/items/:itemID",
//     element: <Guest component={ItemPage} />,
//   },
//   {
//     path: "/cart",
//     element: <Authenticated component={Cart} />,
//   },
// ];
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Guest component={Home} />} />

        <Route path="/user/register" element={<Guest component={Register} />} />
        <Route path="/user/login" element={<Guest component={Login} />} />
        <Route
          path="/user/profile"
          element={<Authenticated component={Profile} />}
        />
        <Route path="/items" element={<Authenticated component={ItemListPage} />} />
        <Route path="/items/:itemID" element={<Guest component={ItemPage} />} />
        <Route path="/cart" element={<Authenticated component={Cart} />} />
      </Routes>
    </>
  );
}

export default App;
