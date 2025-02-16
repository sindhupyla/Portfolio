import React from "react";
import "./Achievements.css";
import { FaAward, FaClipboardList, FaTrophy } from "react-icons/fa";

const Achievements = () => {
  const achievementsData = [
    {
      title: "Adobe Career Academy",
      description:
        "Selected as 1 of 200 mentees across India for mentorship focusing on Data Structures and Algorithms, Computer Science fundamentals, and interview preparation.",
      link: "https://drive.google.com/file/d/1XwXr3vL8A8Aw3PMdCuffNa3kxLHyjZG6/view?usp=drivesdk", // Replace with the actual link
      demoLink: null, // No demo link for Adobe Career Academy
      icon: <FaAward />,
    },
    {
      title: "Research Paper(IEEE Conference)",
      description:
        "Research on the classification of dates using optimized ensemble methods, including Optimized-SVM, Optimized KNN, and Optimized Trees.",
      link: "https://drive.google.com/file/d/1Z2l_2yxE63-FSo1J8U1Cjiik-OPneO_q/view?usp=drivesdk", // Replace with the actual link
      demoLink: "https://ieeexplore.ieee.org/document/10859468", // Replace with the demo link
      icon: <FaClipboardList />,
    },
    {
      title: "MBTI Analysis Project",
      description:
        "Semi-finalist in the Unstop Talent Park competition for a project on MBTI Analysis.",
      link: "https://drive.google.com/file/d/1SGTgt7eBRYEzODrnGksMeKMamgAS7F9V/view?usp=drivesdk", // Replace with the actual link
      demoLink: "https://docs.google.com/presentation/d/1kGOin2SbTXvjrgXXNobEKq4eG7I-lFMb/edit?usp=sharing&ouid=113160890244260595219&rtpof=true&sd=true", // Replace with the demo link
      icon: <FaTrophy />,
    },
    {
      title: "Poster Presentation",
      description:
        "Presented 'Music Recommendation System based on moods' in an R&D showcase.",
      link: "https://drive.google.com/file/d/1aILSrGatpU8Gyzf-3tq11MidoeOUUpuE/view?usp=drivesdk", // Replace with the actual link
      demoLink: "https://docs.google.com/presentation/d/1Kctrw7WbT9qCrj_ePpRXQtbLd7ITtj7i/edit?usp=sharing&ouid=113160890244260595219&rtpof=true&sd=true", // Replace with the demo link
      icon: <FaTrophy />,
    },
    {
      title: "LIMCA Book of Records",
      description:
        'Certificate of Recognition in a "nonstop speech relay challenge" for 30 hours organized by Toastmasters International (Jubilance), Hyderabad.',
      link: "https://drive.google.com/file/d/1jXABaIftLFGCG1a7jObBjZBM4hW19gV9/view?usp=drivesdk", // Replace with the actual link
      demoLink: null, // No demo link for LIMCA Book of Records
      icon: <FaAward />,
    },
  ];

  const handleCardClick = (link) => {
    window.open(link, "_blank"); // Opens the link in a new tab
  };

  const handleDemoClick = (demoLink) => {
    if (demoLink) {
      window.open(demoLink, "_blank"); // Opens demo link in a new tab if exists
    }
  };

  return (
    <section className="achievements-section">
      <h2 className="achievements-title">My Achievements</h2>
      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <div
            className="achievement-card"
            key={index}
            onClick={() => handleCardClick(achievement.link)} // Make the entire card clickable for the certificate
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
            {/* Conditionally Render View Demo Button */}
            {achievement.demoLink && (
              <button
                className="view-demo-button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the card click from firing
                  handleDemoClick(achievement.demoLink); // Opens demo link in a new tab
                }}
              >
                See More...
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
