import { useState } from 'react';
import Nav from '../components/Nav';
import MovieList from '../components/MovieList';
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7315ec59ea2264da1fa4f4eb8d647853&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setMovies([...data.results]);
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <Nav handleSubmit={handleSubmit} handleChange={handleChange} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
