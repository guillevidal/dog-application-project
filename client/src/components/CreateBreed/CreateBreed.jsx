import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./CreateBreed.css";
import createDogImg from "../../img/createDog.png";

const CreateBreed = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const [error, setError] = useState({
    name: "",
    height: "",
    weight: "",
  });
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

    !temps.includes(target.value)
      ? setTemps([...temps, target.value])
      : alert(`${target.value}  `);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3001/dog", breed);
    alert(`Creaste a ${breed.name}!`);
  }
  function deleteTemp(key) {
    let deleteTemperament = temps.filter((el) => el !== temps[key]);
    setTemps(deleteTemperament);
  }
  function validate(input) {
    if (breed[input] === "") {
      setError({ ...error, [input]: `this field cannot be empty` });
    } else {
      setError({ ...error, [input]: "" });
    }
  }
  return (
    <div className="contenedorCreateDog">
      <form className="CreateDogsForm">
        <label>
          <strong>Name</strong>
        </label>

        <input
          className={error.name ? "dangerInput" : ""}
          type="text"
          name="name"
          placeholder="Type a name"
          value={breed.name}
          onChange={onInputChange}
          onBlur={(e) => validate(e.target.name)}
        />
        {!error.name ? null : <p>{error.name}</p>}
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
          min="0"
          max="1000"
          type="number"
          name="weight"
          value={breed.weight}
          placeholder="Write a weight"
          onChange={onInputChange}
          onBlur={(e) => validate(e.target.name)}
        />
        {!error.weight ? null : <p>{error.name}</p>}
        <label>
          <strong>Height</strong>
        </label>
        <input
          min="0"
          max="1000"
          type="number"
          name="height"
          value={breed.height}
          placeholder="Write a height"
          onChange={onInputChange}
          onBlur={(e) => validate(e.target.name)}
        />
        {!error.height ? null : <p>{error.name}</p>}
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
          className="inputSelectCreate"
        >
          {temperaments.map((el) => {
            return <option value={el.name}>{el.name}</option>;
          })}
        </select>
        <div className="conteinerTemperamentSelected">
          {temps.map((el, index) => (
            <div key={el + 4}>
              <span key={index} className="temperamentSelected">
                {el}
              </span>
              <button
                key={index + 5}
                onClick={(e) => {
                  e.preventDefault();
                  deleteTemp(index);
                }}
                className="btnCloseTemperamentSelected"
              >
                x
              </button>
            </div>
          ))}
        </div>
        {breed.name === "" ||
        breed.height === "" ||
        breed.weight === "" ? null : (
          <button className="createButtom" onClick={handleSubmit}>
            Create
          </button>
        )}
      </form>
      <figure>
        <img src={createDogImg} alt="Jake el perro" />
      </figure>
    </div>
  );
};

export default CreateBreed;
