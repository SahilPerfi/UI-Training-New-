import React from 'react'
import profilePic from '../images/profilePic.jpg'
import './Home.css'

// import About from './About'
const Home = () => {
  return (
    <div className='homePage'>
      <div className='mainPage'>
      <h1>Home Page</h1>
      <img src={profilePic} className="portfolio_pic" alt="logo" />
      <div className="portfolio_name">I am Sahil Dhoble</div>
      <div className="portfolio_designation">Frontend Developer</div>
      </div>
    </div>
  )
}

export default Home
