import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./components/screenHome/index";
import PhoneNumber from "./components/phonnumber/index";
import PhonePassPage from "./components/phonnumber/phonepass";
import Login from "./components/login/Login"
import Home from "./components/home/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phone-number" element={<PhoneNumber />} />
        <Route path="/phone-pass" element={<PhonePassPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
