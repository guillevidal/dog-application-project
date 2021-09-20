import React from "react";
import { Link } from "react-router-dom";
import '../../../landing.css';

const Landingpage = ()=>{
    return(
        <section >
        <h2>Soy Landingpage</h2>
        <Link exact to="/home">ENTER</Link>
        </section>
    )
}

export default Landingpage