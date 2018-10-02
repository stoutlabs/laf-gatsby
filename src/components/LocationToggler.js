import React from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";

//import Provider from "../store/provider";
import AppConsumer from "../store/consumer";

const StyledToggler = styled.div`
  margin: -10px 0 0.4rem;
  padding: 0;
  display: block;

  button {
    background: transparent;
    border: none;
    color: #999;
    cursor: pointer;
    display: inline-block;
    font-size: 0.75rem;
    font-family: "Vollkorn", serif;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    outline: none;

    &.active {
      color: #333;
    }

    &:first-child {
      margin-right: 1rem;
    }
  }
`;

const handleLocationToggle = (contextToggleFn, locProps, slug) => {
  const curUrl = locProps.pathname;
  let urlArr = curUrl.split("/");
  urlArr[1] = slug;

  const newUrl =
    urlArr[2] === "interiors" || urlArr[2] === "palm-beach-boutique"
      ? `/${slug}/interiors`
      : urlArr.join("/");

  contextToggleFn(slug);

  navigate(newUrl);
};

export const LocationToggler = props => {
  return (
    <AppConsumer>
      {state => (
        <StyledToggler className="location-toggler">
          <button
            onClick={e => {
              e.preventDefault();
              if (props.location.pathname !== "/press") {
                handleLocationToggle(state.toggleLocation, props.location, "new-york");
                props.hideNav();
              }
            }}
            className={state.location === "new-york" ? "active" : ""}
          >
            New York
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              if (props.location.pathname !== "/press") {
                handleLocationToggle(state.toggleLocation, props.location, "palm-beach");
                props.hideNav();
              }
            }}
            className={state.location === "palm-beach" ? "active" : ""}
          >
            Palm Beach
          </button>
        </StyledToggler>
      )}
    </AppConsumer>
  );
};

export default LocationToggler;
