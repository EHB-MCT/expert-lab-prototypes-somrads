import React, { useEffect, useState, useRef,useLayoutEffect } from "react";
import gsap from "gsap";
import { useMediaQuery } from "./hooks/useMediaQuery";
import Arrow from "../assets/lines/arrow.svg";
import CloseArrow from "../assets/arrow-up.svg";
import LineMobile from "../assets/lines/line-projects.svg";
import LineDesktop from "../assets/lines/desktop/line-projects.svg";
import LineMobile3 from "../assets/lines/line-projects-bottom.svg";
import LineDesktop3 from "../assets/lines/desktop/line-projects-bottom.svg";
import Magazine from "../file/Flashback-Magazine-Somrad.pdf";
import ChimaLogo from "../assets/chima/logo.jpg";
import ChimaMockup from "../assets/chima/mockup.jpg";
import ChimaScreenshot from "../assets/chima/screenshot.jpg";
import AmaiLogo from "../assets/amai/logo.png";
import AmaiMockup from "../assets/amai/mockup.png";
import AmaiMockup2 from "../assets/amai/mockup2.png";
import poster from "../assets/love-/poster.jpg"
import lsMockup from "../assets/love-/lovesparks-mockup.jpg"
import neutral from "../assets/love-/neutral.jpg"
import menu from "../assets/manzoku/menu.jpg"
import logo from "../assets/manzoku/logo.jpg"
import card from "../assets/manzoku/card.jpg"
import "../styles/projects.scss";

