import React from 'react'
import './About.css'
import instagram  from '../assets/instagram.png' 
import github from '../assets/github.png'
import email from '../assets/gmail.png'

const About = () => {
  return (
    <div className='About-Container'>
      <h1>About Us</h1>
      <h2>Welcome to our website!</h2>

      <p> We’re a small team passionate about creating simple, useful, and engaging digital experiences. Whether you're here to explore our content, use our tools, or just look around, we're glad to have you.

      Our goal is to keep things clear, accessible, and helpful. Every feature and page you see has been crafted with care, keeping users like you in mind.

      We’re constantly working to improve and grow, so feel free to reach out with suggestions, questions, or just to say hi. Thanks for visiting!</p>
      <a href="https://www.instagram.com/pratikkarki____/"><button><img src={ instagram }></img></button></a>
      <a href="https://github.com/PratikKarki106"><button><img src={ github }></img></button></a>
      <a href="mailto:karkipratik063@gmail.com"><button><img src={ email }></img></button></a>
    </div>
  )
}

export default About
