import React from "react";
import "./nav.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../about/about";
import SignUp from "../signup/signup";
import Contact from "../contact/contact";
import Profile from "../profile/profile";
const Nav = () => (
  <Router>
    <nav className="nav">
      <img
        alt="logo"
        className="logo"
        src="https://via.placeholder.com/200x80"
      />
      <ul className="navbar">
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/signup">
            Signup
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/profile">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
);

export default Nav;
