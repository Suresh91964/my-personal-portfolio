import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../styles/FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        © 2025 Pokala Suresh Kumar. All rights reserved.
      </div>
      <div className="footer-right">
        <a href="https://www.linkedin.com/in/suresh-kumar-pokala-829671210/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="footer-icon" />
        </a>
        <a aria-label="Email">
          <MdEmail className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
