import React, { useEffect, useState, useRef,useLayoutEffect } from "react";
import gsap from "gsap";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Arrow from "../assets/lines/arrow.svg";
import CloseArrow from "../assets/arrow-up.svg";
import LineMobile from "../assets/lines/line-projects.svg";
import LineDesktop from "../assets/lines/desktop/line-projects.svg";
import LineMobile3 from "../assets/lines/line-projects-bottom.svg";
import LineDesktop3 from "../assets/lines/desktop/line-projects-bottom.svg";
import "../styles/projects.scss";

function Projects() {
  const width = useMediaQuery();
  const [currentSection, setCurrentSection] = useState("web");
  const [clickedProject, setClickedProject] = useState(null);
  const infoRef = useRef(null);

  const handleClick = (projectName) => {
    console.log("Clicked project:", projectName);
    if (projectName === clickedProject) {
      // If the same project is clicked again, close it
      animateProject(false);
      setClickedProject(null);
    } else {
      // Otherwise, open the clicked project
      setClickedProject(projectName);
      animateProject(true);
    }
  };

  const animateProject = (show) => {
    console.log("Animating project:", show);
    const target = infoRef.current;
  
    // Check if the ref is available before animating
    target?.style && gsap.to(target, {
      duration: 1,
      height: show ? "100%" : 0,
      opacity: show ? 1 : 0,
      ease: "power2.inOut",
    });
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      ".Projects",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        duration: 1,
        ease: "ease-in-out",
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".Projects",
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
  let Line3;
  if (width <= 600) {
    // Show the mobile image for widths <= 600
    Line3 = LineMobile3;
  } else {
    // Show the desktop image for widths > 600
    Line3 = LineDesktop3;
  }

  return (
    <div className="Projects" id="projects">
      <div className="project-titles">
        <h1>2. Projects</h1>

      <div className="line-end">
        <img src={Line3} alt="line" />
      </div>


      <div className="project-wrapper">
          <div className="project-item" onClick={() => handleClick("fewa fish")}>
            <p>fewa fish</p>
            <p id="project-tag">react.js</p>
            <p>website</p>
          </div>

          {clickedProject === "fewa fish" && (
            <div className="item-info" ref={infoRef}  onClick={() => handleClick("fewa fish")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
                I've created a sleek, mobile-responsive website for a fish store
                in Leuven. It's designed to captivate visitors, showcasing the
                store's diverse offerings. The site promises a seamless and
                engaging online experience, elevating the client's digital
                presence.
              </p>
              <div className="learn-more">
                      <a href="https://fewafish.be" target="_blank">
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
            </div>
          )}


          <div className="project-item">
            <p>spacechat</p>
            <p id="project-tag">react.js, node.js, websockets</p>
            <p>website</p>
          </div>

          <div className="project-item">
            <p>flashback</p>
            <p id="project-tag">react native</p>
            <p>app</p>
          </div>

          <div className="project-item">
            <p>anonymously connect</p>
            <p id="project-tag">react.js, node.js, docker, postgresql</p>
            <p>website</p>
          </div>

          <div className="project-item">
            <p>magazine "flashback"</p>
            <p id="project-tag">indesign, figma, illustrator, photoshop</p>
            <p>magazine</p>
            </div>

            <div className="project-item">
            <p>films by chima</p>
            <p id="project-tag">illustrator, photoshop, figma</p>
            <p>logo</p>
          </div>

          <div className="project-item">
            <p>amai coffee shop</p>
            <p id="project-tag">illustrator, photoshop</p>
            <p>logo</p>
          </div>

          <div className="project-item">
            <p>love sparks</p>
            <p id="project-tag">illustrator, photoshop</p>
            <p>poster</p>
          </div>


          <div className="project-item">
            <p>manzoku sushi
            </p>
            <p id="project-tag">illustrator, photoshop, indesign</p>
            <p>branding</p>
          </div>
          
          </div>

      </div>
    </div>
  );
}

export default Projects;
