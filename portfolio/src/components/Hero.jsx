import React from "react";
import "../styles/hero.scss";
import Logo from "../assets/logo.svg";
import Icon from "../assets/menu-mobile.svg";

function Hero() {
  return (
    <div className="Hero">
      <header class="header">
        {/* <!-- Logo --> */}
        <a href="/">
          <img src={Logo} alt="logo" class="logo" />
        </a>
        {/* <!-- Hamburger icon --> */}
        <input class="side-menu" type="checkbox" id="side-menu" />
        <label class="hamb" for="side-menu">
          <span class="hamb-line"></span>
        </label>
        {/* <!-- Menu --> */}
        <nav class="nav">
          <ul class="menu">
            <li>
              <a href="#">1.About</a>
            </li>
            <li>
              <a href="#">2.Projects</a>{" "}
            </li>
            <li>
              <a href="#">3.Contact</a>
            </li>
          </ul>
          <button>Resume</button>
        </nav>
      </header>

      {/* <div className="hero-section">
        <h1>Creative Developer</h1>
        <h1>Somrad Sharma</h1>
        <p>
          I make cool stuff on the web. I am currenty looking for a internship
          as a designer/ front end developer.
        </p>
        <button>Resume</button>
      </div> */}
    </div>
  );
}

export default Hero;
