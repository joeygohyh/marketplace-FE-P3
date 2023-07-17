import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Authenticated from "./components/auth/AuthenticatedOnly";
import Guest from "./components/auth/GuestOnly";
import Register from "./components/RegistrationPage";
import Login from "./components/LoginPage";
import Profile from "./components/ProfilePage";
import EditProfile from "./components/EditProfile";
import ItemListPage from "./components/ItemListPage";
import Navigation from "./components/NavigationBar";
import ItemPage from "./components/ItemPage";
import Cart from "./components/Cart";
import PayButton from "./components/PayButton";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentFailed from "./components/PaymentFailed";
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
        <Route path="/" element={<Home />} />

        <Route path="/user/register" element={<Guest component={Register} />} />
        <Route path="/user/login" element={<Guest component={Login} />} />

        <Route
          path="/user/profile"
          element={<Authenticated component={Profile} />}
        />
        <Route
          path="/user/update"
          element={<Authenticated component={EditProfile} />}
        />
        <Route
          path="/items"
          element={<Authenticated component={ItemListPage} />}
        />
        <Route path="/items/:itemID" element={<Guest component={ItemPage} />} />
        <Route path="/cart" element={<Authenticated component={Cart} />} />
        <Route
          path="/payment/checkout"
          element={<Authenticated component={PayButton} />}
        />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/failed" element={<PaymentFailed />} />
      </Routes>
    </>
  );
}

export default App;
