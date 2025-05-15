import React from 'react';
import '../styles//AboutSection.css';
import profileImage from '../assets/HomeSectionImage.png'; // Replace with your actual image path
import { FaLinkedin } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="about-section" id='about'>
      <h2 className="about-title">
        <span className="about-white">About</span> <span className="myself-green">Myself</span>
      </h2>

      <div className="about-flex">
        <img src={profileImage} alt="Profile" className="about-image" />
        <div className="about-text">
          <p className="about-description">
            Innovative Developer with 2.9 years of experience in designing and implementing scalable applications using Java and Spring Boot,
            demonstrating familiarity with the whole web stack. Proven expertise in developing RESTful APIs and microservices, optimizing performance,
            and ensuring high code quality through automated testing. Excellent problem-solving skills and a collaborative mindset, working within Agile
            teams to meet project deadlines and business objectives. Committed to continuous learning and applying emerging technologies to enhance
            system functionality and improve user experience.
          </p>
          <a
            href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            <FaLinkedin className="linkedin-icon" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;