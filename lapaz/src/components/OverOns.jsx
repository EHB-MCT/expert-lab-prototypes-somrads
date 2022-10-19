import "../style/style.scss";
import { motion, Variants} from "framer-motion";

function OverOns() {
  const titleAnimate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: { y: 0, opacity: 1, type: "spring", bounce: 0.6, duration: 1 },
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
    <motion.div className="OverOns" id="OverOns">
      <motion.div
        transition={{ staggerChildren: 0.5 }}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        className="container"
      >
        <motion.h1 variants={titleAnimate} className="PageTitleCenter">
          Over Ons
        </motion.h1>
        <div className="content-description">
          <motion.p variants={textAnimate}>
            <span className="highlight"> Café LaPaz </span> is sinds
            <span className="highlight"> 2002 </span> de thuis van vele
            studenten en Leuvenaars. <br />
            Gelegen in het hartje van Leuven waar je kan genieten op ons terras
            met een brede <br /> selectie van bieren, drankjes, cocktails en
            knabbeltjes. Bekijk zeker onze menu voor <br /> meer informatie.
          </motion.p>
        </div>
        <motion.div variants={textAnimate} className="button-container">
          <motion.button
            whileHover={{ scale: 1.2 }}
            transition = {{type: "spring", bounce: .4, duration: 1}}
            whileTap={{
              scale: 1.3,
            }}
            className="button"
          >
            {" "}
            Menu{" "}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default OverOns;
