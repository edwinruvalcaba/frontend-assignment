import React from 'react';
import logo from '../images/logo.svg';
import Search from './Search';
import '../styles/Nav.css';

const Nav = (props) => {
  return (
    <div className="nav">
      <img src={logo} alt="Timescale" />
      <Search
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
      />
    </div>
  );
};

export default Nav;
