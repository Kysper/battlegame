import React, { Component } from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import "./nav.css";
class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <BrowserRouter forceRefresh={true}>
          <ul>
            <li>
              {/* <NavLink to="/">Home</NavLink> */}
            </li>
            <li>
              <NavLink to="/form">Register</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
          </ul>
        </BrowserRouter>
      </div>
    );
  }
}

export default Nav;
