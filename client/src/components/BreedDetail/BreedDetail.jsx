import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBreedsId } from "../../Redux/actions";
import { useSelector } from "react-redux";

const BreedDetail = () => {
  const { id } = useParams();
  const detail = useSelector((state) => state.breedsDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBreedsId(id));
  }, []);
  return (
    <section>
      <figure>
        <img src={detail.image} alt="" />
      </figure>
      <h1>{detail.name}</h1>
      <p>Life span: {detail.life_span}</p>
      <p>Weight: {detail.weight} kg</p>
      <p>Height: {detail.height} cm</p>
      <p>Temperament: {detail.temperament}</p>
    </section>
  );
};

export default BreedDetail;
