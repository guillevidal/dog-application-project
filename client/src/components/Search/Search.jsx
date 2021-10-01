import React from "react";
import { useDispatch } from "react-redux";
import { getBreedsName } from "../../Redux/actions";
import "./Search.css";

const Search = ({ name, setName }) => {
  const dispatch = useDispatch();
  function onChange(e) {
    setName(e.target.value);
  }
  function onSubmit(e) {
    dispatch(getBreedsName(name));
    alert(`Buscando a ${name}...`);
  }

  return (
    <div>
      <input
        className="searchInput"
        type="text"
        onChange={onChange}
        placeholder="Search Dogs"
      />

      <input className="searchButton " type="submit" onClick={onSubmit} />
    </div>
  );
};
export default Search;
