import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <li>
        <NavLink to="/HomePage">Home Page</NavLink>
      </li>
      <li>
        <NavLink to="/AboutPage">About ths Website</NavLink>
      </li>
      <li>
        <NavLink to="/DiscoverMoviesPage">Movies</NavLink>
      </li>
    </div>
  );
}
