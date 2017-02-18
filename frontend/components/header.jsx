import React, { Component } from "react";

const Header = () => {

  return (
    <header>
      <div className="header-logo"></div>
      <div>Watchlists</div>
      <a href="/auth/twitter">Twitter Login</a>
    </header>
  );
}

export default Header;
