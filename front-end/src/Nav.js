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


export default Nav;
