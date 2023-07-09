import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Register from "./components/RegistrationPage";

function App() {
  return (
    <>
      <CookiesProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </CookiesProvider>
    </>
  );
}

export default App;
