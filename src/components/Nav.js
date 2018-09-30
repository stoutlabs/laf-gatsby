import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import LocationToggler from "./LocationToggler";
import AppConsumer from "../store/consumer";

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 300ms ease-out 0ms, visibility 0ms linear 0ms;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    height: auto;
    margin-bottom: 0.3rem;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    background-color: #dee4e5;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    transform: translateX(-200px);
    transition: transform 150ms ease-out;
    width: 200px;
    z-index: 100;
    padding-top: 2.8rem;

    &.show {
      transform: translateX(0px);
    }
  }

  li {
    margin: 0 1rem 1rem 0;
    padding: 0 10px;

    @media screen and (min-width: 768px) {
      border-right: 1px solid #ccc;
      margin: 0 0.3rem 0 0;

      &:last-child {
        border-right: none;
      }
    }

    a {
      font-size: 0.8rem;
      font-family: "Vollkorn", serif;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 3px;
      height: 50px;
      color: #999;

      &.active {
        color: #333;
      }
    }
  }
`;

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null;
};

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "active" } : null;
};

export const Nav = props => {
  return (
    <AppConsumer>
      {state => (
        <StyledNav>
          <LocationToggler
            theLocation={state.theLocation}
            hideNav={props.hideNav}
            location={props.location}
          />

          <StyledUl className={props.status}>
            <li>
              <Link to="/" onClick={props.hideNav}>
                Home
              </Link>
            </li>

            <li>
              <Link
                exact="true"
                to={`/${state.location}/interiors`}
                onClick={props.hideNav}
                getProps={isPartiallyActive}
              >
                Interiors
              </Link>
            </li>

            <li>
              <Link
                exact="true"
                to={`/${state.location}/about`}
                onClick={props.hideNav}
                getProps={isActive}
              >
                About
              </Link>
            </li>

            <li>
              <Link exact="true" to={`/press`} onClick={props.hideNav} getProps={isActive}>
                Press
              </Link>
            </li>

            <li>
              <Link
                exact="true"
                to={`/${state.location}/contact`}
                onClick={props.hideNav}
                getProps={isActive}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                exact="true"
                to={`/palm-beach/palm-beach-boutique`}
                onClick={() => {
                  props.hideNav();
                  state.toggleLocation("palm-beach");
                }}
                getProps={isActive}
              >
                Boutique
              </Link>
            </li>
          </StyledUl>
        </StyledNav>
      )}
    </AppConsumer>
  );
};

export default Nav;
