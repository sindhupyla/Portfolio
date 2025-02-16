import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing FaExternalLinkAlt
import lib from "../assets/lib.png";
import face from "../assets/face.png";
import innova from "../assets/innova.png";
import mood from "../assets/mood.png";
import innovavideo from "../assets/innovacarevideo.mp4";
import facerecogvideo from "../assets/FaceRecogVideo.mp4";
import moodtunesvideo from "../assets/MoodTunesVideo.mp4";
import "./Projects.css";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [isYouTube, setIsYouTube] = useState(false);

  const projects = [
    
    {
      title: "InnovaCare",
      image: innova,
      techStack: "React.js, Node.js (backend),MySQL",
      description:
        "InnovaCare is a web-based medical management system offering online consultations and health monitoring.",
      demoVideo: innovavideo,
      gitHubLink: "https://github.com/sindhupyla/InnovaCare",
    },
    {
      title: "Face Recognition",
      image: face,
      techStack: "Python, OpenCV, NumPy, PIL, LBPH, Haar Cascade.",
      description:
        "A face recognition system using LBPH to identify faces in real time or from images.",
      demoVideo: facerecogvideo,
      gitHubLink: "https://github.com/sindhupyla/FaceRecognition",
    },
    {
      title: "MoodTunes",
      image: mood,
      techStack: " Python, TensorFlow, OpenCV, Streamlit, HTML/CSS.",
      description:
        "MoodTunes recommends songs based on real-time facial emotion recognition using webcam input, displayed on an interactive Streamlit interface.",
      demoVideo: moodtunesvideo,
      gitHubLink: "https://github.com/sindhupyla/MoodTunes",
    },
    {
      title: "LibraTech",
      image: lib,
      techStack: "Python (tkinter), MySQL (backend)",
      description:
        "Libratech is a Python-based library management system for efficient book search, borrowing, and user management.",
      demoVideo: "https://www.youtube.com/embed/kmbDwYcFiGk", // Embed URL for YouTube
      gitHubLink: "https://github.com/sindhupyla/LIBRATECH",
    },
    
  ];

  const openModal = (video) => {
    if (video.includes("youtube.com") || video.includes("youtu.be")) {
      setIsYouTube(true);
    } else {
      setIsYouTube(false);
    }
    setCurrentVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentVideo("");
  };

  return (
    <section className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects 💻
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-left">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-right">
              <motion.h3
                className="project-title"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.title}
              </motion.h3>
              <p className="project-tech-stack">
                <strong>Tech Stack:</strong> {project.techStack}
              </p>
              <p className="project-description">
                <strong>{project.description}</strong>
              </p>

              <div className="project-buttons">
                <motion.button
                  className="project-button demo-button"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => openModal(project.demoVideo)}
                >
                  <FaExternalLinkAlt /> Demo
                </motion.button>
                <motion.a
                  href={project.gitHubLink}
                  className="project-button github-button"
                  whileHover={{ scale: 1.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div className="video-modal" onClick={closeModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            {isYouTube ? (
              <iframe
                src={currentVideo}
                title="Demo Video"
                className="project-video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                src={currentVideo}
                controls
                autoPlay
                className="project-video"
              ></video>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
