import "../style/style.scss";
import terras from "../assets/img/terras.jpg";
import { motion, Variants } from "framer-motion";

function Terras() {
  const textAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
      opacity: 1,
      y: 15,
      transition: { type: "spring", bounce: 0.4, duration: 3 },
    },
  };
  const imageAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 5 },
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="Terras"
      transition={{ staggerChildren: 0.3 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="terras-container">
        <motion.img variants={imageAnimate} className="image" src={terras} alt="terras" loading="lazy" />
        <motion.div variants={textAnimate} className="container-card">
          <h1 className="PageTitleLeft">Terras</h1>
          <motion.div className="content-description">
            <p>
              Bij café LaPaz is onze terras zeker de uitblinker. Te vinden aan
              het begin van de <br />{" "}
              <span className="highlight">Herbert Hooverplein</span>, gelegen
              naast de prachtige historische fontein. Kom zeker <br /> is langs
              om te genieten van de zon met onze knabbeltjes of van je lunch
              waarbij <br />
              onze drankjes je verder kan helpen.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Terras;
