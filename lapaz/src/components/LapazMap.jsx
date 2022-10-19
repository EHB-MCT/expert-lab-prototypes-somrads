import { motion, Variants } from "framer-motion";
function LapazMap() {
  const textAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
      opacity: 1,
      y: 15,
      transition: { type: "spring", bounce: 0.4, duration: 3 },
    },
  };
  return (
    <motion.div
      transition={{ staggerChildren: 0.5 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      className="LapazMap"
    >
      <motion.div variants={textAnimate} className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.522262572005!2d4.703241115910765!3d50.87704356441529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c160d634d1de8b%3A0x170e26d6a9f5742!2sLAPAZ%20caf%C3%A9!5e0!3m2!1snl!2sbe!4v1665844095701!5m2!1snl!2sbe"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </motion.div>
  );
}

export default LapazMap;
