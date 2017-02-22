import React, { Component } from "react";
import { Provider } from "react-redux";
import HeaderContainer from "./header_container";
import BodyContainer from "./body_container";
import App from "./app";

const Root = ({store}) => {

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root;
