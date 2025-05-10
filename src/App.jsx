import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './sections/AboutSection';
import HomeSection from './sections/HomeSection';
import ContactSection from './sections/ContactSection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import CertificatesSection from './sections/CertificatesSection';
import FooterSection from './sections/FooterSectio';

function App() {
  return (
    <>
      <Navbar />
      <main className='mainSection'>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}

export default App;
