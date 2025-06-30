import React from 'react'
import './Home.css'
import logo from '../assets/keyboard-type.gif'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

const Home = () => {

  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/timed');
  }
  return (
    <div className='home'>
      <Navbar />
      <div className='home-container'>
        <img src={logo} alt="Typing Animation" className='home-logo' />
        <button className='home-button' onClick={handleStart}>Get Started</button>
      </div>
      <About />
      <Contact />
    </div>
  )
}

export default Home
