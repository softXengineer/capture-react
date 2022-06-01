import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./App.css";
import Nav from "./components/nav/nav.component";
import AboutUs from "./pages/about/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import MovieDetail from "./pages/work-details/MovieDetail";
import OurWork from "./pages/work/OurWork";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<AboutUs />} />
          <Route exact path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
