import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  state = { isOpen: false };
  toggleSideNav = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  };
  closeSideNav = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    const { isOpen } = this.state;
    const isSideNavOpen = isOpen ? "open" : "";
    const activeBtn = isOpen ? "#61dafb" : "";
    return (
      <nav>
        <div className="container">
          <button
            className="nav-btn"
            onClick={this.toggleSideNav}
            style={{ color: activeBtn }}
          >
            <i className="fas fa-bars" />
          </button>
          <ul className={isSideNavOpen}>
            <li>
              <NavLink
                to="/movies"
                activeClassName="selected"
                onClick={this.closeSideNav}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tv"
                activeClassName="selected"
                onClick={this.closeSideNav}
              >
                Tv Shows
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
