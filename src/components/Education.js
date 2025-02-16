import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Education.css";
import { FaSchool, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const Education = () => {
  const [activeSection, setActiveSection] = useState("school");

  const educationData = {
    btech: {
      title: "Shri Vishnu Engineering College for Women",
      location: "Bhimavaram, Andhra Pradesh",
      subject: "Computer Science and Engineering",
      percentage: "9.45 CGPA",
      years: "2022-2026",
      description:
        "Developed a strong foundation in programming, web development, machine learning, and problem-solving through academic projects and internships.",
      icon: <FaLaptopCode />,
    },
    
    intermediate: {
      title: "Lakshya School",
      location: "Samalkota, Andhra Pradesh",
      subject: "CBSE Board - Math, Physics, Chemistry",
      percentage: "92%",
      jeePercentage: "93.8%",
      years: "2020-2022",
      description:
        "Focused on advanced science subjects to prepare for engineering entrance exams. Excelled in academics and secured top scores.",
      icon: <FaGraduationCap />,
    },
    
    school: {
      title: "Sri Prakash Vidya Nikethan",
      location: "Tuni, Andhra Pradesh",
      subject: "SSC Board",
      percentage: "99.5%",
      years: "2019-2020",
      description:
        "Built a strong foundation in mathematics, science, languages, leadership, communication, and teamwork while participating in extracurricular activities like debates, art, and sports.",
      icon: <FaSchool />,
    },
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="education-section">
      {/* Title */}
      <motion.h2
        className="education-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Educational Journey 📘
      </motion.h2>

      {/* Container */}
      <div className="education-container">
        {/* Sidebar */}
        <motion.div
          className="education-sidebar"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {Object.keys(educationData).map((section, index) => (
            <motion.button
              key={section}
              className={`sidebar-button ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => handleSectionChange(section)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.3 }}
            >
              {educationData[section].icon}{" "}
              {section === "school"
                ? "School"
                : section === "intermediate"
                ? "Intermediate"
                : "B.Tech"}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div
          className="education-content"
          key={activeSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="content-title">
            {educationData[activeSection].title}
          </h3>
          <p className="content-location">
            📍 {educationData[activeSection].location}
          </p>
          <p className="content-years">
            <strong>Years: </strong>
            {educationData[activeSection].years}
          </p>
          <p className="content-subject">
            <strong>Subject: </strong>
            {educationData[activeSection].subject}
          </p>
          <p className="content-percentage">
            <strong>Percentage/CGPA: </strong>
            {educationData[activeSection].percentage}
          </p>
          {activeSection === "intermediate" && (
            <p className="content-jee">
              <strong>JEE Mains Percentage: </strong>
              {educationData[activeSection].jeePercentage}
            </p>
          )}
          <p className="content-description">
            {educationData[activeSection].description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
