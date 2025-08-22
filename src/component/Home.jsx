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
        I build scalable web apps using JavaScript, React, Node.js, Type.Js , Express.Js, Java, Spring Boot,  and
        MySQL.
      </p>
    </div>
  );
};

export default Home;