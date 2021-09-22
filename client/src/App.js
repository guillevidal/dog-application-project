import "./App.css";
import React from "react";
import { Route, Switch } from "react-router";
import Landingpage from "./components/Dumbs/Landingpage/Landingpage";
import Home from "./components/Dumbs/Home/Home.jsx";
import BreedDetail from "./components/Dumbs/BreedDetail/BreedDetail";
import CreateBreed from "./components/Dumbs/CreateBreed/CreateBreed";
import Nav from "./components/Dumbs/Nav/Nav";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBreeds } from "./actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBreeds());
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/">
          <Nav />
          <Route exact path="/home" component={Home} />
          <Route exact path="/breedDetail/:id" component={BreedDetail} />
          <Route exact path="/createBreed" component={CreateBreed} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
