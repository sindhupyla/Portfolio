import React, { useState } from "react";
// Importing React icons
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaRobot } from "react-icons/fa";

// Import images for coding profiles
import lc from '../assets/image.png'; 
import cf from '../assets/image copy.png'; 
import cc from '../assets/image copy 2.png'; 
import si from '../assets/image copy 3.png'; 
import ib from '../assets/image copy 4.png'; 
import hr from '../assets/image copy 5.png';

import "./Skills.css"; // Import CSS file for styling

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("skills");

  const skillsData = [
    { label: "Python", icon: <FaPython /> },
    { label: "Java", icon: <FaJava /> },
    { label: "HTML", icon: <FaHtml5 /> },
    { label: "CSS", icon: <FaCss3Alt /> },
    { label: "React", icon: <FaReact /> },
    { label: "MySQL", icon: <FaDatabase /> },
    { label: "MongoDB", icon: <FaDatabase /> },
    { label: "Machine Learning", icon: <FaRobot /> },
  ];

  const codingProfiles = [
    { label: "LeetCode", link: "https://leetcode.com/u/Sindhu_Indus/", Image: lc },
    { label: "Smart Interviews", link: "https://smartinterviews.in/profile/sindhuja_pyla", Image: si },
    { label: "Hackerrank", link: "https://www.hackerrank.com/sindhu_pyla", Image: hr },
    { label: "InterviewBit", link: "https://www.interviewbit.com/profile/sindhuja_pyla/", Image: ib },
    { label: "CodeChef", link: "https://www.codechef.com/users/sindhuja24", Image: cc },
    { label: "Codeforces", link: "https://codeforces.com/profile/sindhuja_pyla", Image: cf },
  ];

  // Render skills grid
  const renderSkillsGrid = () =>
    skillsData.map((skill, index) => (
      <div className="grid-item" key={index}>
        <div className="skill-icon">{skill.icon}</div>
        <p className="skill-label">{skill.label}</p>
      </div>
    ));

  // Render coding profiles grid
  const renderProfilesGrid = () =>
    codingProfiles.map((profile, index) => (
      <div className="grid-item" key={index}>
        <div className="profile-icon">
          <img
            src={profile.Image}
            alt={profile.label}
            className="profile-image" // Apply the profile-image class to each image
          />
        </div>
        <a
          className="profile-link"
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {profile.label}
        </a>
      </div>
    ));

  return (
    <div className="skills-page">
      <h2 className="skills-heading">My Skills & Profiles</h2>
      <div className="skills-container">
        {/* Buttons Section */}
        <div className="skills-buttons">
          <button
            className={`skills-btn ${selectedCategory === "skills" ? "active" : ""}`}
            onClick={() => setSelectedCategory("skills")}
          >
            Skills
          </button>
          <button
            className={`skills-btn ${selectedCategory === "profiles" ? "active" : ""}`}
            onClick={() => setSelectedCategory("profiles")}
          >
            Coding Profiles
          </button>
        </div>

        {/* Display Section */}
        <div className="skills-display-box">
          {selectedCategory === "skills" ? (
            <div className="grid-container">{renderSkillsGrid()}</div>
          ) : (
            <div className="grid-container">{renderProfilesGrid()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
