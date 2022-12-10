import React from "react";
import "../styles/projects.scss";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Lapaz from "../assets/thumbnails/lapaz.svg";
import Spacechat from "../assets/thumbnails/spacechat.svg";
import Twitch from "../assets/thumbnails/twitch.svg";
import Arrow from "../assets/lines/arrow.svg";
import LineMobile from "../assets/lines/line-projects.svg";
import LineDesktop from "../assets/lines/desktop/line-projects.svg";
import LineMobile2 from "../assets/lines/line-projects-web.svg";
import LineDesktop2 from "../assets/lines/desktop/line-projects-web.svg";
import LineMobile3 from "../assets/lines/line-projects-bottom.svg";
import LineDesktop3 from "../assets/lines/desktop/line-projects-bottom.svg";

function Projects() {
  const width = useMediaQuery();

  let Line;
  if (width <= 600) {
    // Show the mobile image for widths <= 600
    Line = LineMobile;
  } else {
    // Show the desktop image for widths > 600
    Line = LineDesktop;
  }

  let Line2;
  if (width <= 600) {
    // Show the mobile image for widths <= 600
    Line2 = LineMobile2;
  } else {
    // Show the desktop image for widths > 600
    Line2 = LineDesktop2;
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
    <div className="Projects">
      <div className="project-titles">
        <h1>2. Projects</h1>
        <div className="project-options">
          <div className="line">
            <img src={Line} alt="line" />
          </div>
          <ul>
            <li>Web</li>
            <li>Design</li>
          </ul>
        </div>
        <div className="line2">
          <img src={Line2} alt="line" />
        </div>
        <div className="project-sections">
          <div className="project-item">
            <div className="spacer">
              <div className="content-projects">
                <div className="learn-more">
                  <button>
                    Learn More
                    <img src={Arrow} alt="arrow" />
                  </button>
                </div>
                <p>
                  {" "}
                  A website that i designed and build for a café in <br />{" "}
                  Leuven.
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
                  <button>
                    Learn More
                    <img src={Arrow} alt="arrow" />
                  </button>
                </div>
                <p>
                  {" "}
                  A live chat app designed and build for space lovers <br />{" "}
                  that prefers animosity.
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
                  <button>
                    Learn More
                    <img src={Arrow} alt="arrow" />
                  </button>
                </div>
                <p>
                  {" "}
                  The twitch app that i fully redesigned and remade with
                  <br /> angular.
                </p>
                <h1>Twitch App</h1>
              </div>
              <img src={Twitch} alt="twitch" className="thumbnail" />
            </div>
          </div>
        </div>
      </div>

      <div className="line-end">
        <img src={Line3} alt="line" />
      </div>
    </div>
  );
}

export default Projects;
