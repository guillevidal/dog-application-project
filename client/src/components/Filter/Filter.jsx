import React from "react";

function Filter() {
  return (
    <form>
      <h2>Filter</h2>
      <select name="order" onChange={onChangeCat}>
        <option value="alphabetic">Temperament</option>
        <option value="weight">Breeds</option>
        <option value="">Created Breeds</option>
      </select>
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}

export default Filter;
