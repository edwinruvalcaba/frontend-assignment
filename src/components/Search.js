import React from 'react';
import '../styles/Search.css';
import searchIcon from '../images/searchIcon.svg';

const Search = (props) => {
  return (
    <div className="search-container">
      <form action="" onSubmit={props.handleSubmit}>
        <div className="search-input__container">
          <img src={searchIcon} alt="" />
          <input
            placeholder="Search for a movie"
            type="text"
            onChange={props.handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
