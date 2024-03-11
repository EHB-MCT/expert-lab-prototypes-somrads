import React, { useEffect, useState } from "react";
import "../styles/projects.scss";
import gsap from "gsap";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Lapaz from "../assets/thumbnails/fewafish.svg";
import Spacechat from "../assets/thumbnails/spacechat.svg";
import Twitch from "../assets/thumbnails/twitch.svg";
import Beatles from "../assets/thumbnails/beatles.svg";
import Near from "../assets/thumbnails/near-me.svg";
import Arrow from "../assets/lines/arrow.svg";
import BeatlesPoster from "../file/posterFinal.png";
import LineMobile from "../assets/lines/line-projects.svg";
import LineDesktop from "../assets/lines/desktop/line-projects.svg";
import LineMobile3 from "../assets/lines/line-projects-bottom.svg";
import LineDesktop3 from "../assets/lines/desktop/line-projects-bottom.svg";

function Projects() {
  const width = useMediaQuery();
  const [currentSection, setCurrentSection] = useState("web");
  const [clickedProject, setClickedProject] = useState(null);

  const handleClick = (projectName) => {
    setClickedProject(projectName);
  }

  const handleUnClick = () => {
    setClickedProject(null);
  }

  const handleSectionChange = (newSection) => {
    gsap.to(".project-sections", {
      duration: 0.5,
      x: "-100%",
      opacity: 0,
      stagger: 0.25,
      onComplete: () => {
        setCurrentSection(newSection);
      },
    });
  };

  // useEffect(() => {
  //   gsap.from(".project-sections", {
  //     x: "100%",
  //     duration: 1,
  //     opacity: 1,
  //   });
  // }, [currentSection]);

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".Projects",
  //     {
  //       x: -100,
  //       opacity: 0,
  //     },
  //     {
  //       x: 0,
  //       duration: 1,
  //       ease: "ease-in-out",
  //       opacity: 1,
  //       delay: 1,
  //       scrollTrigger: {
  //         trigger: ".Projects",
  //       },
  //     }
  //   );
  // }, []);

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
            <div className="item-info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda illo quo suscipit ab doloribus itaque, tempora facilis earum, magnam velit eum. Impedit eius aliquid sunt nemo adipisci? Maiores, officia recusandae!
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
