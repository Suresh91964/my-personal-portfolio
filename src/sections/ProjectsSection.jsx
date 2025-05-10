import React, { useState } from "react";
import "../styles/ProjectsSection.css";

const projects = [
  {
    title: "E-Commerce Microservices Platform",
    highlights: [
      {
        heading: "Service Discovery (Eureka)",
        description:
          "Implemented Spring Cloud Eureka for service registration and discovery."
      },
      {
        heading: "API Gateway",
        description:
          "Used Spring Cloud Gateway to route client requests."
      },
      {
        heading: "Security",
        description:
          "Secured APIs using Spring Security, OAuth2.0, and JWT."
      },
      {
        heading: "Kafka Messaging",
        description:
          "Used Apache Kafka for asynchronous microservice communication."
      },
      {
        heading: "Redis",
        description:
          "Cached frequently accessed data with Redis for fast response."
      },
      {
        heading: "Database Layer",
        description:
          "Used MySQL for relational and MongoDB for product data."
      },
      {
        heading: "API Documentation (Swagger)",
        description:
          "Integrated Swagger for API interaction and understanding."
      },
      {
        heading: "Deployment with Docker and Kubernetes",
        description:
          "Containerized microservices and orchestrated via Kubernetes."
      },
      {
        heading: "Monitoring",
        description:
          "Integrated Prometheus and Grafana for real-time metrics."
      },
      {
        heading: "Frontend (ReactJS)",
        description:
          "Built with ReactJS for interactive user experience."
      }
    ]
  },
  {
    title: "DevOps Monitoring Dashboard",
    highlights: [
      {
        heading: "Prometheus",
        description: "Scraped custom metrics from service endpoints."
      },
      {
        heading: "Grafana",
        description: "Created dashboards and set alerts."
      },
      {
        heading: "Docker Compose",
        description: "Set up a full monitoring stack locally."
      },
      {
        heading: "Node Exporter",
        description: "Monitored host-level metrics."
      },
      {
        heading: "Slack Integration",
        description: "Real-time alerts sent to Slack channels."
      }
    ]
  },
  {
    title: "AI-Based Story Generator",
    highlights: [
      {
        heading: "OpenAI API",
        description: "Generated children’s stories dynamically."
      },
      {
        heading: "Voice Narration",
        description: "Used Web Speech API for narration."
      },
      {
        heading: "MongoDB",
        description: "Stored user-generated stories."
      },
      {
        heading: "Streaming UI",
        description: "Displayed story in typewriter animation style."
      },
      {
        heading: "PDF Export",
        description: "Enabled downloading stories as PDF."
      }
    ]
  }
];

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">
        <span className="white">My </span>
        <span className="green">Projects</span>
      </h2>

      <div className="projects-slider-container">
        <button className="nav-button prev-button" onClick={handlePrevious}>
          <span>&#8249;</span>
        </button>

        <div className="project-box">
          <h3 className="project-title">{projects[current].title}</h3>
          <h4 className="project-subtitle">Project Highlights</h4>
          <ul className="project-highlights">
            {projects[current].highlights.map((item, index) => (
              <li key={index}>
                <strong >{item.heading}:</strong> {item.description}
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

export default ProjectsSection;
