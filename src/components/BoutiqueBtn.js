import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const StyledBoutiqueBtn = styled.div`
   right: 1rem;
   position: absolute;
   top: 1rem;
`;

export const BoutiqueBtn = () => {
   return (
      <StyledBoutiqueBtn className="boutique-btn">
         <Link to="/palm-beach/palm-beach-boutique">Palm Beach Boutique</Link>
      </StyledBoutiqueBtn>
   );
};

export default BoutiqueBtn;
