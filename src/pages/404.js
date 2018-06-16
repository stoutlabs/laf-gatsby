import React from "react";
import styled from "styled-components";

const StyledNotFound = styled.div`
   padding: 1rem;
`;

const NotFoundPage = () => (
   <StyledNotFound>
      <h1>NOT FOUND - 404</h1>
      <p>Oops! You just hit a route that doesn&#39;t exist.</p>
   </StyledNotFound>
);

export default NotFoundPage;
