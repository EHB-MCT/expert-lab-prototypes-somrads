import React from "react";
import "../styles/hero.scss";

function Hero() {
  return (
    <div className="Hero">
      <div className="nav">
        <h5>somrad</h5>
        <h5>navblock</h5>
      </div>
      <div className="hero-section">
        <h2>Creative Developer</h2>
        <h2>Somrad Sharma</h2>
        <p>
          I make cool stuff on the web. I am currenty looking for a internship
          as a designer/ front end developer.
        </p>
        <button>
          Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
