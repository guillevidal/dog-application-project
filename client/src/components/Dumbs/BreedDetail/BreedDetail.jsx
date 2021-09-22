import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const BreedDetail = () => {
  const [state, setState] = useState({});
  const { id } = useParams();
  function getBreedDetail(id) {
    axios.get(`http://localhost:3001/dogs/${id}`).then((json) => {
      setState(json.data);
    });
  }
  useEffect(() => {
    getBreedDetail(id);
  }, []);
  return (
    <section>
      <figure>
        <img src={state.image} alt="" />
      </figure>
      <h1>{state.name}</h1>
      <p>Life span: {state.life_span}</p>
      <p>Weight: {state.weight} kg</p>
      <p>Height: {state.height} cm</p>
      <p>Temperament: {state.temperament}</p>
    </section>
  );
};

export default BreedDetail;
