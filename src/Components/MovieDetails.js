import React, { useEffect,  useState} from 'react';
import { useParams} from 'react-router-dom';

function MovieDetails () {
    const { id } = useParams();
    const [movie, setMovies] = useState(null);

    useEffect(() => {
        //Fetch movie details by id and update the state
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=e975bd7f`);
                const result = await response.json();
                setMovies(result);
            }
            catch (error) {
                console.error('Error fetching movie details:', error);

            }
        };

        fetchMovieDetails();

    }, [id]);

    if (!movie) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <div>
            <h1>{movie.Title}</h1>
            <img src={movie.Poster} alt={`Movie Poster ${id}`} />
            <p>Runtime: {movie.Runtime}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Plot: {movie.Plot}</p>
        </div>
    )
}
export default MovieDetails;