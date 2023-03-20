import React from 'react';
import facebook from '../icons/facebook.jpg'
import Lik from '../icons/LinkedIn.png'
import instagram from '../icons/instagram.svg';
import twt from '../icons/twitter.png';
import git from '../icons/git.png';
import profilePic from '../images/profilePic.jpg'
import './Main.css'

const Main = (props) => {
  return (
    <>
      <div className={props.mainvalue ? 'container' : 'display-none'}>
        <div className='container_topname'><img src = {profilePic} alt="ProfilePic"/></div>
        <div className='container_name'>I'm Sahil Dhoble</div>
        <div className='contact'>Contact no: 7447588896</div>
        <div className='email'>Email : sahil.perficient@gmail.com</div>
        <div className='logo'>
            <ul>
              <li> <img className='logo_facebook' src={facebook} alt="FaceBook"/></li>
              <li>  <img className='logo_lik' src={Lik} alt="Linkdln"/></li>
              <li> <img className='logo_twt' src={twt} alt="Twitter"/></li>
              <li> <img className='logo_git' src={git} alt="github"/></li>
              <li > <img className='logo_insta' src={instagram} alt="Instagram"/></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Main