function Projects() {
  const width = useMediaQuery();
  const [currentSection, setCurrentSection] = useState("web");
  const [clickedProject, setClickedProject] = useState(null);
  const infoRef = useRef(null);

  const handleClick = (projectName) => {
    console.log("Clicked project:", projectName);
    if (projectName === clickedProject) {
      // If the same project is clicked again, close it
      animateProject(false);
      setClickedProject(null);
    } else {
      // Otherwise, open the clicked project
      setClickedProject(projectName);
      animateProject(true);
    }
  };

  const animateProject = (show) => {
    console.log("Animating project:", show);
    const target = infoRef.current;
  
    target?.style && gsap.to(target, {
      duration: 1,
      height: show ? "auto" : 0,
      opacity: show ? 1 : 0,
      ease: "power2.inOut",
    });
  };

  useLayoutEffect(() => {
    gsap.fromTo(
      ".Projects",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        duration: 1,
        ease: "ease-in-out",
        opacity: 1,
        delay: 1,
        scrollTrigger: {
          trigger: ".Projects",
        },
      }
    );
  }, []);

  let Line;
  if (width <= 600) {
    // Show the mobile image for widths <= 600
    Line = LineMobile;
  } else {
    // Show the desktop image for widths > 600
    Line = LineDesktop;
  }
  let Line3;
  if (width <= 600) {
    // Show the mobile image for widths <= 600
    Line3 = LineMobile3;
  } else {
    // Show the desktop image for widths > 600
    Line3 = LineDesktop3;
  }

  return (
    <div className="Projects" id="projects">
      <div className="project-titles">
        <h1>2. Projects</h1>

      <div className="line-end">
        <img src={Line3} alt="line" />
      </div>

      <div className="project-wrapper">
          <div className="project-item" onClick={() => handleClick("fewa fish")}>
            <p>fewa fish</p>
            <p id="project-tag">react.js</p>
            <p>website</p>
          </div>

          {clickedProject === "fewa fish" && (
            <div className="item-info" ref={infoRef}  onClick={() => handleClick("fewa fish")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
                I've created a sleek, mobile-responsive website for a fish store
                in Leuven. It's designed to captivate visitors, showcasing the
                store's diverse offerings. The site promises a seamless and
                engaging online experience, elevating the client's digital
                presence.
              </p>
              <div className="learn-more">
                      <a href="https://fewafish.be" target="_blank">
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div> 
            </div>
          )}


          <div className="project-item"  onClick={() => handleClick("spacechat")}>
            <p>spacechat</p>
            <p id="project-tag">react.js, node.js, websockets</p>
            <p>website</p>
          </div>

          {clickedProject === "spacechat" && (
            <div className="item-info" ref={infoRef}  onClick={() => handleClick("spacechat")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
              Experience my live chat app, specially designed for space enthusiasts who value anonymity. Engage in cosmic conversations with fellow space lovers, fostering a sense of animosity-free connection.
              </p>
              <div className="learn-more">
                      <a href="https://spacechat.vercel.app/" target="_blank">
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
            </div>
          )}

          <div className="project-item" onClick={() => handleClick("flashback")}>
            <p>flashback</p>
            <p id="project-tag">react native</p>
            <p>app</p>
          </div>

          {clickedProject === "flashback" && (
            <div className="item-info" ref={infoRef}  onClick={() => handleClick("flashback")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
              I've developed an iOS application as a culmination of my thesis research—a social media platform tailored for families to enhance their connections authentically. Due to its iOS nature, deployment isn't feasible, but I'm excited to showcase the app's functionality through a compelling screen recording.
              </p>
              <div className="learn-more">
                      <a href="#" target="_blank">
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
            </div>
          )}

          <div className="project-item" onClick={() => handleClick("anonymously connect")}>
            <p>anonymously connect</p>
            <p id="project-tag">react.js, node.js, docker, postgresql</p>
            <p>website</p>
          </div>

          {clickedProject === "anonymously connect" && (
            <div className="item-info" ref={infoRef}  onClick={() => handleClick("anonymously connect")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
              A school project that empowers users to express their thoughts without the need to disclose their true identity. Immerse yourself in a community where your insights are cherished, unburdened by the confines of personal identity. This project is not only fully dockerized for seamless deployment but also seamlessly integrates with GitHub workflow actions, ensuring a streamlined and efficient development process.
              </p>
              <div className="learn-more">
                      <a href="https://github.com/EHB-MCT/portfolio-second-chance-somrads" target="_blank">
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
            </div>
          )}

          <div className="project-item" onClick={() => handleClick("magazine flashback")}>
            <p>magazine flashback</p>
            <p id="project-tag">indesign, figma, illustrator, photoshop</p>
            <p>magazine</p>
            </div>

            {clickedProject === "magazine flashback" && (
            <div className="item-info" ref={infoRef}  onClick={() => handleClick("magazine flashback")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
              Transforming my research thesis into an engaging magazine has been a fulfilling part of my assignment. Beyond delivering valuable insights, this magazine adds a touch of enjoyment for the readers. Seamlessly blending informative content with an entertaining twist, it not only educates but also ensures a pleasurable reading experience.
              </p>
              <div className="learn-more">
                      <a href={Magazine }download={"Flashback-Magazine-Somrad.pdf"}>
                        <button>
                          View Project
                          <img src={Arrow} alt="arrow" />
                        </button>
                      </a>
                    </div>
            </div>
          )}

            <div className="project-item" onClick={() => handleClick("films by chima")}>
            <p>films by chima</p>
            <p id="project-tag">illustrator, photoshop, figma</p>
            <p>logo</p>
          </div>

          {clickedProject === "films by chima" && (
            <div className="item-info" ref={infoRef}  onClick={() => handleClick("films by chima")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
              A distinctive logo i made for 'Films by Chima,' a wedding photography service. The logo elegantly intertwines the initials 'F' and 'C,' encapsulating the essence of the brand. It serves as a timeless and visually appealing representation.
              </p>

              <div className="designImages">
                <div id="first-two-images">
                  <img id="chima-logo" src={ChimaLogo} alt="chima-logo" />
                  <img id="chima-mockup" src={ChimaMockup} alt="chima-mockup" />
                </div>

                <img id="chima-screenshot" src={ChimaScreenshot} alt="chima-screenshot" />
              </div>


            </div>
          )}

          <div className="project-item"  onClick={() => handleClick("amai coffee shop")}>
            <p>amai coffee shop</p>
            <p id="project-tag">illustrator, photoshop</p>
            <p>logo</p>
          </div>

          {clickedProject === "amai coffee shop" && (
            <div className="item-info" ref={infoRef}  onClick={() => handleClick("amai coffee shop")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
              Presenting a conceptual logo inspired by the unique charm of Japanese coffee shops. Drawing inspiration from their distinct style characterized by sketchy, mascot-centric designs, I sought to capture the intrigue that defines these establishments.
              </p>

              <div className="designImages">
                <div id="first-three-images">
                  <img id="amai-logo" src={AmaiLogo} alt="amai-logo" />
                  <img id="amai-mockup" src={AmaiMockup} alt="amai-mockup" />
                <img id="amai-mockup2" src={AmaiMockup2} alt="amai-mockup2" />
                </div>

              </div>

            </div>
          )}

          <div className="project-item" onClick={() => handleClick("love sparks")}>
            <p>love sparks</p>
            <p id="project-tag">illustrator, photoshop</p>
            <p>poster</p>
          </div>

          {clickedProject === "love sparks" && (
            <div className="item-info" onClick={() => handleClick("love sparks")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
              A poster I designed, inspired by the fascinating scientific phenomenon known as 'Love Sparks.' This visual  blends a hand-sketched concept with the precision of illustrator and photoshop to articulate and explain the enchanting phenomenon. The poster serves as a captivating exploration, merging artistic expression with scientific intrigue.
              </p>

              <div className="designImages">
                <div id="first-three-images">
                  <img id="poster" src={poster} alt="poster" />
                  <img id="ls-mockup" src={lsMockup} alt="ls-mockup" />
                <img id="neutral" src={neutral} alt="neutral" />
                </div>

              </div>
    
            </div>
          )}


          <div className="project-item" onClick={() => handleClick("manzoku sushi")}>
            <p>manzoku sushi
            </p>
            <p id="project-tag">illustrator, photoshop, indesign</p>
            <p>branding</p>
          </div>

          {clickedProject === "manzoku sushi" &&  (
            <div className="item-info" ref={infoRef}  onClick={() => handleClick("manzoku sushi")}>
              <div className="close-arrow">
                <img src={CloseArrow} alt="close-arrow" />
              </div>

              <p>
              I had the pleasure of designing a comprehensive set of assets for a sushi bar nestled in Bierbeek. From crafting an enticing menu to designing a memorable business card, I've also created various visual elements including logos, signs and more.              </p>
              <div className="designImages">
                <div id="first-three-images">
                  <img id="menu" src={menu} alt="poster" />
                <img id="card" src={card} alt="neutral" />
                  <img id="logo" src={logo} alt="ls-mockup" />
                </div>

              </div>
            
            
            </div>

          )}
          
          </div>

      </div>
    </div>
  );
}

export default Projects;
