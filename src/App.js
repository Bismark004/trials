// App.js
import React from 'react';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MovieList/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </Router>


  );
}

export default App;
