import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router';
import Landingpage from './components/Dumbs/Landingpage/Landingpage'
import Home from './components/Dumbs/Home/Home';
import BreedDetail from './components/Dumbs/BreedDetail/BreedDetail'
import CreateBreed from './components/Dumbs/CreateBreed/CreateBreed'
import Nav from './components/Dumbs/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Landingpage}/>
      <Route path='/' component={Nav}/>     
      <Route exact path='/home' component={Home}/>
      <Route exact path='/breedDetail' component={BreedDetail}/>
      <Route exact path='/createBreed' component={CreateBreed}/>
      </Switch>
      </div>
  
  );
}

export default App;
