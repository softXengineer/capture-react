import React from "react";
import "./nav.styles.scss";

const Nav = () => {
  return (
    <nav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
