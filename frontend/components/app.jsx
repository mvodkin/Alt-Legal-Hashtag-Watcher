import React, { Component } from "react";
import { Provider } from "react-redux";
import HeaderContainer from "./header_container";

const App = ({store}) => {

  return (
    <Provider store={store}>
      <HeaderContainer/>
    </Provider>
  )
}

export default App;
