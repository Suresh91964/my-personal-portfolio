import '../styles/CertificatesSection.css';
import { FaArrowRight, FaMedal } from 'react-icons/fa';




const CertificatesSection = () => {
  const certificates = [
  {
    title: "Advanced Java Programming",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/95019e30f7afb7a2d052ddf449017893494aa804fbbe090ff9159857fb80fe6d?trk=share_certificate"
  },
  {
    title: "Spring Boot Microservice",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/70c8828f7c13aed6f48bedd80993b5e781912b75785bc9669c3523ca44d2f26a?trk=share_certificate"
  },
  {
    title: "Test-Driven Development in Spring Boot with JUnit and Mockito",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/3f327ff612fc96bd9ea3b65adfd0955296d015db26dc7257c6e7c18b4171e34f?trk=share_certificate"
  },
  {
    title: "React: Creating and Hosting a Full Stack Site",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/eb6cc555b43333e0fe32b267d333fd77007af0582e551d339e698245ec1a499b?trk=share_certificate"
  },
  {
    title: "Learning Jenkins",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/eb8ac43b05534e9f6920981ede0a1b6c60263b6e2f5c06bdffa0fd59dc181e86?trk=share_certificate"
  },
  {
    title: "Software Development Life Cycle (SDLC)",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/b7081e451ceeb77c7d9d28f69333fb7334f8710753770e0ed051ed2f84d90dde?trk=share_certificate"
  }
]
  return (
    <section className="certificates-section" id='certificates'>
      <h2 className="certificates-title">
        <span className="white-text">My</span> <span className="green-text">Certificates</span>
      </h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="center-badge">
              <FaMedal color="#FFD700" size={28} />
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">Issued By: {cert.issuer}</p>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="view-button">
              View <FaArrowRight className="arrow-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
