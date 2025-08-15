import React from "react";
import "./Home.css";
import "../App.css";
import TypingAnimation from "./TypingAnimation";

const Home = () => {
  return (
    <div className="page-content">
      <h1>
        Hi, I'm <TypingAnimation /> 👋
      </h1>
      <p>
        I build scalable web apps using JavaScript ,Java, Spring Boot, Node.js, React, and
        MySQL.
      </p>
    </div>
  );
};

export default Home;