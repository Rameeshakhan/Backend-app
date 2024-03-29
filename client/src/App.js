import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
