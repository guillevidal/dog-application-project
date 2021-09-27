import React, { useState } from "react";
import ShowDogs from "../ShowDogs/ShowDogs";
import Search from "../Search/Search";
import Order from "../Order/Order";

import ShowSearchDogs from "../ShowSearchDogs/ShowSearchDogs";

const Home = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <Search name={name} setName={setName} />
      <Order />
      {name === "" ? <ShowDogs /> : <ShowSearchDogs setName={setName} />}
    </div>
  );
};

export default Home;