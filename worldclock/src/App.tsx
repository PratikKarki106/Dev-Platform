import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Home from './components/Home';
import Timed from './components/Timed.jsx';
import Sec from './components/Sec.jsx';
import Min from './components/Min';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/Navbar' element={<Navbar />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Home' element={<Home />} />
      <Route path="/timed" element={<Timed />} />
      <Route path="/Sec" element={<Sec />} />
      <Route path="/Min" element={<Min />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
}

export default App;