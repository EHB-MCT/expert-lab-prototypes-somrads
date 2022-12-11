import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./test.scss";

gsap.registerPlugin(ScrollTrigger);

function Test() {
  useEffect(() => {
    let elements = gsap.utils.toArray(".my-element");

    gsap.to(elements, {
      xPercent: -100 * (elements.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (elements.length - 1),
        end: "+=3500",
      },
    });
  }, []);




  return (
    <div className="container">
      <div style={{ width: '40%', height: '100%' }} className="my-element">
        <h1>Title</h1>
        <p>bla bla </p>

      </div>
      <div style={{ width: '40%', height: '100%' }} className="my-element">
        <h1>Project</h1>
        <p>bla bla </p>
      </div>
    </div>
  );
}

export default Test;
