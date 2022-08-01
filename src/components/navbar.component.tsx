import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <Link to="/" className="navbar-brand">
          My Tennis Journal
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Logs
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createprepracticelog" className="nav-link">
                Create Pre Practice Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createpostpracticelog" className="nav-link">
                Create Post Practice Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
