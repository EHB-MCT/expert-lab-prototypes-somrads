import React, { useEffect, useState } from "react";
import "../styles/projects.scss";
import gsap from "gsap";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Lapaz from "../assets/thumbnails/lapaz.svg";
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

  useEffect(() => {
    gsap.from(".project-sections", {
      x: "100%",
      duration: 1,
      opacity: 1,
    });
  }, [currentSection]);

  useEffect(() => {
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
        <div className="projects web">
          <div className="project-options">
            <div className="line">
              <img src={Line} alt="line" />
            </div>
            <ul>
              <li
                className={currentSection === "web" ? "selected" : ""}
                onClick={() => handleSectionChange("web")}
              >
                Web
              </li>
              <li
                className={currentSection === "design" ? "selected" : ""}
                onClick={() => handleSectionChange("design")}
              >
                Design
              </li>
            </ul>
          </div>
          <div className="line2">
            <img src={Line} alt="line" />
          </div>

          {currentSection === "web" && (
            <div className="project-sections">
              <div className="project-item">
                <div className="spacer">
                  <div className="content-projects">
                    <div className="learn-more">
                      <a href="https://lapaz.vercel.app/" target="_blank">
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
                    <p>
                      {" "}
                      A website that i designed and build for a café in <br />{" "}
                      Leuven using <span className="accent">
                        React
                      </span> and <span className="accent">Framer Motion</span>.
                      (Currently in development)
                    </p>
                    <h1>Café Website</h1>
                  </div>
                  <img src={Lapaz} alt="lapaz" className="thumbnail" />
                </div>
              </div>

              <div className="project-item">
                <div className="spacer">
                  <div className="content-projects">
                    <div className="learn-more">
                      <a href="https://spacechat.vercel.app/" target="_blank">
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
                    <p>
                      {" "}
                      A live chat app designed and build for space lovers <br />{" "}
                      that prefers animosity using{" "}
                      <span className="accent">React</span> and{" "}
                      <span className="accent">Socket.io</span>.
                    </p>
                    <h1>Space Chat</h1>
                  </div>
                  <img src={Spacechat} alt="spacechat" className="thumbnail" />
                </div>
              </div>

              <div className="project-item">
                <div className="spacer">
                  <div className="content-projects">
                    <div className="learn-more">
                      <a
                        href="https://somrad-twitchapp.web.app"
                        target="_blank"
                      >
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
                    <p>
                      {" "}
                      The twitch app that i fully redesigned and remade with
                      <br /> <span className="accent">Angular</span>.
                    </p>
                    <h1>Twitch App</h1>
                  </div>
                  <img src={Twitch} alt="twitch" className="thumbnail" />
                </div>
              </div>
            </div>
          )}

          {currentSection === "design" && (
            <div className="project-sections">
              <div className="project-item">
                <div className="spacer">
                  <div className="content-projects">
                    <div className="learn-more">
                      <a
                        href={BeatlesPoster}
                        download="Beatles_Poster_SomradSharma"
                      >
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
                    <p>
                      {" "}
                      A poster that i designed to promote my group school
                      <br /> project about The Beatles with{" "}
                      <span className="accent">Illustrator</span>.
                    </p>
                    <h1>Beatles Poster</h1>
                  </div>
                  <img src={Beatles} alt="twitch" className="thumbnail" />
                </div>
              </div>

              <div className="project-item">
                <div className="spacer">
                  <div className="content-projects">
                    <div className="learn-more">
                    <a
                        href="https://somrad-twitchapp.web.app"
                        target="_blank"
                      >
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
                    <p>
                      {" "}
                      A school project design that i made for for a app made for
                      <br /> student housing with{" "}
                      <span className="accent">Adobe XD</span>.
                    </p>
                    <h1>Near Me</h1>
                  </div>
                  <img src={Near} alt="twitch" className="thumbnail" />
                </div>
              </div>

              <div className="project-item">
                <div className="spacer">
                  <div className="content-projects">
                    <div className="learn-more">
                      <button>
                        View Project
                        <img src={Arrow} alt="arrow" />
                      </button>
                    </div>
                    <p>
                      {" "}
                      The twitch app that i fully redesigned and remade with
                      <br /> <span className="accent">Adobe XD</span>.
                    </p>
                    <h1>Twitch Redesign</h1>
                  </div>
                  <img src={Twitch} alt="twitch" className="thumbnail" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="line-end">
        <img src={Line3} alt="line" />
      </div>
    </div>
  );
}

export default Projects;
