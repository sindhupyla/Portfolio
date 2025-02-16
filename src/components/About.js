import React from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa"; // Eye icon for viewing
import "./About.css"; 
import profilePic from "../assets/myphoto.jpg"; 
import resume from "../assets/Sindhuja_Pyla.pdf"; 

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        {/* Left Section: Profile Picture */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
        >
          <img src={profilePic} alt="Profile" />
        </motion.div>

        {/* Right Section: About Text */}
        <motion.div
          className="about-text-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="about-header"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="about-text"
          >
            Hello! I'm Sindhuja Pyla, a passionate tech enthusiast and Google Developers Group Lead 
            with a solid foundation in programming and web development. I'm proficient in Python, Java and have experience with HTML, CSS, React.js, and Node.js. I’m particularly interested in Full Stack Development, Machine Learning and Data Analysis. I enjoy tackling challenges, learning new skills, and working on innovative projects.
          </motion.p>

          {/* View Resume Button */}
          <motion.a
            href={resume}
            target="_blank"  // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="view-resume-btn"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <FaEye /> View Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
