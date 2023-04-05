import Login from './pages/Login.js';
import './App.css';
import Home from './pages/Home';
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
