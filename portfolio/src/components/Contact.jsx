import React, { useEffect, useState } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";
import LinkedIn from "../assets/thumbnails/linkedin.svg";
import Github from "../assets/thumbnails/github.svg";
import LineMobile from "../assets/lines/line-contact.svg";
import gsap from "gsap";
import LineDesktop from "../assets/lines/desktop/line-contact.svg";
import "../styles/contact.scss";

function Contact() {
  const width = useMediaQuery();

  useEffect(() => {
    gsap.fromTo(
      ".Contact",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        duration: 2,
        ease: "ease-in-out",
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".Contact",
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
    <div className="Contact">
      <div className="main-content">
        <div className="title">
          <h1>3. Contact</h1>
        </div>
        <div className="line">
          <img src={Line} alt="line" />
        </div>
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
