import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filtrados } from "../../Redux/actions";

function Filter() {
  const dispatch = useDispatch();
  const [filtrado, setFiltrados] = useState("");
  const temperaments = useSelector((state) => state.temperaments);
  const breeds = useSelector((state) => state.breeds);
  function onChangeFil({ target }) {
    setFiltrados(target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    let breedF = breeds.filter((el) => el.temperament.includes(filtrado));
    dispatch(filtrados(breedF));
  }
  console.log(filtrado);
  return (
    <form>
      <h2>Filter</h2>
      <select name="filter" onChange={onChangeFil}>
        {temperaments.map((el) => {
          return <option value={el.name}>{el.name}</option>;
        })}
      </select>
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}

export default Filter;
