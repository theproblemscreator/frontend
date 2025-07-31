import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <hr />
      <p>
        Hi, I'm <strong>Ajay Rathod</strong>, a passionate Full Stack Developer with 3+ years of
        experience building scalable and user-friendly applications. I specialize in
        <strong> Java, Spring Boot, Node.js, React, and MySQL</strong>.
      </p>
      <p>
        I enjoy creating end-to-end solutions from designing APIs to implementing modern UI. I have worked on projects
        like a <strong>Debt Processing System</strong>, <strong>Invoice Generation</strong>, and a
        <strong> Restaurant Management System</strong>.
      </p>
      <p>
        My goal is to continuously learn and build applications that make a difference.
      </p>
      <a
        href="Ajay-Rathod-latest.pdf"
        download
        className="resume-button"
      >
        Download Resume
      </a>
    </div>
  );
};

export default About;
