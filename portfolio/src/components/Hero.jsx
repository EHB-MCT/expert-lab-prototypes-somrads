import React, { useRef, useEffect, useState } from "react";
import "../styles/hero.scss";
import LineMobile from "../assets/lines/line-hero.svg";
import { useMediaQuery } from "./hooks/useMediaQuery";
import LineDesktop from "../assets/lines/desktop/line-hero.svg";
import Resume from "../file/Somrad_Sharma_CV.pdf"
import gsap from "gsap";

function Hero() {
  const width = useMediaQuery();

  let Line;
  if (width <= 600) {
    // Show the mobile image for widths <= 600
    Line = LineMobile;
  } else {
    // Show the desktop image for widths > 600
    Line = LineDesktop;
  }
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let p1 = useRef(null);
  let button1 = useRef(null);
  let image = useRef(null);

  const timeline_home = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "easeInOut",
    },
  });

  useEffect(() => {
    timeline_home.from([text1, text2, text3, text4], {
      duration: 1,
      skewY: 15,
      y: 400,
      opacity: 0,
      stagger: {
        amount: 0.2,
      },
    });
    timeline_home.from([p1, button1], {
      duration: 0.6,
      x: -50,
      delay: 0.2,
      opacity: 0,
    });
  });

  return (
    <div className="Hero">
      <div className="hero-section">
        <div id="header-text">
          <div className="links-title">
            <h1 className="title" ref={(el) => (text1 = el)}>
              Creative
            </h1>
            <h1 ref={(el) => (text2 = el)}>Developer</h1>
          </div>

          <div className="rechts-title">
            <h1
              className="title"
              ref={(el) => (text3 = el)}

            >
              Somrad
            </h1>
            <h1
              className="title-left"
              ref={(el) => (text4 = el)}

            >
              Sharma
            </h1>
          </div>
        </div>

        <div className="hero-content">
          <p ref={(el) => (p1 = el)}>
            I make cool stuff on the web. I'm actively seeking <span>opportunities</span> in coding, design, or IT.
          </p>{" "}
          <div className="button" ref={(el) => (button1 = el)}>
            <a href={Resume} download="Somrad_Sharma_Cv">
              <button>RESUME</button>
            </a>
          </div>
          <div className="line">
            <img src={Line} alt="line-svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
