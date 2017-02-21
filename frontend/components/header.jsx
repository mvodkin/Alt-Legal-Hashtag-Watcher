import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  renderUser() {
    const { name, image } = this.props.user;
    if (name) {
      return (
        <div>
          <img src={image}></img>
          <span onClick={this.props.logout}>{name}</span>
          <span className="caret"></span>
        </div>
      )
    } else {
      return (
        <a href="/auth/twitter">Twitter Login</a>
      )
    }
  }

  render() {
    return (
      <header>
        <div className="header-content">
          <div className="header-content-left">
            <div className="header-logo"></div>
          </div>
          <div className="header-content-right">
            <span>Watchlists</span>
            {this.renderUser()}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
