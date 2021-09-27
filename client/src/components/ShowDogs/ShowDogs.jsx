import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ShowDogs.css";
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
    <div>
      <div className="contenedorShowDogs">
        {Paginado().map((breed) => {
          return (
            <Breed
              name={breed?.name}
              weight={breed?.weight}
              temperament={breed?.temperament}
              image={breed?.image}
              id={breed.id}
            />
          );
        })}
      </div>
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default ShowDogs;
