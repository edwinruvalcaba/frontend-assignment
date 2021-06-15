import React from 'react';
import moment from 'moment';
import close from '../images/close.svg';
import '../styles/Modal.css';

const Modal = (props) => {
  if (!props.openModal) return null;
  if (!props.movie) return null;

  const date = moment(props.movie.release_date).format('MMMM Do YYYY');
  const closeModal = () => props.setOpenModal(false);

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-details">
        <div className="modal-left">
          <h1 className="modal-title">{props.movie.title}</h1>
          <img
            className="modal-img"
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            alt="movie poster"
          />
        </div>
        <div className="modal-right">
          <div className="modal-close" onClick={closeModal}>
            <img src={close} alt="close" />
          </div>
          <span className="modal-date">
            <strong>Release date: </strong>
            {date}
          </span>
          <p className="modal-summary">{props.movie.overview}</p>
          <span className="votes">
            <strong>{props.movie.vote_average}</strong> / 10 (
            {props.movie.vote_count} total votes)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
