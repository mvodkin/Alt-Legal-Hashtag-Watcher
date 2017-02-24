import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDownDisplay: 'none'
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
  }

  componentDidMount() {
    document.querySelector("html").addEventListener("click", () => {
      this.setState({ dropDownDisplay: 'none'})
    })
  }

  handleLogout() {
    this.props.logout(this.props.user.id);
  }

  showDropdown() {
    this.setState({ dropDownDisplay: 'block' })
  }

  renderUser() {
    const { name, image } = this.props.user;
    if (name) {
      return (
        <div onClick={this.showDropdown}>
          <img src={image}></img>
          <span>{name}</span>
          <span className="caret"></span>
          <span
            className="dropdown"
            onClick={this.handleLogout}
            style={{display: this.state.dropDownDisplay}}
            >Sign Out</span>
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
