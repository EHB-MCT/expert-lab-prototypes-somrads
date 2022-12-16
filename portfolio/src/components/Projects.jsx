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
                      href="https://xd.adobe.com/view/3063b08c-4657-41ad-a163-4b7bb1bc6593-6530/"
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
                      <a
                        href="https://adobeid-na1.services.adobe.com/ims/jump/eyJraWQiOiJpbXNfbmExLWtleS1hdC0xIiwiYWxnIjoiUlMyNTYifQ.eyJqdGkiOiIxNjcxMjI4MzY1NjkzX2Q5ZDEwMGVjLTQ2NmQtNDFiYy04ZDYzLWIzMWU4OThjYWRjNl9ldzEiLCJjaWQiOiJDb21ldFdlYjEiLCJ1aWQiOiI1Q0E0MDRCRTVCQjVGMjYwMEE0OTVFMkNAQWRvYmVJRCIsInJ1IjoiaHR0cHM6Ly94ZC5hZG9iZS5jb20vdmlldy8yYjYxZTU4Mi05OTVkLTRlMTktOTAyMC1kNmE5ZDFjMWJkYjEtN2UzMi8iLCJydCI6InRva2VuIiwiY2UiOiJBZF9fRHhieUZyUHg1cFdyWDV4b3hSbkRtVnFIRzlqc1FDa1k4Y1RDS1ktaVlBUTNLUVYwOVZCYVR6VzY1UVotcUZ5MTgzVkhLRm9aNm9CTGJYWUc5Tm8xMHN2QnRfUGtXSEEta3N0S2ZBZnNKUSIsImV4cCI6MTY3MTIyOTI2NTY5MywicmYiOiJYQkJNWVk2M1ZQRTVJWFVLT01RVllIWUFITT09PT09PSIsInNpcCI6Ijc0MDA5YzExIiwiZHRpZCI6IjE1NzkzMDA2NjkyMDhfMDNkOGUzZGEtYjdiNi00ZWU4LTgyMmYtZDUyODYwMDMwZGIxX3VlMSIsImlzcyI6Imh0dHBzOi8vaW1zLW5hMS5hZG9iZWxvZ2luLmNvbSJ9.PKte0TQLv00jOH1tWTCXIX_O1WkIi61q4SeFmkj7dT0bHJ3hrZp0PCb5lot8j3QyJWefdoAe_Qwcib3nLLY3FM0GrMZPBYli4KLDAybMFdi7gmlb3W9ipnOmbV-7Ryyw1y63nY5Lk1ycNBQ3J9NsdhRpPBTP74HuA7t49tkAgD9HqV2Ydsslh5Gl98_bxvFRsaPAAagHdUaf-3ttzDG6hOas4ElYpvFKI8Ro7lVGVhO8kZsZ7id2aYXFEL7jA2ZP10K7Wp3r4DEQI8B97uSH8gNe1tw10r1wIzC3G3rJ3AC2K2KyxJhJSugswNJjXsUp1vTDDTdN_c0z3KXYpwCaog
                        "
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
