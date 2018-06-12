import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
   text-align: center;
   color: #999;
   font-size: 0.8rem;
   letter-spacing: 2px;

   @media screen and (max-width: 600px) {
      font-size: 0.75rem;
   }
`;

export const Footer = () => {
   return (
      <StyledFooter>
         <p>
            &copy; <span id="curyear">{new Date().getFullYear()}</span> LETA AUSTIN FOSTER &
            ASSOCIATES, INC
         </p>
      </StyledFooter>
   );
};

export default Footer;
