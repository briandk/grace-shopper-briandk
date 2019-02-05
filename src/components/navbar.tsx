import React from "react";
import "uikit/dist/css/uikit.css";
import "uikit/dist/js/uikit.js";

export const Navbar = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar>
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          <li>
            <a className="uk-navbar-item uk-logo" href="#">
              Issues
            </a>
          </li>
          <li className="uk-active">
            <a href="#">
              <span className="uk-icon">Active</span>
            </a>
          </li>
          <li>
            <a href="#">Item</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
