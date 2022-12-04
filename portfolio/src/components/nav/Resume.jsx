import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 35px;
`;

const ResumeButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-family: "Raleway", sans-serif;
  font-size: 13px;
  font-weight: 600;
  background-color: transparent;
  border: 3px solid #000000;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #d7d6d4;
    border: 3.5px solid #000000;
    background-color: #bd3656;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

function Resume() {
  return (
    <ButtonContainer>
      <ResumeButton>RESUME</ResumeButton>
    </ButtonContainer>
  );
}

export default Resume;
