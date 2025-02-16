import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import CertAndIntern from "./components/CertAndIntern"; // Correct import for CertAndIntern component
import Skills from "./components/Skills";
import Achievements from "./components/Achievements"; // Import Achievements component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certandintern" element={<CertAndIntern />} /> {/* Updated route for CertAndIntern */}
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} /> {/* Added Achievements route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
