import { useEffect, useState } from 'react';
import '../styles/App.css';
import Nav from '../components/Nav';
import MovieList from '../components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const apiKey = process.env.REACT_APP_MOVIE_DB_API_KEY;
  const apiUrl = process.env.REACT_APP_API_DOMAIN;

  // Recent movies on page load
  useEffect(() => {
    fetch(`${apiUrl}/movie/now_playing?api_key=${apiKey}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.results.length = 12;
        setMovies([...data.results]);
      });
  }, []);

  // Handle movie search
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${searchTerm}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.results.length = 12;
        setMovies([...data.results]);
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="app">
      <Nav handleSubmit={handleSubmit} handleChange={handleChange} />
      <h1 className="heading">Most Recent Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
