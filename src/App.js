
import './App.css';
import { Route, Routes } from "react-router-dom";
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" Component={RegistrationPage} />
        <Route path="/login" Component={LoginPage} />
      </Routes>
    </>
  )
}

export default App;
