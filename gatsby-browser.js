import React from "react";
import AppProvider from "./src/store/provider";

// React Context in Browser
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
