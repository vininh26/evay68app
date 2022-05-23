import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/home/index";
import PhoneNumber from "./components/phonnumber/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<HomePage />} />
           <Route path="/phone-number" caseSensitive={false} element={<PhoneNumber />} />
        {/* <Route path="/register" caseSensitive={false} element={<Register />} /> */} 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
