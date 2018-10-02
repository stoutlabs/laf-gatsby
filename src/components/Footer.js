import React from "react";
import styled from "styled-components";
import { SocialIcons } from "./SocialIcons";

const StyledFooter = styled.footer`
  text-align: center;
  color: #888;
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 0.25rem;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }

  .siteby {
    color: #bbb;
    font-style: italic;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.75rem;
    letter-spacing: 0;
    padding: 0 0.5rem;

    a {
      font-size: 0.75rem;
      color: #bbb;

      &:hover {
        color: #888;
      }
    }
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
      <div className="siteby">
        website:{" "}
        <a href="https://www.stoutlabs.com/" target="_blank" rel="noopener noreferrer">
          stoutlabs
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
