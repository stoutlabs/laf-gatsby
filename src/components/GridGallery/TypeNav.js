import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import AppConsumer from "../../store/consumer";

const TypeToggler = styled.div`
  margin: 2.5rem 0 2rem;
  font-style: italic;
  color: #999;
  font-size: 0.9rem;

  a {
    color: #999;
    a.active {
      font-weight: bold;
    }
  }
`;

export const TypeNav = props => {
  return (
    <AppConsumer>
      {state => (
        <TypeToggler>
          <Link to={`/${state.location}/interiors`}>View Projects</Link>
          {" / "}
          <Link to={`/${state.location}/interiors/rooms/`}>View Rooms</Link>
        </TypeToggler>
      )}
    </AppConsumer>
  );
};

export default TypeNav;
