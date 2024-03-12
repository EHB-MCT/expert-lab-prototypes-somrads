import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/nav/Nav";
import Footer from "./components/Footer";
import Cursor from "./components/customCursor/Cursor";

import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>

      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      

  </>
);
