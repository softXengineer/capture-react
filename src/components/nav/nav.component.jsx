import React from "react";
import { motion } from "framer-motion";
import "./nav.styles.scss";

import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/" className="link">
            About Us
          </Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "90%" : "0%" }}
          ></motion.div>
        </li>
        <li>
          <Link to="/work" className="link">
            Our Work
          </Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname.startsWith('/work') ? "90%" : "0%" }}
          ></motion.div>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact Us
          </Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "90%" : "0%" }}
          ></motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
