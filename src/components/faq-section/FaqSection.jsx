import React from "react";
import { motion } from "framer-motion";
import Toggle from "../toggle/toggle.component";
import { AnimateSharedLayout } from "framer-motion";

import "./faqSection.styles.scss";
import { useScroll } from "../../useScroll";
import { fade, titleAnim } from "../../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
      className="faq"
    >
      <div className="title">
        <div className="hide">
          <motion.h2
            variants={titleAnim}
            ref={element}
            animate={controls}
            initial="hidden"
          >
            Any Questions?
          </motion.h2>
        </div>
        <div className="hide">
          <motion.h2
            variants={titleAnim}
            ref={element}
            animate={controls}
            initial="hidden"
          >
            <span>FAQ</span>
          </motion.h2>
        </div>
      </div>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, adipisci.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, adipisci.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, adipisci.
            </p>
          </div>
        </Toggle>
        <Toggle title="What product do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, adipisci.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default FaqSection;
