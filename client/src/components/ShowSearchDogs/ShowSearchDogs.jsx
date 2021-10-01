import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clean } from "../../Redux/actions";
import "./ShowSearchDogs.css";

import Breed from "../Breed/Breed";

function ShowSearchDogs({ setName }) {
  const dispatch = useDispatch();
  const searchBreeds = useSelector((state) => state.breedsName);
  const [currentPage, setcurrentPage] = useState(0);
  function next() {
    if (searchBreeds.length > currentPage + 8) {
      setcurrentPage(currentPage + 8);
    }
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
    <div>
      <div className="contenedorInputSearchShowDogs">
        <button onClick={prev}>←</button>
        <button onClick={onSubmit}>Back</button>
        <button onClick={next}>→</button>
      </div>
      <div className="contenedorSearchShowDogs">
        {PaginadoBusqueda().map((breed) => {
          return (
            <Breed
              name={breed?.name}
              weight={breed?.weight}
              temperament={breed?.temperament}
              image={breed?.image}
              id={breed?.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShowSearchDogs;
