import React from "react";

function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="project-titles">
        <ul>
          <li>Web</li>
          <li>Design</li>
        </ul>
        <div className="project-sections">
          <div className="lapaz">
            <h1>Café Website</h1>
            <img src="#" alt="lapaz" />
            <p>A website that i designed and build for a café in Leuven.</p>
            <p>Learn More</p>
          </div>

          <div className="spacechat">
            <h1>Space Chat</h1>
            <img src="#" alt="spacechat" />
            <p>
              A live chat app designed for space lovers that prefers animosity.
            </p>
            <p>Learn More</p>
          </div>

          <div className="twitch-redesign">
            <h1>Twitch Redesign</h1>
            <img src="#" alt="twitch" />
            <p>
              The twitch app that i fully redesigned and remade with angular.
            </p>
            <p>Learn More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
