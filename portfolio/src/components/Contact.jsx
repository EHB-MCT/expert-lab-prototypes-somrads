import React from "react";
import LinkedIn from "../assets/thumbnails/linkedin.svg";
import Github from "../assets/thumbnails/github.svg";
import Line from "../assets/lines/line-about.svg"


function Contact() {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <img src={Line} alt="line" />
      <h2>somradsharma@yahoo.com</h2>
      <img src={LinkedIn} alt="linkedIn" />
      <img src={Github} alt="github" />
    </div>
  );
}

export default Contact;
