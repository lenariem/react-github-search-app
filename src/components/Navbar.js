import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../img/github-logo.png";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <NavLink exact to="/">
      <div className="navbar-brand mr-5">
        Github User Search
        <img
          src={logoImg}
          alt="logo"
          height="50"
          className="d-inline-block align-text-top"
        />
      </div>
    </NavLink>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);
