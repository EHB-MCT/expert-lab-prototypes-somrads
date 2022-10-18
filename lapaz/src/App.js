import "./App.scss";
import Hero from "../src/components/Hero";
import OverOns from "../src/components/OverOns";
import Bieren from "./components/Bieren";
import Terras from "./components/Terras";
import Contact from "../src/components/Contact";
import LapazMap from "./components/LapazMap";
import Reserveren from "./components/Reserveren";
import Footer from "./components/Footer";

import React from "react";
import {motion, Variants} from "framer-motion"

function App() {
  return (
    <div className="App">
      <Hero />
      <OverOns />
      <Bieren />
      <Terras />

      <Contact />
      <LapazMap />

      <Reserveren />
      <Footer />
    </div>
  );
}

export default App;
