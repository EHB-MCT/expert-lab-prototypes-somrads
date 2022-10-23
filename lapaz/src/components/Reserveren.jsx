import "../style/style.scss";
import "../style/form.scss";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { data } from "./Data";
import React, { useState, useRef } from "react";
import Imagepopup from "./Imagepopup";
import emailjs from "@emailjs/browser";

function Reserveren() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qk2cqqb",
        "template_znk3mqq",
        form.current,
        "22JCmVh61Hv51r8Bl"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [popup, setPopup] = useState(false);
  const [layoutId, setlayoutId] = useState(null);

  const poper = (id) => {
    if (popup === false) {
      setlayoutId(id);
      setPopup(!popup);
    } else {
      setPopup(!popup);
      setlayoutId(null);
    }
  };
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
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Naam
            <input type="text" name="user_name" placeholder="Jouw naam" input />
          </label>

          <label>
            Voornaam
            <input
              name="user_firstName"
              type="text"
              placeholder="Jouw voornaam"
            />
          </label>

          <label>
            E-mail
            <input
              type="email"
              name="user_email"
              placeholder="Jouw email adres"
            />
          </label>

          <label>
            Boodschap
            <textarea
              name="message"
              rows="10"
              placeholder="Typ hier je boodschap"
            ></textarea>
          </label>

          <motion.input
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
            whileTap={{
              scale: 1.3,
            }}
            className="button"
            type="submit"
            value="Verstuur"
          />
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
        <AnimateSharedLayout>
          <motion.div variants={textAnimate} className="gallerij">
            <div className="gallerij-container">
              <h1 className="PageTitleLeft">Galerij</h1>
              <div className="image-grid">
                {" "}
                {data.map((item) => {
                  return (
                    <motion.div
                      className="image-card"
                      onClick={() => poper(item.id)}
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 1,
                        }}
                        whileTap={{
                          scale: 1.1,
                        }}
                        src={`.././gallerij/${item.image}`}
                        alt={item.name}
                        layoutId={item.id}
                      />
                    </motion.div>
                  );
                })}
              </div>
              <AnimatePresence>
                <motion.div className="image-popup">
                  {popup && <Imagepopup poper={poper} layoutId={layoutId} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimateSharedLayout>
      </motion.div>
    </motion.div>
  );
}

export default Reserveren;
