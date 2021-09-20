import React from "react";
import {Link} from 'react-router-dom'

const Nav= ()=>{
return(
    <nav>
        <h2>Soy el nav pa</h2>
        <Link exact to="/home" >Home</Link>
        <Link exact to="/breedDetail" >Breed Detail</Link>
        <Link exact to="/createBreed" >Create Breed</Link>
    </nav>
)
}

export default Nav;