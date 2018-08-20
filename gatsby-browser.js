require("typeface-vollkorn");

import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import createStore from "./src/state/createStore";

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore();

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  return ConnectedRouterWrapper;
};
