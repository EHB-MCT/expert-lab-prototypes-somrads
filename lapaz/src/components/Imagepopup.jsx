import "../style/style.scss";
import React from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { data } from "./Data";

function Imagepopup({ poper, layoutId }) {
  const singleImage = data.find((item) => item.id === layoutId);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="popupContainer"
      >
        <motion.div className="popupWrap">
          <motion.div className="popUpImage">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={poper}
              className="close-btn"
            >
              Close
            </motion.button>

            <motion.img
              src={`.././gallerij/${singleImage.image}`}
              alt={singleImage.name}
              layoutId={singleImage.id}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Imagepopup;
