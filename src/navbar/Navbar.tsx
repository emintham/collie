import React from "react";
import Login from "./Login";
import NavLink from "./Navlink";
import { AppName } from "../constants";

const Navbar = (): JSX.Element => (
  <header className={"header-6"}>
    <div className={"branding"}>
      <a href="/" className={"nav-link"}>
        <span className={"title"}>{AppName}</span>
      </a>
    </div>
    <div className={"header-nav"}>
      <NavLink to="/editor">
        <span className={"nav-text"}>Editor</span>
      </NavLink>
    </div>
    <form className={"search"}>
      <label>
        <input
          id="search_input"
          type="text"
          placeholder="Search for an article"
        />
      </label>
    </form>
    <Login />
  </header>
);

export default Navbar;
