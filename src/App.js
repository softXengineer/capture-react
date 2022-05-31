import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav/nav.component";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<AboutUs />} />
        <Route exact path="/work" element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
