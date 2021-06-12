import React from 'react';

const Search = (props) => {
  return (
    <div className="search-container">
      <form action="" onSubmit={props.handleSubmit}>
        <div className="search-input__container">
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
