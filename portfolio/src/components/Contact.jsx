import React from "react";
import LinkedIn from "../assets/thumbnails/linkedin.svg";
import Github from "../assets/thumbnails/github.svg";
import Line from "../assets/lines/line-about.svg";
import "../styles/contact.scss";

function Contact() {
  return (
    <div className="Contact" data-scroll-container>
      <div className="main-content">
        <div className="title">
          <h1>3. Contact</h1>
        </div>
        <div className="line">{/* <img src={Line} alt="line" /> */}</div>
        <div className="content">
          <h2>somradsharma@yahoo.com</h2>
          <div className="images">
            <img src={LinkedIn} alt="linkedIn" />
            <img src={Github} alt="github" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
