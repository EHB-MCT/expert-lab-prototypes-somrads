import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MenuToggle from "./MenuToggle.jsx";
import ResumeButton from "./Resume";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Line from "../../assets/lines/line-left.svg"
import gsap from "gsap";
import "./links.scss"

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
  list-style: none;
  background-color: #d7d6d4;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 58px;
  left: 0;
  z-index: 1;
`;

const LinkItem = styled.li`
  width: 100%;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 1em 1.3em;
  color: #222;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const LineContainer = styled.div`
  margin: -5% 0% 5% 9%;
`;

function MobileNavLinks() {
  let navContainer = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const timeline_home = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "easeInOut",
    },
  });

  useEffect(() => {
    timeline_home.from([navContainer], {
      duration: 1,
      y: -400,
      opacity: 1,
      stagger: {
        amount: 0.2,
      },
    });
  });

  return (
    <Router>
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper ref={(el) => (navContainer = el)}>
          <LinkItem>
          <Link>
              <HashLink to="#about">1. about me</HashLink>
            </Link>
          </LinkItem>
          <LinkItem>
          <Link>
              <HashLink to="#projects">2. projects</HashLink>
            </Link>
          </LinkItem>
          <LinkItem>
          <Link>
              <HashLink to="#contact">3. contact </HashLink>
            </Link>
          </LinkItem>
          <LineContainer>
            <img src={Line} alt="stroke-line" />
          </LineContainer>
          <ResumeButton></ResumeButton>
        </LinksWrapper>
      )}
    </NavLinksContainer>
    </Router>
  );
}

export default MobileNavLinks;
