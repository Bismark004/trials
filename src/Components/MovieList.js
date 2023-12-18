// MovieList.js
import React, { useState, useEffect } from 'react';
import { fetchMovieData } from '../api';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchResults = await fetchMovieData('avengers'); // Replace 'avengers' with your desired search term
        setMovies(searchResults);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Movies:</h1>
      {movies.map(movie => (
        <div key={movie.imdbID}>
        <Link to={`/movie/${movie.imdbID}`}>
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt={`Movie Poster ${movie.imdbID}`} />
  
        </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
