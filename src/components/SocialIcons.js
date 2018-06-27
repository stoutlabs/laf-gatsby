import React from "react";
import styled from "styled-components";

import pinterestLogo from "../assets/pinterest.svg";
import instaLogo from "../assets/instagram.svg";
import dhLogo from "../assets/deringHall.svg";

const StyledIcons = styled.div`
   padding: 0.5rem 0;

   a {
      display: inline-block;
      margin: 0 0.75rem 0 0;
      opacity: 0.75;
      transition: opacity 150ms ease-out;

      &:hover {
         opacity: 1;
      }

      &:last-child {
         margin-right: 0;
      }

      img {
         width: 28px;
         height: 28px;
      }
   }
`;

export const SocialIcons = () => {
   return (
      <StyledIcons className="social-icons">
         <a
            href="https://www.pinterest.com/letaaustinfoster/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Our Pinterest"
         >
            <img src={pinterestLogo} alt="Pinterest" />
         </a>
         <a
            href="https://www.instagram.com/letaaustinfoster/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Our Instagram"
         >
            <img src={instaLogo} alt="Instagram" />
         </a>
         <a
            href="https://deringhall.com/interior-designers/leta-austin-foster-associates"
            target="_blank"
            rel="noopener noreferrer"
            title="Vist Our Derring Hall Listing"
         >
            <img src={dhLogo} alt="Derring Hall" />
         </a>
      </StyledIcons>
   );
};

export default SocialIcons;
