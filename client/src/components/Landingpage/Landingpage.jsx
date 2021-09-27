import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <section className="Landing">
      <h1 className="titleLanding">PI "Dogs"</h1>
      <Link exact to="/home" className="boton-landing">
        ENTER
      </Link>
    </section>
  );
};

export default Landingpage;
