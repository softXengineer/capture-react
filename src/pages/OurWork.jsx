import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ourWork.styles.scss";
import goodTimes from "../img/goodtimes-small.jpg";
import athlete from "../img/athlete-small.jpg";
import theRacer from "../img/theracer-small.jpg";
import { MovieState } from "../movieState";

const OurWork = () => {
  const [movies, setMovies] = useState(MovieState);
  console.log(movies);
  return (
    <div className="work">
      {movies.map(({ title, mainImg, url }) => (
        <Movie url={url} mainImg={mainImg} title={title} key={title} />
      ))}
    </div>
  );
};

const Movie = ({ title, mainImg, url }) => (
  <div className="movie">
    <h2>{title}</h2>
    <div className="line"></div>
    <Link to={url}>
      <img src={mainImg} alt={title} className="movie-img" />
    </Link>
  </div>
);

export default OurWork;
