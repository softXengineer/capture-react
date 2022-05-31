import { createBrowserHistory } from "history";
import React, { useEffect, useState } from "react";
import { MovieState } from "../movieState";

import "./movieDetail.styles.scss";

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
        <div className="details">
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
        </div>
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
