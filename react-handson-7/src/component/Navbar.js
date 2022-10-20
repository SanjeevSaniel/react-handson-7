import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink className="links" to="/Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/Students">
              Students
            </NavLink>
          </li>
          <li>
            <NavLink className="links" to="/Contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
