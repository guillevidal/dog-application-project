import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import Landingpage from "./components/Landingpage/Landingpage";
import Home from "./components/Home/Home";
import BreedDetail from "./components/BreedDetail/BreedDetail";
import CreateBreed from "./components/CreateBreed/CreateBreed";
import Nav from "./components/Nav/Nav";
import { useDispatch } from "react-redux";
import { getBreeds, getTemperaments } from "./Redux/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBreeds());
    dispatch(getTemperaments());
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
