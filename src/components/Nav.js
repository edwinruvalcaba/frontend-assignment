import React from 'react';
import logo from '../images/logo.svg';
import Search from './Search';
import '../styles/Nav.css';

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav-top">
        <img className="nav-logo" src={logo} alt="Timescale" />
        <Search
          handleSubmit={props.handleSubmit}
          handleChange={props.handleChange}
        />
      </div>
      <div className="nav-line"></div>
    </div>
  );
};

export default Nav;
