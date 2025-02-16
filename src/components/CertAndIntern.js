import React, { useState } from "react";
import "./CertAndIntern.css";
import c1Image from '../assets/c1.jpg';
import c2Image from '../assets/c2.jpg';
import c3Image from '../assets/c3.jpg';
import c4Image from '../assets/c4.png';
import c5Image from '../assets/c5.jpg';
import c6Image from '../assets/c6.jpg';
import c7Image from '../assets/c7.png';
import c8Image from '../assets/c8.jpg';
import c9Image from '../assets/c9.jpg';
import c10Image from '../assets/c10.jpg';

import intern1Image from '../assets/in1.jpg';
import intern2Image from '../assets/in2.jpg';
import intern3Image from '../assets/in3.jpg';

const CertAndIntern = () => {
  const certifications = [
    {
      category: "NPTEL",
      subcategories: [
        { name: "Programming and DSA using Java", image: c1Image },
        { name: "Programming and DSA using Python", image: c2Image },
      ],
    },
    {
      category: "Hackerrank",
      subcategories: [
        { name: "Java", image: c3Image },
        { name: "SQL", image: c4Image },
      ],
    },
    {
      category: "Coursera",
      subcategories: [
        { name: "Crash Course in Python", image: c5Image },
        { name: "Artificial Intelligence", image: c6Image },
      ],
    },
    {
      category: "Google",
      subcategories: [
        { name: "AI Skill Badge", image: c7Image },
        { name: "GDSC Solution Challenge", image: c8Image },
      ],
    },
    {
      category: "AWS Academy",
      subcategories: [
        { name: "AWS Academy AI and Machine Learning Foundations", image: c9Image },
      ],
    },
    {
      category: "Smart Interviews",
      subcategories: [
        { name: "DSA", image: c10Image },
      ],
    },
  ];

  const internships = [
    {
      name: "Machine Learning",
      description:
        "The certificate recognizes the completion of a two-month Machine Learning internship by <b>SkillDzire</b> in collaboration with the Andhra Pradesh State Council of Higher Education.",
      image: intern1Image,
    },
    {
      name: "Python Programming",
      description:
        "This certificate marks the completion of a 4-week virtual internship in Python Programming at <b>CodSoft</b>, focusing on practical skills and project contributions.",
      image: intern2Image,
    },
    {
      name: "AI-ML Virtual Internship",
      description:
        "This certificate signifies the completion of a 10-week AI-ML virtual internship supported by <b>AWS Academy</b>, conducted from January to March 2024.",
      image: intern3Image,
    },
  ];

  const [showCertifications, setShowCertifications] = useState(true);
  const [openSubcategory, setOpenSubcategory] = useState(null);

  const toggleSection = (section) => {
    setShowCertifications(section === "certifications");
    setOpenSubcategory(null); // Close all subcategories
  };

  const handleToggle = (subcategoryName) => {
    setOpenSubcategory(openSubcategory === subcategoryName ? null : subcategoryName);
  };

  return (
    <div className="xyz-section">
            <h2 className="skills-heading">My Certs & Interns</h2>

      <div className="toggle-buttons">
        <button
          className={`toggle-button ${showCertifications ? "active" : ""}`}
          onClick={() => toggleSection("certifications")}
        >
          Certifications
        </button>
        <button
          className={`toggle-button ${!showCertifications ? "active" : ""}`}
          onClick={() => toggleSection("internships")}
        >
          Internships
        </button>
      </div>

      {showCertifications ? (
        <div className="certifications">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <h2>{cert.category}</h2>
              <div className="cert-subcategories">
                {cert.subcategories.map((subcat, subIndex) => (
                  <div className="cert-subcategory" key={subIndex}>
                    <h3
                      className="subcategory-title"
                      onClick={() => handleToggle(subcat.name)}
                    >
                      {subcat.name}{" "}
                      <span className="toggle-icon">
                        {openSubcategory === subcat.name ? "▲" : "▼"}
                      </span>
                    </h3>
                    {openSubcategory === subcat.name && (
                      <img
                        src={subcat.image}
                        alt={subcat.name}
                        className="subcategory-image"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="internships">
          {internships.map((intern, index) => (
            <div key={index} className="intern-card">
              <h3
                className="subcategory-title"
                onClick={() => handleToggle(intern.name)}
              >
                {intern.name}{" "}
                <span className="toggle-icon">
                  {openSubcategory === intern.name ? "▲" : "▼"}
                </span>
              </h3>
              <p
                className="subcategory-description"
                dangerouslySetInnerHTML={{ __html: intern.description }}
              ></p>
              {openSubcategory === intern.name && (
                <img
                  src={intern.image}
                  alt={intern.name}
                  className="subcategory-image"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CertAndIntern;
