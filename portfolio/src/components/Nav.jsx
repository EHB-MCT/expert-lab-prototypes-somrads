import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul>
        <li>1. About Me</li>
        <li>2. Projects</li>
        <li>3. Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
