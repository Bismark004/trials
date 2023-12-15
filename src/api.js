// api.js
const fetchMovieData = async (searchTerm) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=e975bd7f`);
      const result = await response.json();
      return result.Search;
    } catch (error) {
      throw error;
    }
  };
  
  export { fetchMovieData };
  