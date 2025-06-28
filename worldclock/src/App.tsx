import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/Navbar' element={<Navbar />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  );
}

export default App;