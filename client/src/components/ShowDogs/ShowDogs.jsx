import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breed from "../Breed/Breed";

function ShowDogs() {
  const [currentPage, setcurrentPage] = useState(0);
  const breeds = useSelector((state) => state.breeds);
  function Paginado() {
    return breeds.slice(currentPage, currentPage + 8);
  }
  function next() {
    setcurrentPage(currentPage + 8);
  }
  function prev() {
    if (currentPage > 0) {
      setcurrentPage(currentPage - 8);
    }
  }
  return (
    <div classname="contenedorH">
      {Paginado().map((breed) => {
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
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default ShowDogs;
