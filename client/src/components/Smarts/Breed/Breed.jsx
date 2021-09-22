import React from "react";
import "./Breed.css";

const Breed = ({ name, weight, temperament, image }) => {
  return (
    <div className="contenedor">
      <figure>
        <img src={image} alt="" />
      </figure>
      <h1>{name}</h1>
      <p>{weight} kg</p>
      <p>{temperament}</p>
    </div>
  );
};
export default Breed;
