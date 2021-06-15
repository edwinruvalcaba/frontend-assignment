import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = (props) => {
  return (
    <div className="movies-container">
      {props.movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            image={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
