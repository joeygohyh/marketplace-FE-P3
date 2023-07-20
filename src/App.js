import "./App.css";
import { Route, Routes } from "react-router-dom";
import Authenticated from "./components/auth/AuthenticatedOnly";
import Guest from "./components/auth/GuestOnly";
import Register from "./components/RegistrationPage";
import Login from "./components/LoginPage";
import Profile from "./components/ProfilePage";
import EditProfile from "./components/EditProfile";
import ItemListPage from "./components/ItemListPage";
import Navigation from "./components/NavigationBar";
import ItemPage from "./components/ItemPage";
import ContactUs from "./components/ContactPage";
import CheckoutButton from "./components/CheckoutButton";
import PaymentSuccess from "./components/PaymentSuccess";
import PaymentFailed from "./components/PaymentFailed";
import Home from "./components/Home";

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
        <Route
          path="/items/:itemID"
          element={<Authenticated component={ItemPage} />}
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/payment/checkout"
          element={<Authenticated component={CheckoutButton} />}
        />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/failed" element={<PaymentFailed />} />
      </Routes>
    </>
  );
}

export default App;
