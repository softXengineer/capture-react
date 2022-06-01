import { createBrowserHistory } from "history";
import React, { useEffect, useState } from "react";
import { MovieState } from "../../movieState";
import { motion } from "framer-motion";

import "./movieDetail.styles.scss";
import { pageAnimation } from "../../animation";
import ScrollToTop from "../../scrollToTop";

const MovieDetail = () => {
  const history = createBrowserHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <motion.div
          className="details"
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <div className="headline">
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </div>
          <div className="awards">
            {movie.awards.map(({ title, description }) => (
              <Award title={title} description={description} key={title} />
            ))}
          </div>
          <div className="image-display">
            <img src={movie.secondaryImg} alt={movie.title} />
          </div>
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
};

const Award = ({ title, description }) => {
  return (
    <div className="award">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

export default MovieDetail;
