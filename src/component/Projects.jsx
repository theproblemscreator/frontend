import React from "react";
import "./Projects.css";
import "../App.css";

const Projects = () => {
  const projectList = [
    {
      name: "Debt Processing System (DPS App)",
      description:
        "A Spring Boot and MySQL-based system to manage debts, assign agents, track repayments, and generate reports. Includes JWT-based authentication and centralized logging.",
      tech: "Spring Boot, JPA, MySQL, JWT, ELK Stack",
      github: "https://github.com/yourusername/dps-app",
      live: "#"
    },
    {
      name: "Invoice Generation App",
      description:
        "A Node.js and MongoDB application for generating dynamic invoices, managing clients, and downloading PDF invoices with proper formatting.",
      tech: "Node.js, Express, MongoDB, EJS, PDFKit",
      github: "https://github.com/yourusername/invoice-generator",
      live: "#"
    },
    {
      name: "Personal Portfolio Website",
      description:
        "A React-based responsive portfolio showcasing projects, skills, and contact form with clean UI and smooth navigation.",
      tech: "React, React Router, CSS",
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.vercel.app"
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <hr />
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
        </div>
        ))}
        <br />
      </div>
    </div>
  );
};

export default Projects;
