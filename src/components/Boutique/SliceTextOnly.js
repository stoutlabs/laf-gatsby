import React from "react";
import styled from "styled-components";

const StyledTextOnly = styled.div`
   margin: 0 0 3rem;
   padding: 3rem 0 0;
   border-top: 1px solid #ddd;

   h3 {
      margin-bottom: 1rem;
   }

   div.slice-inner {
      padding: 0 1rem;

      p {
         font-size: 1.15rem;
      }
   }
`;

export const SliceTextOnly = ({ textOnly }) => {
   return (
      <StyledTextOnly className="slice-textOnly" key={textOnly.heading.text}>
         <div className="slice-inner">
            <h3>{textOnly.heading.text}</h3>

            <div
               dangerouslySetInnerHTML={{ __html: textOnly.content.html }}
               className="slice_twi_content"
            />
         </div>
      </StyledTextOnly>
   );
};

export default SliceTextOnly;
