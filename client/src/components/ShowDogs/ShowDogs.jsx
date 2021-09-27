import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./ShowDogs.css";
import Breed from "../Breed/Breed";
import Order from "../Order/Order";

function ShowDogs() {
  const [currentPage, setcurrentPage] = useState(0);
  const [filtrado, setFiltrados] = useState("");
  const temperaments = useSelector((state) => state.temperaments);
  const breeds = useSelector((state) => state.breeds);
  function Paginado() {
    if (filtrado === "") {
      return breeds.slice(currentPage, currentPage + 8);
    } else {
      if (filtrado === "DB") {
        let DB = breeds.filter((el) => typeof el.id === "string");
        return DB.slice(currentPage, currentPage + 8);
      } else if (filtrado === "API") {
        let API = breeds.filter((el) => typeof el.id === "number");
        return API.slice(currentPage, currentPage + 8);
      } else {
        let breedF = breeds.filter((el) => el.temperament?.includes(filtrado));
        return breedF;
      }
    }
  }
  function next() {
    if (breeds.length > currentPage + 8) {
      setcurrentPage(currentPage + 8);
    }
  }
  function prev() {
    if (currentPage > 0) {
      setcurrentPage(currentPage - 8);
    }
  }
  function onChangeFil({ target }) {
    setFiltrados(target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setFiltrados("");
  }
  return (
    <div>
      <Order />
      <form>
        <h2>Filter</h2>
        <select name="filter" onChange={onChangeFil}>
          {temperaments.map((el) => {
            return <option value={el.name}>{el.name}</option>;
          })}
        </select>
        <select onChange={onChangeFil}>
          <option value="intro">Choose created or existing dogs</option>
          <option value="DB">Dogs created</option>
          <option value="API">Existing dogs</option>
        </select>
        <button onClick={onSubmit}>Clean Filter</button>
      </form>
      <div className="contenedorShowDogs">
        {Paginado().map((breed) => {
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
      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default ShowDogs;
