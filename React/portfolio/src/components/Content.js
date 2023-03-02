import React from 'react'
import profilePic from '../images/profilePic.jpg'

const Content = () => {
  return (
    <div>
        {/* Edit <code>src/App.js</code> and save to reload. */}
        <img src={profilePic} className="portfolio_pic" alt="logo" />
        <div className="portfolio_name">I am Sahil Dhoble</div>
        <div className="portfolio_designation">Frontend Developer</div>

    </div>
  )
}

export default Content
