import React from "react";
import { useState /* , useEffect  */ } from "react";
import axios from "axios";

const CreateBreed = () => {
  const [breed, setBreed] = useState({
    name: "",
    life_span: "",
    weight: "",
    height: "",
    image: "",
  });

  function onInputChange(e) {
    setBreed((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  /*  async function getTemperaments() {
    await axios.get("http://localhost:3001/temperament").then((obj) => {
      setTemperaments(obj.data);
    });
  } */
  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:3001/dog", breed);
    alert("Se agrego el perrito");
  }
  /*   useEffect(() => {
    getTemperaments();
  }, []); */
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={breed.name}
          onChange={onInputChange}
        />
        <label>Life span</label>
        <input
          type="text"
          name="life_span"
          value={breed.life_span}
          onChange={onInputChange}
        />
        <label>Weight</label>
        <input
          type="text"
          name="weight"
          value={breed.weight}
          onChange={onInputChange}
        />
        <label>Height</label>
        <input
          type="text"
          name="height"
          value={breed.height}
          onChange={onInputChange}
        />
        {/* <label>Temperament</label>
        <input
          type="text"
          name="image"
          value={breed.temperament}
          onChange={onInputChange}
        /> */}
        <label>image</label>
        <input
          type="text"
          name="image"
          value={breed.image}
          onChange={onInputChange}
        />
        <input type="submit" />
      </form>
    </section>
  );
};

export default CreateBreed;
