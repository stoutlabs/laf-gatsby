import React from "react";
import styled from "styled-components";

const StyledRightDiv = styled.div`
   color: #999;
   h2 {
      border: 3px double #eff2f2;
      border-width: 4px 0;
      color: #333;
      font-size: 1.1rem;
      letter-spacing: 2px;
      line-height: 1.2rem;
      margin: 0.6rem auto 1.5rem;
      padding: 10px 4px 4px;
      text-transform: uppercase;
      text-align: center;

      @media screen and (min-width: 769px) {
         font-size: 1.2rem;
         width: 50%;
      }
   }

   h3 {
      color: #666;
      margin: 1.6rem 0 0;
   }

   p {
      line-height: 2rem;
   }

   padding: 1rem;

   @media screen and (min-width: 960px) {
      width: 50%;
   }

   @media screen and (max-width: 960px) {
      visibility: hidden;
      display: none;
   }

   img {
      object-fit: cover;
   }
`;

export const ContactRight = ({ contactInfo }) => {
   return (
      <StyledRightDiv className="contact-right">
         <h2>{contactInfo.title}</h2>
         <p dangerouslySetInnerHTML={{ __html: contactInfo.address }} />

         <div className="contact-phone">
            <h3>PHONE</h3>
            {contactInfo.phone}
         </div>

         {contactInfo.fax && (
            <div className="contact-fax">
               <h3>FAX</h3>
               {contactInfo.fax}
            </div>
         )}

         <div className="contact-email">
            <h3>EMAIL</h3>
            <a href={"mailto:" + contactInfo.email}>{contactInfo.email}</a>
         </div>
      </StyledRightDiv>
   );
};

export default ContactRight;
