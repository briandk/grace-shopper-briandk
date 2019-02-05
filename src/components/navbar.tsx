import React from "react";
import "uikit/dist/css/uikit.css";
import "uikit/dist/js/uikit.js";
import { NavbarLeft } from "./navbar-left";
import { NavbarRight } from "./navbar-right";

export const Navbar = () => {
  return (
    <nav className="uk-navbar-container" uk-navbar>
      <NavbarLeft />
      <NavbarRight />
    </nav>
  );
};
