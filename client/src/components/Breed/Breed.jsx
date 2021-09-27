import React from "react";
import { Link } from "react-router-dom";
import "./Breed.css";

const Breed = ({ name, weight, temperament, image, id }) => {
  return (
    <div className="contenedorB">
      <Link className="Link" to={`/breedDetail/${id}`}>
        <figure>
          <img src={image} alt="" />
        </figure>
        <h2>{name}</h2>
        <p>
          <strong>Weight: {weight} kg</strong>{" "}
        </p>
        <p>
          <strong>Temperament: </strong> {temperament}
        </p>
      </Link>
    </div>
  );
};
export default Breed;
