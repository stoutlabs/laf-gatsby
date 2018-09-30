import React, { Component } from "react";
import { Consumer } from "./createContext";

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class AppConsumer extends Component {
  render() {
    return <Consumer>{this.props.children}</Consumer>;
  }
}

export default AppConsumer;
