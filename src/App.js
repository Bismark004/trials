// App.js
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <MovieList/>

  );
}

export default App;
