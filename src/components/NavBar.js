import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <li>
        <NavLink exact to="/HomePage">
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/AboutPage">
          About ths Website
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/DiscoverMoviesPage">
          Movies
        </NavLink>
      </li>
    </div>
  );
}
