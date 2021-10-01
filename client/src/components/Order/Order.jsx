import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderBy } from "../../Redux/actions";
import "./Order.css";

function Order() {
  const [category, setCategory] = useState("alphabetic");
  const [order, setOrder] = useState("ascending");
  const dispatch = useDispatch();

  function onChangeCat({ target }) {
    setCategory(target.value);
  }

  function onChangeOr({ target }) {
    setOrder(target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(orderBy(order, category));
  }
  console.log(order, category);
  return (
    <form className="conteinerInput">
      <h3>Order</h3>
      <select name="category" onChange={onChangeCat}>
        <option value="alphabetic">Alphabetic</option>
        <option value="weight">Weight</option>
      </select>
      <select name="order" onChange={onChangeOr}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}

export default Order;
