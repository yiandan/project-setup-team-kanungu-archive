import React from 'react';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Burger from './Burger'

const Nav = () => {
    return (
        <nav className="Navstyle">
            <div className="logo">
                Nav Bar
            </div>
            <Burger />
        </nav>
    )
};
    /*
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="./Home">Home</NavLink></li>
        <li><NavLink to="./Search">Search</NavLink></li>
      </ul>
    </nav>
  );
  */


export default Nav;
