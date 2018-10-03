import React, { Component } from "react";
import { Provider } from "./createContext";

// The provider, which holds the page-wide store and its actions.
class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      toggleLocation: this.toggleLocation
    };
  }

  componentDidMount() {
    // gotta wait until this is mounted before 'window' is available!
    let locSlug = window.location.pathname.split("/")[1];

    if (locSlug !== "new-york" && locSlug !== "palm-beach") {
      locSlug = "new-york";
    }
    this.setState(() => ({ location: locSlug }));
  }

  toggleLocation = location => {
    this.setState(state => ({ location: location }));
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default AppProvider;
