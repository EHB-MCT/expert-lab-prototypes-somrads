import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  margin: 10% 0%;
  z-index: 99;
  cursor: pointer;
  background-color: #bd3656;
  width: 30px;
  height: 30px;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeLinecap="square"
    strokeWidth="2"
    {...props}
  />
);

const transition = { duration: 0.33 };

function MenuToggle({ toggle, isOpen }) {
  return (
    <Button onClick={toggle}>
      <svg width="30" height="23" viewBox="-1 -6 23 24">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "#D7D6D4" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "#D7D6D4" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="#D7D6D4"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "#D7D6D4" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "#D7D6D4" },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}

export default MenuToggle;
