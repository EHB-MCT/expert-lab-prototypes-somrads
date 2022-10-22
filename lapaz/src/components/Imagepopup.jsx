import "../style/style.scss";
import React from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { data } from "./Data";

function Imagepopup({ poper, layoutId }) {
  const singleImage = data.find((item) => item.id === layoutId);
  return (
      <div className="popupContainer">
        <div className="close-btn">
          <p onClick={poper}>X</p>
        </div>
        <div className="popUpImage">
          {" "}
          <motion.img
            src={`.././gallerij/${singleImage.image}`}
            alt={singleImage.name}
            layoutId={singleImage.id}
          />
        </div>

      <div className="popUpTabs">
        {/* <div className="pop-tab">
          {" "}
          {data.map((item) => {
            return (
              <motion.div className="tab" onClick={() => poper(item.id)}>
                <motion.img
                  src={`.././gallerij/${item.image}`}
                  alt={item.name}
                  layoutId={item.id}
                />
              </motion.div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default Imagepopup;
