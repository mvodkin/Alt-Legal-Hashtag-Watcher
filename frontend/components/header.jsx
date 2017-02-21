import React, { Component } from "react";

const Header = (props) => {

  const { name, image } = props.user;

  const handleLogout = () => {
    props.logout()
  }

  const renderUser = () => {
    if (name) {
      return (
        <div>
          <img src={image}></img>
          <span onClick={handleLogout}>{name}</span>
          <span className="caret"></span>
        </div>
      )
    } else {
      return (
        <a href="/auth/twitter">Twitter Login</a>
      )
    }
  }

  return (
    <header>
      <div className="header-content">
        <div className="header-content-left">
          <div className="header-logo"></div>
        </div>
        <div className="header-content-right">
          <span>Watchlists</span>
          {renderUser()}
        </div>
      </div>
    </header>
  );
}

export default Header;
