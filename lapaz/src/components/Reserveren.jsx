import "../style/style.scss";
import "../style/form.scss";
import GALLERY from "../assets/img/gallerij";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

function Reserveren() {
  const textAnimate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 5 },
    },
  };

  return (
    <motion.div
      transition={{ staggerChildren: 0.3 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      className="Reserveren"
      id="Reserveren"
    >
      <motion.div variants={textAnimate} className="form">
        <form>
          <label>
            Naam
            <motion.input
              type="text"
              name="name"
              placeholder="Jouw naam"
              input
            />
          </label>

          <label>
            Voornaam
            <input type="text" name="first-name" placeholder="Jouw voornaam" />
          </label>

          <label>
            E-mail
            <input type="email" name="email" placeholder="Jouw email adres" />
          </label>

          <label>
            Boodschap
            <textarea rows="10" placeholder="Typ hier je boodschap"></textarea>
          </label>

          <motion.button
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
            whileTap={{
              scale: 1.3,
            }}
            className="button"
          >
            Verstuur
          </motion.button>
        </form>
      </motion.div>
      <motion.div variants={textAnimate} className="reserveren-wrap">
        <div className="reserveren-container">
          <h1 className="PageTitleRight">Reserveren</h1>
          <div className="content-description">
            Wil je onze <span className="highlight">zaaltje huren</span>? Vul
            dan zeker onze formulier in voor een <br /> reservatie. Wij zullen u
            dan verder contacteren over de nodige details!
          </div>
        </div>

        <motion.div variants={textAnimate} className="gallerij">
          <div className="gallerij-container">
            <h1 className="PageTitleLeft">Gallerij</h1>
            <div className="image-grid">
              <img src={GALLERY.raam} alt="window" loading="lazy" />
              <img src={GALLERY.mensen} alt="mensen" loading="lazy" />
              <img src={GALLERY.glass} alt="glass" loading="lazy" />
              <img src={GALLERY.flessen} alt="flessen" loading="lazy" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Reserveren;
