import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ourWork.styles.scss";
import { MovieState } from "../../movieState";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer
} from "../../animation";
import ScrollToTop from "../../scrollToTop";

const OurWork = () => {
  const [movies, setMovies] = useState(MovieState);

  return (
    <motion.div
      className="work"
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <motion.div variants={slider} className="frame"></motion.div>
        <motion.div variants={slider} className="frame frame-1"></motion.div>
        <motion.div variants={slider} className="frame frame-2"></motion.div>
        <motion.div variants={slider} className="frame frame-3"></motion.div>
      </motion.div>
      {movies.map(({ title, mainImg, url }, i) => (
        <Movie url={url} mainImg={mainImg} title={title} key={title} />
      ))}
      <ScrollToTop />
    </motion.div>
  );
};

const Movie = ({ title, mainImg, url }) => (
  <div className="movie">
    <motion.h2 variants={fade}>{title}</motion.h2>
    <motion.div variants={lineAnim} className="line"></motion.div>
    <Link to={url}>
      <div className="img-container">
        <motion.img
          variants={photoAnim}
          src={mainImg}
          alt={title}
          className="movie-img"
        />
      </div>
    </Link>
  </div>
);

export default OurWork;
