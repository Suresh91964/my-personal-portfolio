import React from 'react';
import '../styles/EducationSection.css';

const EducationSection = () => {
  return (
    <section className="education-section" id='education'>
      <h2 className="education-title">
        <span>My</span> <span>Education</span>
      </h2>

      <div className="education-box">
        <div className="education-content">
          <div className="education-header">
            <span className="graduation-icon">🎓</span>
            <h3>B.Tech in Electronics and Communication Engineering</h3>
          </div>
          <div className="institution">
            <p>Karunya Institute of Technology and Sciences</p>
          </div>
          <div className="education-details">
            <span className="calendar-icon">📅</span>
            <span className="dates">July 2018 - June 2022</span>
            <span className="cgpa">CGPA: 8.05</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
