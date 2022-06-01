import React, { useState } from "react";
import { motion } from "framer-motion";

import "./toggle.styles.scss";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <div className="question-header">
        <motion.h4 layout>{title}</motion.h4>
        <motion.span layout>
          <div className={toggle ? "active" : ""}>+</div>
        </motion.span>
      </div>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
