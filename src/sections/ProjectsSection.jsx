import React, { useState } from "react";
import "../styles/ProjectsSection.css";

const projects = [
  {
    title: "Battery-as-a-Service(BaaS)",
    highlights: [
      {
        heading: "Microservices Architecture",
        description: " Developed microservices for user registration, login, profile management, battery usage tracking, geolocation and payment gateway, leveraging Spring Boot."
      },

      {
        heading: "Service Discovery (Eureka)",
        description: "Enabled automatic registration and discovery of services using Spring Cloud Eureka."
      },
      {
        heading: "API Gateway",
        description: "Used Spring Cloud Gateway for routing, logging, filtering, and auth."
      },
      {
        heading: "Spring Security with JWT",
        description: "Secured REST APIs with stateless JWT and role-based access control."
      },
      {
        heading: "Database Layer",
        description: "MySQL used for transactional services, MongoDB for product catalog."
      },
      {
        heading: "Inter-Service Communication",
        description: "Implemented both REST (sync) and Kafka (async) for communication."
      },
      {
        heading: "Resilience (Resilience4j)",
        description: "Applied circuit breakers, rate-limiting, and retries to ensure fault tolerance."
      },
      {
        heading: "Swagger Documentation",
        description: "Integrated Swagger for API documentation in each service."
      },
      {
        heading: "Deployment (Docker + Kubernetes)",
        description: "Containerized and deployed microservices with Docker and Kubernetes."
      },
      {
        heading: "Frontend (ReactJS)",
        description: "Responsive UI for product browsing, cart, orders, and authentication."
      }
    ]
  },
  {
    title: "Vehicle Telematics and Analytics Platform",
    highlights: [
      {
        heading: "Microservices Architecture",
        description: "Designed and implemented a scalable microservices architecture for a Vehicle Telematics and Analytics Platform, utilizing Spring Boot and Kafka for real-time data processing, enhancing system responsiveness and maintainability."
      },
      {
        heading: "Service Discovery (Eureka)",
        description: "Enabled automatic registration and discovery of services using Spring Cloud Eureka."
      },
      {
        heading: "API Gateway",
        description: "Used Spring Cloud Gateway for routing, logging, filtering, and auth."
      },
      {
        heading: "Spring Security with JWT",
        description: "Secured REST APIs with stateless JWT and role-based access control."
      },
      {
        heading: "Database Layer",
        description: "MySQL used for transactional services, MongoDB for product catalog."
      },
      {
        heading: "Inter-Service Communication",
        description: "Implemented both REST (sync) and Kafka (async) for communication."
      },
      {
        heading: "Resilience (Resilience4j)",
        description: "Applied circuit breakers, rate-limiting, and retries to ensure fault tolerance."
      },
      {
        heading: "Swagger Documentation",
        description: "Integrated Swagger for API documentation in each service."
      },
      {
        heading: "Deployment (Docker + Kubernetes)",
        description: "Containerized and deployed microservices with Docker and Kubernetes."
      },
    ]
  },
  {
    title: "E-Commerce Microservices Application",
    highlights: [
      {
        heading: "Microservices Architecture",
        description: "Developed services like product, order, user, inventory, and payment, each with independent databases."
      },
      {
        heading: "Service Discovery (Eureka)",
        description: "Enabled automatic registration and discovery of services using Spring Cloud Eureka."
      },
      {
        heading: "API Gateway",
        description: "Used Spring Cloud Gateway for routing, logging, filtering, and auth."
      },
      {
        heading: "Spring Security with JWT",
        description: "Secured REST APIs with stateless JWT and role-based access control."
      },
      {
        heading: "Database Layer",
        description: "MySQL used for transactional services, MongoDB for product catalog."
      },
      {
        heading: "Inter-Service Communication",
        description: "Implemented both REST (sync) and Kafka (async) for communication."
      },
      {
        heading: "Resilience (Resilience4j)",
        description: "Applied circuit breakers, rate-limiting, and retries to ensure fault tolerance."
      },
      {
        heading: "Inventory Management",
        description: "Real-time stock checks and updates using inventory-service."
      },
      {
        heading: "Swagger Documentation",
        description: "Integrated Swagger for API documentation in each service."
      },
      {
        heading: "Deployment (Docker + Kubernetes)",
        description: "Containerized and deployed microservices with Docker and Kubernetes."
      },
      {
        heading: "Frontend (ReactJS)",
        description: "Responsive UI for product browsing, cart, orders, and authentication."
      }
    ]
  },
  {
    title: "Payment Microservice with Real-Time Notifications",
    highlights: [
      {
        heading: "Spring Boot Microservices",
        description: "Dedicated payment and notification services built for scalability."
      },
      {
        heading: "Kafka Messaging",
        description: "Published payment events and consumed them in the notification service."
      },
      {
        heading: "Secure Payment Handling",
        description: "Simulated Stripe/PayPal with idempotency and ACID guarantees using MySQL."
      },
      {
        heading: "Spring Security with JWT",
        description: "Protected APIs with JWT-based authentication and role control."
      },
      {
        heading: "Redis Caching",
        description: "Used Redis for temporary payment states and fast access."
      },
      {
        heading: "Notification Service",
        description: "Sent real-time emails/SMS using Kafka event listeners."
      },
      {
        heading: "Swagger/OpenAPI",
        description: "Documented APIs for easier testing and integration."
      },
      {
        heading: "Docker Deployment",
        description: "Containerized both services for modular deployments via Docker/Kubernetes."
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

export default ProjectsSection;
