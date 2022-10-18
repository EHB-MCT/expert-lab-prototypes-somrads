import "../style/style.scss";
import bier from "../assets/img/bier.jpg";
import { motion, Variants } from "framer-motion";

function Bieren() {
  const imageAnimate = {
    offscreen: { x: -100, opacity:0 },
    onscreen: { x: 0, transition: { ease: "easeOut", duration: 2 }, opacity:1 },
  };

  const textAnimate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 3 },
    },
  };
  return (
    <motion.div
      transition={{ staggerChildren: 0.2 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:true, amount:0.5}}
      className="Bieren"
    >
      <motion.div variants={imageAnimate}>
        <img
          className="image"
          src={bier}
          alt="bieren van het vat"
          loading="lazy"
        />
      </motion.div>
      <div className="background-color">
        <div className="container-card">
          <motion.h1 variants={textAnimate} className="PageTitleRight">
            Bieren Van't Vat
          </motion.h1>
          <div className="contact-container">
            <div className="content-description">
              <motion.p variants={textAnimate}>
                Een van de kenmerken van café LaPaz zijn de bieren van’t vat
                zijn.
                <br />
                We hebben{" "}
                <span className="highlight">
                  {" "}
                  Stelle Artois, Witte Hoegaarden, Leffe Blond, Karmeliet <br />{" "}
                  en La Chouffe
                </span>
                . We zijn een van de weinige cafe’s die zo een brede <br />
                selectie bieren hebben die van’t vat zijn. Met deze selectie zal
                je
                <br />
                zeker en vast eentje vinden die bij jouw smaak zal passen!
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Bieren;
