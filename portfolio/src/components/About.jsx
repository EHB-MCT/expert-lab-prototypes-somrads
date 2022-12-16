import React, { useRef, useEffect } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../styles/about.scss";
import LineMobile from "../assets/lines/line-about.svg";
import LineDesktop from "../assets/lines/desktop/line-about.svg";

function About() {
  const width = useMediaQuery();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".About",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        duration: 1,
        ease: "ease-in-out",
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".About",
        },
      }
    );
  }, []);
  let Line;
  if (width <= 600) {
    // Show the mobile image for widths <= 600
    Line = LineMobile;
  } else {
    // Show the desktop image for widths > 600
    Line = LineDesktop;
  }

  return (
    <div className="About">
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
