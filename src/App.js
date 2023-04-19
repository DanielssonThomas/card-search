import "./App.css";
import Home from "./pages/home.js";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
