import React from "react";
import styled from "styled-components";
import { SocialIcons } from "./SocialIcons";

const StyledFooter = styled.footer`
  text-align: center;
  color: #888;
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; <span id="curyear">{new Date().getFullYear()}</span> LETA AUSTIN FOSTER & ASSOCIATES,
        INC
      </p>
      <SocialIcons />
    </StyledFooter>
  );
};

export default Footer;
