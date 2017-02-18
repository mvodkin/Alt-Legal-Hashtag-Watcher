import React, { Component } from "react";

const Header = () => {

  return (
    <header>
      <div className="header-content">
        <div className="header-content-left">
          <div className="header-logo"></div>
        </div>
        <div className="header-content-right">
          <span>Watchlists</span>
          <a href="/auth/twitter">Twitter Login</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
