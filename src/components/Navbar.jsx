import { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link (for actual page routing, but not for in-page anchors)
import '../styles/Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-container">
        <h1 className="navbar-title">Pokala <br /> Suresh Kumar</h1>

        <button 
          className="menu-toggle" 
          aria-label="Toggle menu" 
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Experience', id: 'experience' },
            { name: 'Projects', id: 'projects' },
            { name: 'Education', id: 'education' },
            { name: 'Certificates', id: 'certificates' },
            { name: 'Contact', id: 'contact' }, // Updated to correct id
          ].map(link => (
            <li key={link.id} onClick={closeMenu}>
              <a href={`#${link.id}`}>{link.name}</a> {/* Using anchor links */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
