import React from 'react'
import "../App.css";
import TypingAnimation from './TypingAnimation';

const Contact = () => {
  const linkedin_url = "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile";
  return (
    <div className="page-content">
      <h1>Contact Me</h1>
      <hr />
      <p>Email: <a><b>ajaygrathod25@gmail.com</b></a></p>
      <p>LinkedIn: <a href={linkedin_url} target="_blank" rel="noreferrer">View Profile</a></p>
    </div>
  );
};

export default Contact;
