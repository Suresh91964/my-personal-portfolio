import React from 'react';
import '../styles/HomeSection.css'; // Make sure to create this CSS file
import profileImage from '../assets/HomeSectionImage.png';

const HomeSection = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container">
        <div className="home-image">
          <img
            src={profileImage}
            alt="21-year-old backend developer"
          />
        </div>
        <div className="home-content">
          <h1 className="home-name">Pokala Suresh Kumar</h1>
          <h2 className="home-title">Software Developer</h2>
          <p className="home-description">
            Building scalable backend solutions using Java, Spring Boot, and Microservices architecture, with a focus on performance, security, and clean code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
