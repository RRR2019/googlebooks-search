import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <a className="nav-link" href="/saved"><button type="button" className="btn btn-info text-white">Saved Books</button></a>
    </nav>
  );
}

export default Nav;
