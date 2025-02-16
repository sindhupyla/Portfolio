import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-grid">
          {/* Email */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>
              <a href="mailto:sindhu.pyla@gmail.com">sindhu.pyla@gmail.com</a>
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>
              <a href="tel:9494889043">+91 9494889043</a>
            </p>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          >
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/sindhuja-pyla-65ab79256"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/sindhuja-pyla
              </a>
            </p>
          </motion.div>

          {/* GitHub */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          >
            <FaGithub className="contact-icon" />
            <h3>GitHub</h3>
            <p>
              <a
                href="https://github.com/sindhupyla"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/sindhupyla
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
