import React from "react";
import { motion } from "framer-motion";

import home1 from "../../img/home1.png";
import "./aboutSection.styles.scss";
import { titleAnim, fade, photoAnim } from "../../animation";
import Wave from "../wave/wave.component";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="description">
        <div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </div>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skils.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>
      <div className="image">
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </div>
      <Wave />
    </div>
  );
};

export default AboutSection;
