import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="conteiner-nav">
      <Link className="btn-nav" exact to="/home">
        Home
      </Link>

      <Link className="btn-nav" exact to="/createBreed">
        Create Breed
      </Link>
    </nav>
  );
};

export default Nav;
