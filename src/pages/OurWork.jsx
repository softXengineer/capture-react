import React from "react";
import { Link } from "react-router-dom";

import "./ourWork.styles.scss";
import goodTimes from "../img/goodtimes-small.jpg";
import athlete from "../img/athlete-small.jpg";
import theRacer from "../img/theracer-small.jpg";

const OurWork = () => {
  return (
    <div className="work">
      <div className="movie">
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/">
          <img src={athlete} alt="The Athlete" className="movie-img" />
        </Link>
      </div>
      <div className="movie">
        <h2>The racer</h2>
        <div className="line"></div>
        <Link to="/">
          <img src={theRacer} alt="The Racer" className="movie-img" />
        </Link>
      </div>
      <div className="movie">
        <h2>Good times</h2>
        <div className="line"></div>
        <Link to="/">
          <img src={goodTimes} alt="Good times" className="movie-img" />
        </Link>
      </div>
    </div>
  );
};

export default OurWork;
