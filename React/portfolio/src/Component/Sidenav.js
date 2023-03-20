import React, { useState } from 'react';
import './Sidenav.css';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Education from './Education';
import Achievement from './Achievement';
import Profile from './Profile';
import Main from './Main';

const Sidenav = () => {
  const [main, setMain] = useState(true)
  const [about , SetAbout] = useState(false);
  const [skills , Setskills] =useState(false);
  const [project , SetProject] = useState(false);
  const [education ,SetEducation] = useState(false);
  const [achievement ,SetAchievement] = useState(false);
  const [profilevalue , SetProfilevalue] = useState(false);

  const mainPage = () =>{
    setMain(true)
    SetAbout(false);
    Setskills(false);
    SetProject(false);
    SetEducation(false);
    SetAchievement(false);
    SetProfilevalue(false);
  }
  const aboutpage = () =>{
    SetAbout(true);
    Setskills(false);
    SetProject(false);
    SetEducation(false);
    SetAchievement(false);
    SetProfilevalue(false);
    setMain(false);
  }

  const skillpage = () =>{
    Setskills(true);
    SetAbout(false);
    SetProject(false);
    SetEducation(false);
    SetAchievement(false);
    SetProfilevalue(false);
    setMain(false);
  }

  const projectpage = () =>{
    SetProject(true);
    Setskills(false);
    SetAbout(false);
    SetEducation(false);
    SetAchievement(false);
    SetProfilevalue(false);
    setMain(false);
  }
  
  const educationPage = () => {
    SetEducation(true);
    SetProject(false);
    Setskills(false);
    SetAbout(false);
    SetAchievement(false);
    SetProfilevalue(false);
    setMain(false);
  }

  const achievementPage = () => {
    SetAchievement(true);
    SetEducation(false);
    SetProject(false);
    Setskills(false);
    SetAbout(false);
    SetProfilevalue(false);
    setMain(false);
  }

  const profile = () =>{
    SetProfilevalue(true);
    SetAchievement(false);
    SetEducation(false);
    SetProject(false);
    Setskills(false);
    SetAbout(false);
    setMain(false);
  }
  return (
    <>
      <div className='sideNav'>
        <ul>
          <li onClick={mainPage}>Home</li>
          <li onClick={aboutpage}>About</li>
          <li onClick={skillpage}>Skills</li>
          <li onClick={projectpage}>Projects</li>
          <li onClick={educationPage}>Education</li>
          <li onClick={achievementPage}>Achievements</li>
          <li onClick={profile}>Personal Profile</li>
        </ul>
      </div>
      <Main mainvalue={main} />
      <About  aboutValue={about} />
      <Skills skillvalue={skills}/>
      <Project projectvalue={project} />
      <Education educationvalue={education} />
      <Achievement achievevalue={achievement} />
      <Profile  value={profilevalue} />
    </>
  )
}

export default Sidenav