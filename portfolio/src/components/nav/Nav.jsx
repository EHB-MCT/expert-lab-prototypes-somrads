import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../../assets/logo.svg";
import styled from "styled-components";
import NavLinks from "./NavLinks.jsx";
import DeviceSizes from "./index";
import MobileNavLinks from "./MobileNavLinks.jsx";
import "../../styles/nav.scss";

const NavBarContainer = styled.div`
  width: 100%,
  height: 60px;
  display: flex;
  align-items: center;
  padding: .5em .1em;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
`;

const RightSection = styled.div`
  display: flex;
`;



function Nav() {
  const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile });
  return (
    <NavBarContainer>
      <LeftSection>

        <img src={Logo} alt="logo" id="logo"  style={{ width: "30px", height: '70px' }}/>

      </LeftSection>
      <MiddleSection></MiddleSection>
      <RightSection>
        {!isMobile && <NavLinks />}
        {isMobile && <MobileNavLinks />}
      </RightSection>
    </NavBarContainer>
  );
}

export default Nav;
