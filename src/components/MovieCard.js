import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = (props) => {
  return (
    <div className="card">
      <div className="card-img__container">
        <div className="rating">{props.rating}</div>
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/w500${props.image}`}
          alt="movie poster"
        />
      </div>
      <div className="card-title">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default MovieCard;
