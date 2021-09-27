import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getTemperaments } from "../../Redux/actions";
import "./CreateBreed.css";

const CreateBreed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperaments());
  }, []);
  const temperaments = useSelector((state) => state.temperaments);
  const [temp, setTemp] = useState([]);
  const [temps, setTemps] = useState([]);
  const [breed, setBreed] = useState({
    name: "",
    life_span: "",
    weight: "",
    height: "",
    image: "",
    temperament: temp,
  });

  function onInputChange(e) {
    setBreed((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  function onInputChangeTemperaments({ target }) {
    setTemp(breed.temperament.push(target.value));
  }
  /* function onInputChangeTemperamentShow({ target }) {
    setTemps([...temps, target.value]);
  } */

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3001/dog", breed);
    alert("Se agrego el perrito");
  }
  function deleteTemp(key) {
    let temps = temp.filter((el) => el !== temp[key]);
    setTemp(temps);
  }
  console.log(breed);
  return (
    <form className="CreateDogsForm">
      <label>
        <strong>Name</strong>
      </label>

      <input
        type="text"
        name="name"
        placeholder="Type a name"
        value={breed.name}
        onChange={onInputChange}
      />
      <label>
        <strong>Life span</strong>
      </label>
      <input
        type="text"
        name="life_span"
        value={breed.life_span}
        placeholder="Writes a life expectancy"
        onChange={onInputChange}
      />
      <label>
        <strong>Weight</strong>
      </label>
      <input
        type="text"
        name="weight"
        value={breed.weight}
        placeholder="Write a weight"
        onChange={onInputChange}
      />
      <label>
        <strong>Height</strong>
      </label>
      <input
        type="text"
        name="height"
        value={breed.height}
        placeholder="Write a height"
        onChange={onInputChange}
      />
      <label>
        <strong>Image</strong>
      </label>
      <input
        type="text"
        name="image"
        value={breed.image}
        placeholder="insert a url"
        onChange={onInputChange}
      />
      <label>
        <strong>Temperament</strong>
      </label>
      <select
        name="temperament"
        value="choose a temperament"
        onChange={onInputChangeTemperaments}
      >
        {temperaments.map((el) => {
          return <option value={el.name}>{el.name}</option>;
        })}
      </select>
      {/*  <div className="filter-selected">
        {temps.map((el, index) => (
          <div key={el}>
            <span className="headers">{el}</span>
            <button
              key={el + "a"}
              onClick={() => deleteTemp(index)}
              className="btn5"
            >
              x
            </button>
          </div>
        ))}
      </div> */}
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
};

export default CreateBreed;
