import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  return (
    <div className="movies-container">
      <div className="row">
        <div className="col">
          {props.movies.map((movie, i) => {
            return <MovieCard key={i} image={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
