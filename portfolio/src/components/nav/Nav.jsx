import React from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../../assets/logo.svg";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import DeviceSizes from "./index";
import MobileNavLinks from "./MobileNavLinks";

const NavBarContainer = styled.div`
  width: 100%,
  height: 60px;
  display: flex;
  align-items: center;
  padding: .5em 2em;
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

function Nav(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile });
  return (
    <NavBarContainer>
      <LeftSection>
        <img src={Logo} alt="logo" />
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
