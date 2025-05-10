import React, { useState } from "react";
import "../styles/ExperienceSection.css";

const experiences = [
  {
    company: "Tata Elxsi",
    role: "Senior Engineer",
    duration: "July 2022 - Present",
    highlights: [
      {
        heading: "Application Development",
        description:
          "Developed and maintained high-performance backend applications using Java and Spring Boot, ensuring efficient data processing, reliability, and scalability."
      },
      {
        heading: "RESTful API Development",
        description:
          "Designed and implemented RESTful APIs using Spring Boot and Core Java, achieved a 25% reduction in response time by optimizing data exchange between client and server through efficient queries and Redis caching."
      },
      {
        heading: "Microservices & Event-Driven Architecture",
        description:
          "Developed and deployed a microservices architecture, leveraging Apache Kafka for event-driven communication and Redis for caching, reduced response time by up to 30% while improving system scalability and performance."
      },
      {
        heading: "Database Management",
        description:
          "Integrated and optimized MySQL and MongoDB databases using Spring Data JPA,Hibernate, and JDBC, ensuring efficient data access and reduced query response time by 20%."
      },
      {
        heading: "Security & Authentication",
        description:
          "mplemented Spring Security for authentication and authorization, securing APIs with JWT and OAuth2 to protect sensitive data and enforce role-based access control."
      },
      {
        heading: "CI/CD & Deployment",
        description:
          "Automated build, test, and deployment pipelines using Git, Jenkins, Docker, and Kubernetes have reduced deployment time by 80% while improving code quality"
      },
      {
        heading: "Testing & QA",
        description:
          "Achieved 90% code coverage by writing and maintaining unit and integration tests using JUnit and Mockito, ensuring high-quality, bug-free code."
      },
      {
        heading: "Debugging & Issue Resolution",
        description:
          "iagnosed and resolved complex production and development issues using tools like Postman, Log4j, Splunk, and IntelliJ Debugger, reducing issue resolution time by 40%"
      },
      {
        heading: "Agile & Collaboration",
        description:
          "Worked in Agile/Scrum teams, participating in sprint planning, stand-ups, and retrospectives using Jira and Confluence, ensuring timely project delivery."
      },
      {
        heading: "Frontend Development",
        description:
          "Developed dynamic and responsive web applications using ReactJs, improving performance and user engagement."
      },
      {
        heading: "Development Tools & Environments",
        description:
          " Worked with Git, Jira, IntelliJ IDEA, Visual Studio Code, Postman, MySQL Workbench, and Microsoft 365 in Windows environments for efficient development and collaboration."
      }
      
    ]
  },
  {
    company: "Devtown",
    role: "FrontEnd Developer",
    duration: "Jul 2021 - Dec 2021",
    highlights: [
  {
    heading: "Basic ReactJS Development",
    description:
      "Built user interfaces using ReactJS components and JSX, focusing on clean and readable code."
  },
  {
    heading: "State Management",
    description:
      "Used React's useState and useEffect hooks to manage local component state and side effects."
  },
  {
    heading: "Intro to Redux",
    description:
      "Learned and implemented Redux for simple global state management in small-scale applications."
  },
  {
    heading: "Responsive Design",
    description:
      "Created mobile-friendly layouts using CSS Flexbox and Grid to ensure responsiveness across devices."
  },
  {
    heading: "Routing in React",
    description:
      "Implemented navigation between pages using React Router."
  },
  {
    heading: "Form Handling",
    description:
      "Handled form inputs and validations using controlled components in React."
  },
  {
    heading: "Version Control",
    description:
      "Used Git and GitHub for version control and collaboration on small projects."
  }
]
  }
];

const ExperienceSection = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % experiences.length);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">
        <span className="white">My </span>
        <span className="green">Experience</span>
      </h2>

      <div className="experience-slider-container">
        <button className="nav-button prev-button" onClick={handlePrevious}>
          <span>&#8249;</span>
        </button>

        <div className="experience-box">
          <h3 className="company-title">{experiences[current].company}</h3>
          <p className="role-duration">
            {experiences[current].role} -{" "}
            <span className="duration">{experiences[current].duration}</span>
          </p>
          <h4 className="experience-highlights-title">Key Highlights</h4>
          <ul className="experience-highlights">
            {experiences[current].highlights.map((item, index) => (
              <li key={index}>
                <strong>{item.heading}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>

        <button className="nav-button next-button" onClick={handleNext}>
          <span>&#8250;</span>
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;
