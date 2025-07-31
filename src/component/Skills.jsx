import React from "react";

const Skills = () => {
  const frontend = ["HTML", "CSS", "JavaScript", "React"];
  const backend = ["Node.js", "Express.js", "Passport.js", "Java", "Spring Boot"];
  const tools = ["Visual Studio", "Eclipse", "Postman", "Swagger"];
  const others = ["Redux", "MySQL", "MongoDB", "JPA"];

  return (
    <div className="page-content">
      <h1>My Skills</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginTop: "20px", flexWrap: "wrap" }}>
        
        {/* Frontend Section */}
        <div>
          <h2>Frontend</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {frontend.map((skill, index) => (
              <span key={index} style={{ padding: "8px 12px", background: "#f4f4f4", borderRadius: "8px" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div>
          <h2>Backend</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {backend.map((skill, index) => (
              <span key={index} style={{ padding: "8px 12px", background: "#f4f4f4", borderRadius: "8px" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h2>Tools</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {tools.map((tool, index) => (
              <span key={index} style={{ padding: "8px 12px", background: "#f4f4f4", borderRadius: "8px" }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <h2>Others</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {others.map((skill, index) => (
              <span key={index} style={{ padding: "8px 12px", background: "#f4f4f4", borderRadius: "8px" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
