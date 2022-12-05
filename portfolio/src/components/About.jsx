import React from "react";
import "../styles/about.scss";
import Line from "../assets/lines/line-about.svg";

function About() {
  return (
    <div className="About" data-scroll-container>
      <div className="content-right">
        <h1>1. About Me</h1>
        <div className="line">
          <img src={Line} alt="line" />
        </div>
        <div className="about-section">
          <p>
            Hello! My name is Somrad and I am a student that studies in Erasmus
            University College Brussels. <br /> I am currently doing my third
            year bachelor in Creative Technologies & Business Communication. My
            main focus these days is creating fun, cool designs and websites.
          </p>
        </div>
      </div>

      <div className="technologies">
        <p>Here are some technologies i worked with:</p>
        <div className="list">
          <ul>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>Angular</li>
          </ul>

          <ul>
            <li>Adobe After Effects</li>
            <li>Adobe Illustrator</li>
            <li>Figma</li>
            <li>AdobeXD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
