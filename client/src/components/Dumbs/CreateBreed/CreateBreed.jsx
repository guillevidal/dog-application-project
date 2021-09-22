import React from "react";
import { useState } from "react";

const CreateBreed = () => {
  const [breed, setBreed] = useState({});
  function onInputChange(e) {
    setBreed((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  }
  return (
    <section>
      <form>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={breed.name}
          onChange={onInputChange}
        />
        <label>image</label>
        <input
          type="text"
          name="image"
          value={breed.image}
          onChange={onInputChange}
        />
      </form>
    </section>
  );
};

export default CreateBreed;
