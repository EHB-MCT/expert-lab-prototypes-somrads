import React from "react";
import LinkedIn from "../assets/thumbnails/linkedin.svg";
import Github from "../assets/thumbnails/github.svg";
import Line from "../assets/lines/line-about.svg";
import "../styles/contact.scss";

function Contact() {
  return (
    <div className="Contact" data-scroll-container>
      <h1>3. Contact</h1>
      <div className="line">
        <img src={Line} alt="line" />
      </div>
      <h2>somradsharma@yahoo.com</h2>
      <div className="images">
        <img src={LinkedIn} alt="linkedIn" />
        <img src={Github} alt="github" />
      </div>
    </div>
  );
}

export default Contact;
