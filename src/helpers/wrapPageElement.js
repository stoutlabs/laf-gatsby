import React from "react";
import Transition from "../components/Transition";

export default ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>;
};
