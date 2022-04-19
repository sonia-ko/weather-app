import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { store } from "./store/store";

const Root: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Router basename="/">{children}</Router>
    </Provider>
  );
};

export default Root;
