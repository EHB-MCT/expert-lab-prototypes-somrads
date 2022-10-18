import "../style/hero.scss";
import "../style/style.scss";
import logo from "../assets/img/logo.png";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Hero() {
  return (
    <div className="Hero" id="Home">
      <Router>
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <HashLink to="#Home">
                {" "}
                <img src={logo} alt="lapaz-logo" width="120" height="40" />
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="#Home">Home</HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="#OverOns">Over Ons</HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="#Contact">Contact</HashLink>
            </li>

            <li className="nav-item">
              <HashLink to="#Reserveren">Reserveren</HashLink>
            </li>
          </ul>
        </div>
      </Router>

      <div className="banner-area">
        <div className="content-area">
          <div className="content">
            <img src={logo} alt="lapaz-logo" />
            <p>Since 2002</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
