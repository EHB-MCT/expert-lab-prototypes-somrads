import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav"

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Hero />
    <About />
    <Projects />
    <Contact />  */}
    <Nav/>
  </React.StrictMode>
);
