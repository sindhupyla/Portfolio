import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { FaHome, FaProjectDiagram, FaPhoneAlt, FaGraduationCap, FaTrophy, FaCode, FaMedal, FaBookmark, FaLightbulb } from "react-icons/fa"; // Import unique icons from react-icons
import './Navbar.css'; // Import Navbar CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <FaLightbulb /> Skills
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <FaProjectDiagram /> Projects
            </Link>
          </li>
          <li>
            <Link to="/certandintern">
              <FaBookmark /> Cert & Intern
            </Link>
          </li>
          <li>
            <Link to="/achievements">
              <FaMedal /> Achievements
            </Link>
          </li>
          
          <li>
            <Link to="/education">
              <FaGraduationCap /> Education
            </Link>
          </li>
          
          <li>
            <Link to="/contact">
              <FaPhoneAlt /> Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
