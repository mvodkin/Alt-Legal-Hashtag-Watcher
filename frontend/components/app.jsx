import React, { Component } from "react";
import HeaderContainer from "./header_container";
import BodyContainer from "./body_container";

const App = (props) => {
  return (
    <div>
      <HeaderContainer {...props}/>
      <BodyContainer {...props}/>
    </div>
  )
}

export default App;
