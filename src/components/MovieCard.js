import React from 'react';

const MovieCard = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
          alt="movie poster"
        />
        <p>movie title</p>
      </div>
    </div>
  );
};

export default MovieCard;
