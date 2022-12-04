import React from "react";
import "../styles/hero.scss";
import Line from "../assets/lines/line-left-short.svg";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-section">
        <div className="links-title">
          <h1 className="title">Creative</h1>
          <h1>Developer</h1>
        </div>

        <div className="rechts-title">
          <h1 className="title">Somrad</h1>
          <h1 className="title-left">Sharma</h1>
        </div>
        <div className="hero-content">
          <p>
            I make cool stuff on the web. I am currently looking for a{" "}
            <span>internship </span>
            as a designer / front end developer.
          </p>{" "}
          <div className="button">
            <button>RESUME</button>
          </div>
          <div className="line">
            <img src={Line} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
