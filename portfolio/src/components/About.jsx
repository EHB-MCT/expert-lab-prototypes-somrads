import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { scrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "./hooks/useMediaQuery";
import "../styles/about.scss";
import LineMobile from "../assets/lines/line-about.svg";
import LineDesktop from "../assets/lines/desktop/line-about.svg";

function About() {
  const width = useMediaQuery();
  let Line;
  if (width <= 600) {
    // Show the mobile image for widths <= 600
    Line = LineMobile;
  } else {
    // Show the desktop image for widths > 600
    Line = LineDesktop;
  }

  const aboutRef = useRef(null); 

  useEffect(() => {
    gsap.registerPlugin(scrollTrigger);

    scrollTrigger.create({
      trigger: aboutRef.current, 
      start: "top top", 
      end: "bottom bottom", 
      onEnter: () => {
    
        gsap.to(aboutRef.current, {
          opacity: 1,
          duration: 1,
        });
      },
      onLeave: () => {

        gsap.to(aboutRef.current, {
          opacity: 0,
          duration: 1,
        });
      },
    });
  }, []); 

  return (
    <div className="About" ref={aboutRef}>
      <div className="content-right">
        <h1 id="title">1. About Me</h1>
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
