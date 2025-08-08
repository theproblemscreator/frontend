import React from 'react'
import "../App.css";
import TypingAnimation from './TypingAnimation';

const Contact = () => {
  const linkedin_url = "https://www.linkedin.com/in/ajay-rathod-30639b187/?msgControlName=view_message_button&msgConversationId=2-OGUyMzgwNjMtZmIzMy00ZTQ4LTliMmEtZjU1YzJlNTZiODU5XzAxMw%3D%3D&msgOverlay=true";
  return (
    <div className="page-content">
      <h1>Contact Me</h1>
      <hr />
      <p>Email: <a><b>ajgrathod2025@gmail.com</b></a></p>
      <p>LinkedIn: <a href={linkedin_url} target="_blank" rel="noreferrer">View Profile</a></p>
    </div>
  );
};

export default Contact;
