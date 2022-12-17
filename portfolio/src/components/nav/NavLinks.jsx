import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
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
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
  padding: 0 1.1em;
`;

function NavLinks() {
  return (
    <Router>
      <NavLinksContainer>
        <LinksWrapper>
          <LinkItem>
            <Link>
              <HashLink to="#about">1. about me</HashLink>
            </Link>
            <Link href="#">
              <HashLink to="#projects">2. projects</HashLink>
            </Link>
            <Link href="#">
              <HashLink to="#contact">3. contact</HashLink>
            </Link>
          </LinkItem>
        </LinksWrapper>
      </NavLinksContainer>
    </Router>
  );
}

export default NavLinks;
