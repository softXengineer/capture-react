import React from "react";
import { motion } from "framer-motion";

import "./servicesSection.styles.scss";
import clock from "../../img/clock.svg";
import money from "../../img/money.svg";
import diaphragm from "../../img/diaphragm.svg";
import teamwork from "../../img/teamwork.svg";
import home2 from "../../img/home2.png";
import { useScroll } from "../../useScroll";
import { photoAnim, scrollReveal, fade } from "../../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      className="services"
    >
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="Efficient" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="Affordable" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <motion.img
          src={home2}
          alt="camera"
          variants={photoAnim}
          ref={element}
          animate={controls}
          initial="hidden"
        />
      </div>
    </motion.div>
  );
};

export default ServicesSection;
