import { useEffect, useState } from 'react';
import '../styles/App.css';
import Nav from '../components/Nav';
import MovieList from '../components/MovieList';
import Modal from '../components/Modal';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle movie search
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${searchTerm}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        if (data.results.length > 12) data.results.length = 12;
        setMovies([...data.results]);
      });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Open modal with current movie details
  const getMovieDetails = (id) => {
    setCurrentMovie(id);
    setOpenModal(true);
  };

  return (
    <div className="app">
      <Nav handleSubmit={handleSubmit} handleChange={handleChange} />
      <div className="heading-container">
        <h1 className="heading">
          {searchTerm ? `${searchTerm}` : 'Most Recent Movies'}
        </h1>
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        movie={movies.filter((movie) => movie.id === currentMovie)[0]}
      />
      <MovieList movies={movies} getMovieDetails={getMovieDetails} />
    </div>
  );
};

export default App;
