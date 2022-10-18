import "../style/style.scss";
import logo from "../assets/img/logo.png";
import facebook from "../assets/img/facebook-f.svg";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <div className="Footer">
      <div className="container-footer">
        <ul className="logo">
          <li>
            <img src={logo} alt="lapas logo" loading="lazy" />
          </li>
          <span className="since">
            <li>Since 2002</li>
          </span>
        </ul>
        <Router>
          <ul>
            <li className="footer-title">
              {" "}
              <HashLink to="#Home">Home</HashLink>{" "}
            </li>
            <li className="footer-item">
              {" "}
              <HashLink to="#OverOns">Over Ons</HashLink>
            </li>
            <li className="footer-item">
              {" "}
              <HashLink to="#Contact">Contact</HashLink>
            </li>
            <li className="footer-item">
              {" "}
              <HashLink to="#Reserveren">Reserveren</HashLink>
            </li>
          </ul>
        </Router>

        <ul>
          <li className="footer-title">Contacteer Ons</li>
          <li>016 20 01 01</li>
          <li className="fb">
            <img src={facebook} alt="facebook logo" loading="lazy" />
          </li>
        </ul>

        <ul>
          <li className="footer-title">Openings uren</li>
          <li>7/7 open vanaf 11 uur</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
