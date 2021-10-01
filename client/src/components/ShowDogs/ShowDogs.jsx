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
  var arr = breeds.slice(currentPage, currentPage + 8);
  function Paginado() {
    /* if (filtrado === "") {
      arr = breeds.slice(currentPage, currentPage + 8);
      return arr; */
    /*  } else { */
    if (filtrado === "DB") {
      arr = breeds.filter((el) => typeof el.id === "string");
      return arr.slice(currentPage, currentPage + 8);
    } else if (filtrado === "API") {
      arr = breeds.filter((el) => typeof el.id === "number");
      return arr.slice(currentPage, currentPage + 8);
    } else {
      arr = breeds.filter((el) => el.temperament?.includes(filtrado));
      return arr.slice(currentPage, currentPage + 8);
    }
  }
  /*  } */
  function next() {
    if (arr.length > currentPage + 8) {
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
      <form className="formFilterShowDos">
        <h3>Filter</h3>
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
              key={breed?.id}
              name={breed?.name}
              weight={breed?.weight}
              temperament={breed?.temperament}
              image={breed?.image}
              id={breed?.id}
            />
          );
        })}
      </div>
      <div className="contenedorBotonesShowDogs">
        <button className="inputPrevShowDogs" onClick={prev}>
          ←
        </button>
        <button className="inputNextShowDogs" onClick={next}>
          →
        </button>
      </div>
    </div>
  );
}

export default ShowDogs;
