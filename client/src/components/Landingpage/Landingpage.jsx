import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <section className="contenedorLa">
      <h2>PI "Dogs"</h2>
      <Link exact to="/home">
        ENTER
      </Link>
    </section>
  );
};

export default Landingpage;
