import "../style/style.scss";
import logo from "../assets/img/logo.png";
import facebook from "../assets/img/facebook-f.svg";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, Variants } from "framer-motion";

function Footer() {
  const hover = {
    whileHover: {
      scale: 1.02,
      y: -5,
      transition: "ease",
      duration: 2,
    },
    whileTap: {
      scale: 1.2,
    },
  };
  return (
    <div className="Footer">
      <div className="container-footer">
        <Router>
          <ul className="logo">
            <li>
              <HashLink to="#Home">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={logo}
                  alt="lapas logo"
                  loading="lazy"
                />
              </HashLink>
            </li>
            <span className="since">
              <li>Since 2002</li>
            </span>
          </ul>
          <ul>
            <motion.li
              whileHover={"whileHover"}
              whileTap={"whileTap"}
              variants={hover}
              className="footer-title"
            >
              {" "}
              <HashLink to="#Home">Home</HashLink>{" "}
            </motion.li>
            <motion.li
              whileHover={"whileHover"}
              whileTap={"whileTap"}
              variants={hover}
              className="footer-item"
            >
              {" "}
              <HashLink to="#OverOns">Over Ons</HashLink>
            </motion.li>
            <motion.li
              whileHover={"whileHover"}
              whileTap={"whileTap"}
              variants={hover}
              className="footer-item"
            >
              {" "}
              <HashLink to="#Contact">Contact</HashLink>
            </motion.li>
            <motion.li
              whileHover={"whileHover"}
              whileTap={"whileTap"}
              variants={hover}
              className="footer-item"
            >
              {" "}
              <HashLink to="#Reserveren">Reserveren</HashLink>
            </motion.li>
          </ul>
        </Router>

        <ul>
          <li className="footer-title">Contacteer Ons</li>
          <a href="tel:016 20 01 01">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              016 20 01 01
            </motion.li>
          </a>
          <li className="fb">
            <a
              href="https://www.facebook.com/Lapazleuven"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                src={facebook}
                alt="facebook-logo"
                loading="lazy"
              />
            </a>
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
