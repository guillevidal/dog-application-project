import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clean } from "../../Redux/actions";

import Breed from "../Breed/Breed";

function ShowSearchDogs({ setName }) {
  const dispatch = useDispatch();
  const searchBreeds = useSelector((state) => state.breedsName);
  const [currentPage, setcurrentPage] = useState(0);
  function next() {
    setcurrentPage(currentPage + 8);
  }
  function prev() {
    if (currentPage > 0) {
      setcurrentPage(currentPage - 8);
    }
  }
  function PaginadoBusqueda() {
    return searchBreeds.slice(currentPage, currentPage + 8);
  }
  function onSubmit(e) {
    dispatch(clean());
    setName("");
  }
  return (
    <div classname="contenedorH">
      <button onClick={prev}>Prev</button>
      <button onClick={onSubmit}>Volver</button>
      <button onClick={next}>Next</button>
      {PaginadoBusqueda().map((breed) => {
        return (
          <Link className="Link" to={`/breedDetail/${breed.id}`}>
            <Breed
              name={breed?.name}
              weight={breed?.weight}
              temperament={breed?.temperament}
              image={breed?.image}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default ShowSearchDogs;
