import React from "react";
import { useSelector } from "react-redux";
import Breed from "../../Smarts/Breed/Breed.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const breeds = useSelector((state) => state.breeds);
  return (
    <div classname="contenedorH">
      <h2>Hola</h2>
      {breeds?.map((breed) => {
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
    </div>
  );
};

export default Home;
