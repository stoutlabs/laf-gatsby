import React, { Component } from "react";
import { Provider } from "./createContext";

// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: this.locationListener(),
      toggleLocation: this.toggleLocation
    };
  }

  locationListener = () => {
    console.log("loclisten:", window.location.pathname);
    let locSlug = window.location.pathname.split("/")[1];

    if (locSlug !== "new-york" && locSlug !== "palm-beach") {
      locSlug = "new-york";
    }
    return locSlug;
  };

  toggleLocation = location => {
    this.setState(state => ({ location: location }));
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default AppProvider;
