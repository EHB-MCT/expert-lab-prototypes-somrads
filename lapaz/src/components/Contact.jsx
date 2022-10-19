import "../style/style.scss";
import facebook from "../assets/img/facebook.png";
import { motion, Variants } from "framer-motion";

function Contact() {
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
      transition={{ staggerChildren: 0.3 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      className="Contact"
      id="Contact"
    >
      <motion.div variants={textAnimate} className="background-color">
        <div className="PageTitleCenter">Contact</div>
        <div className="content-description">
          <div className="uren">
            <p>
              {" "}
              <span className="highlight"> 7/7 open</span> vanaf 11 uur
            </p>
          </div>
          <div className="adres">
            <ul>
              <li>Tiensestraat 73</li>
              <span className="adress ">
                <li>3000 Leuven</li>
              </span>
            </ul>
          </div>
          <div className="socials">
            <ul>
              <a href="tel:016 20 01 01">
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
                  016 20 01 01
                </motion.li>
              </a>
              <li className="fb-logo">
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
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
