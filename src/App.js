import "./App.css";
import Login from "./pages/login.js";
import Home from "./pages/home.js";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  return (
    <div>
      <Routes>
        <Route path="/h" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/"
          element={
            <Login accessToken={accessToken} setAccessToken={setAccessToken} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
