import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Signup from "./components/Auth/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
