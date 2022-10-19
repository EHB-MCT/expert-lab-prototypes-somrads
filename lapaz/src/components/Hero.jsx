import "../style/hero.scss";
import "../style/style.scss";
import logo from "../assets/img/logo.png";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, Variants } from "framer-motion";

function Hero() {
  return (
    <div className="Hero" id="Home">
      <Router>
        <div className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <HashLink to="#Home">
                {" "}
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={logo}
                  alt="lapaz-logo"
                  width="120"
                  height="40"
                />
              </HashLink>
            </li>

            <motion.li
              className="nav-item"
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: "ease",
                duration: 2,
              }}
              whileTap={{
                scale: 1.2,
              }}
            >
              <HashLink to="#Home">Home</HashLink>
            </motion.li>

            <motion.li
              className="nav-item"
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: "ease",
                duration: 2,
              }}
              whileTap={{
                scale: 1.2,
              }}
            >
              <HashLink to="#OverOns">Over Ons</HashLink>
            </motion.li>

            <motion.li
              className="nav-item"
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: "ease",
                duration: 2,
              }}
              whileTap={{
                scale: 1.2,
              }}
            >
              <HashLink to="#Contact">Contact</HashLink>
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: "ease",
                duration: 2,
              }}
              whileTap={{
                scale: 1.2,
              }}
              className="nav-item"
            >
              <HashLink to="#Reserveren">Reserveren</HashLink>
            </motion.li>
          </ul>
        </div>
      </Router>

      <div className="banner-area">
        <div className="content-area">
          <motion.div
            className="content"
            initial={{ y: -200, opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              default: { duration: 2, ease: [0, 0.71, 0.2, 1.01] },
            }}
          >
            <img src={logo} alt="lapaz-logo" />
            <p>Since 2002</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
