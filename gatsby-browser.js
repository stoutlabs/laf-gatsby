import React from "react";
import AppProvider from "./src/store/provider";
//import wrapPageElementWithTransition from "./src/helpers/wrapPageElement";

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
//export const wrapPageElement = wrapPageElementWithTransition;
