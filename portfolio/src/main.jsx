import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/nav/Nav";
import Footer from "./components/Footer";
import Test from "./components/Test"

import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Nav />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </>
);
