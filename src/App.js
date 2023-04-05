import "./App.css";
import Home from "./pages/Home.js";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
