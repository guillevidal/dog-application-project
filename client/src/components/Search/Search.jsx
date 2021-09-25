import React from "react";
import { useDispatch } from "react-redux";
import { getBreedsName } from "../../Redux/actions";

const Search = ({ name, setName }) => {
  const dispatch = useDispatch();
  function onChange(e) {
    setName(e.target.value);
  }
  function onSubmit(e) {
    dispatch(getBreedsName(name));
    alert("buscando");
  }

  return (
    <div>
      <div>
        <input type="text" onChange={onChange} />
      </div>
      <div>
        <input type="submit" onClick={onSubmit} />
      </div>
    </div>
  );
};
export default Search;
