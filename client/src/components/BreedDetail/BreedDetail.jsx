import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBreedsId } from "../../Redux/actions";
import "./BreedDetail.css";
import img from "../../img/breedDetail.png";

const BreedDetail = () => {
  const { id } = useParams();
  const detail = useSelector((state) => state.breedsDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBreedsId(id));
  }, []);
  return (
    <section className="conteinerBreedDetail">
      <div>
        <img src={img} alt="foto de Jake el perro" />
      </div>
      <div className="conteinerInfoBreedDetail">
        <figure>
          <img src={detail.image} alt={detail.name} />
        </figure>
        <h1>{detail.name}</h1>
        <p>
          <strong>Life span: </strong> {detail.life_span} years
        </p>
        <p>
          <strong>Weight:</strong> {detail.weight} kg
        </p>
        <p>
          <strong>Height:</strong> {detail.height} cm
        </p>
        <p>
          <strong>Temperament:</strong> {detail.temperament}
        </p>
      </div>
    </section>
  );
};

export default BreedDetail;
