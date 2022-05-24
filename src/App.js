import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/home/index";
import PhoneNumber from "./components/phonnumber/index";
import PhonePassPage from "./components/phonnumber/phonepass";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<HomePage />} />
          <Route
            path="/phone-number"
            caseSensitive={false}
            element={<PhoneNumber />}
          />
          <Route
            path="/phone-pass"
            caseSensitive={false}
            element={<PhonePassPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
