import './App.css';
import Login from './pages/login.js';
import Home from './pages/home.js';
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/Home" element={<Home />} />
        <Route path = "/login" element={<Login />} />
      </Routes>
     </>

  );
}

export default App;
