import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../../animation";
import "./contactUs.styles.scss";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="contact-us"
    >
      <div className="title">
        <div className="hide">
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </div>
      </div>
      <div>
        <div className="hide">
          <motion.div className="social" variants={titleAnim}>
            <div className="circle"></div>
            <h2>Send us a message</h2>
          </motion.div>
        </div>
        <div className="hide">
          <motion.div className="social" variants={titleAnim}>
            <div className="circle"></div>
            <h2>Send an email</h2>
          </motion.div>
        </div>
        <div className="hide">
          <motion.div className="social" variants={titleAnim}>
            <div className="circle"></div>
            <h2>Social media</h2>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
