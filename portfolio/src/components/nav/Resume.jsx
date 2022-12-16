import React from "react";
import styled from "styled-components";
import Document from "../../file/Somrad_Sharma_CV.pdf";

const ButtonContainer = styled.div`
  display: flex;
  margin-left: 35px;
`;

const ResumeButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: black;
  font-family: "Raleway", sans-serif;
  font-size: 12px;
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
`;

function Resume() {
  return (
    <ButtonContainer>
      <a href={Document} download="Somrad_Sharma_Cv">
        <ResumeButton>RESUME</ResumeButton>
      </a>
    </ButtonContainer>
  );
}

export default Resume;
