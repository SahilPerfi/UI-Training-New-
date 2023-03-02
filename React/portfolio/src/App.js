// import logo from './images/bg_one.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
// import Content from './components/Content';
// import Header from './components/Header';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
// import profilePic from './images/profilePic.jpg' 

export default function App() {
  return (
    <Router>
      <div className="portfolio">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}
