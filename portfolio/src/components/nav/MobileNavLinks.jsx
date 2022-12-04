import React, { useState } from "react";
import styled from "styled-components";
import MenuToggle from "./menuToggle";
import ResumeButton from "./Resume";
import Line from "../../assets/lines/line-nav.svg";

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
  background-color: #d7d6d4;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
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

const LineImage = styled.img``;

const LineContainer = styled.div`
  margin: -5% 0% 5% 9%;
`;

function MobileNavLinks() {
  const [isOpen, setOpen] = useState(false);
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="#">1. about me</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">2. projects</Link>
          </LinkItem>
          <LinkItem>
            <Link href="#">3. contact</Link>
          </LinkItem>
          <LineContainer>
            <img src={Line} alt="stroke-line" />
          </LineContainer>
          <ResumeButton></ResumeButton>
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}

export default MobileNavLinks;
