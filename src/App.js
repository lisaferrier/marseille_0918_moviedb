//This file host all the components of our application
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import MovieCard from './components/movieCard/MovieCard';
import Home from './components/shared/home/Homes';
import SearchBar from './components/searchBar/SearchBar';
import singleMovie from './components/MovieCard/singleMovie';


class App extends Component {

  render() {
    return (
      <div>
        <Home/>
        <SearchBar/>
        <Switch>
            <Route exact path="/movie/:id" component={singleMovie} />
        </Switch>  
      </div>
    );
  }
}

export default App;