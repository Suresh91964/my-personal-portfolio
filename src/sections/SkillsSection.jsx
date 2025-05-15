import '../styles/SkillsSection.css';


const SkillBox = ({ name, iconClass, imageUrl }) => (
  <div className="skill-box">
    {iconClass ? (
      <i className={`${iconClass} colored skill-icon`}></i>
    ) : (
      <img src={imageUrl} alt={name} className="skill-icon-img" />
    )}
    <span>{name}</span>
  </div>
);

const SkillsSection = () => {
  const programmingLanguages = [
    { name: 'Java', iconClass: 'devicon-java-plain' },
    { name: 'HTML', iconClass: 'devicon-html5-plain' },
    { name: 'CSS', iconClass: 'devicon-css3-plain' }
  ];

  const domainSkills = [
    { name: 'Spring Boot', iconClass: 'devicon-spring-plain' },
    { name: 'Spring Security', iconClass: 'devicon-spring-plain' },
    { name: 'Spring Data JPA', iconClass: 'devicon-spring-plain' },
    { name: 'Spring Cloud', iconClass: 'devicon-spring-plain' },
    { name: 'Microservices', iconClass: 'devicon-spring-plain' },
    { name: 'Apache Kafka', iconClass: 'devicon-apachekafka-original' },
    { name: 'Redis', iconClass: 'devicon-redis-plain' },
    { name: 'JWT', imageUrl: 'https://cdn-icons-png.flaticon.com/512/10230/10230694.png' },
    { name: 'OAuth2.0', iconClass: 'devicon-google-plain' },
    { name: 'MySQL', iconClass: 'devicon-mysql-plain' },
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
    { name: 'Junit', iconClass: 'devicon-java-plain' },
    { name: 'Mockito', iconClass: 'devicon-java-plain' },
    // { name: 'Swagger', imageUrl: 'https://www.vectorlogo.zone/logos/swaggerio/swaggerio-icon.svg' },
    { name: 'ReactJS', iconClass: 'devicon-react-original' }
  ];

  const tools = [
    { name: 'Git', iconClass: 'devicon-git-plain' },
    { name: 'Jira', iconClass: 'devicon-jira-plain' },
    { name: 'Jenkins', iconClass: 'devicon-jenkins-plain' },
    { name: 'Docker', iconClass: 'devicon-docker-plain' },
    { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain' },
    { name: 'Confluence', iconClass: 'devicon-confluence-plain' },
    { name: 'IntelliJ IDEA', iconClass: 'devicon-intellij-plain' },
    { name: 'Eclipse', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/eclipse-3521354-2944791.png' },
    { name: 'Visual Studio Code', iconClass: 'devicon-vscode-plain' },
    { name: 'Maven', iconClass: 'devicon-apache-plain' },
    { name: 'Postman', imageUrl: 'https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png' },
    { name: 'MySQL Workbench', iconClass: 'devicon-mysql-plain' },
    { name: 'Windows', iconClass: 'devicon-windows8-original' },
    { name: 'Microsoft365', iconClass: 'devicon-microsoft-plain' }
  ];

  const renderSkills = (skills) =>
    skills.map((skill) => (
      <SkillBox
        key={skill.name}
        name={skill.name}
        iconClass={skill.iconClass}
        imageUrl={skill.imageUrl}
      />
    ));

  return (
    <section className="skills-section" id='skills'>
      <h2 className="section-title">
        <span className="my-white">My</span> <span className="skills-green">Skills</span>
      </h2>
      <div className="category">
        <h3>Programming Languages</h3>
        <div className="skills-grid">{renderSkills(programmingLanguages)}</div>
      </div>

      <div className="category">
        <h3>Domain Specific Skills</h3>
        <div className="skills-grid">{renderSkills(domainSkills)}</div>
      </div>

      <div className="category">
        <h3>Tools</h3>
        <div className="skills-grid">{renderSkills(tools)}</div>
      </div>
    </section>
  );
};

export default SkillsSection;
