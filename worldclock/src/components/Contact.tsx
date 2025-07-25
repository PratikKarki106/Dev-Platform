import React from 'react'
import Navbar from './Navbar'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact-Container'>
        {/* <Navbar /> */}
        <h1> Contact Us</h1>
        <div className='Contact-small'>
          <div className='Contact-details'>
            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="location" />
            <h4>Location</h4>
            <p>Kirat Chowk</p>
          </div>
          <div className='Contact-details'>
            <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="phone" />
            <h4>Number</h4>
            <p>9823077575</p>
          </div>
          <div className='Contact-details'>
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email" />
            <h4>Email</h4>
            <p>karkipratik063@gmail.com</p>
          </div>
        </div>
        <div className='Contact-form'>
          <h2> Send us a message</h2>
          <form>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
        <footer className="Contact-footer" style={{ textAlign: 'center', marginTop: '1rem', color: '#888' }}>
          All right reserved &copy; 2025 Pratik Karki
        </footer>
    </div>
  )
}

export default Contact