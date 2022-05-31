import React from "react";
import "./nav.styles.scss";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/" className="link">About Us</Link>
        </li>
        <li>
          <Link to="/work" className="link">Our Work</Link>
        </li>
        <li>
          <Link to="/contact" className="link">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
