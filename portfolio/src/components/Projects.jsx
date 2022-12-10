import React from "react";
import "../styles/projects.scss";
import Line2 from "../assets/lines/line-projects-web.svg";
import Line from "../assets/lines/line-projects.svg";
import Line3 from "../assets/lines/line-left-short.svg";
import Lapaz from "../assets/thumbnails/lapaz.svg";
import Spacechat from "../assets/thumbnails/spacechat.svg";
import Twitch from "../assets/thumbnails/twitch.svg";
import Arrow from "../assets/lines/arrow.svg";

function Projects() {
  return (
    <div className="Projects">
      <div className="project-titles">
        <h1>2. Projects</h1>
        <div className="project-options">
          {/* <div className="line">
          <img src={Line} alt="line" />
        </div> */}
          <ul>
            <li>Web</li>
            <li>Design</li>
          </ul>
        </div>
        {/* <div className="line2">
          <img src={Line2} alt="line" />
        </div> */}
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
                <h1>Space Chat</h1>
              </div>
              <img src={Twitch} alt="twitch" className="thumbnail" />
            </div>
          </div>
        </div>
      </div>

      <div className="line-end">
        {/* <img src={Line3} alt="line" /> */}
      </div>
    </div>
  );
}

export default Projects;
