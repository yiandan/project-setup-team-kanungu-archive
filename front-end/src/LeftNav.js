import React from 'react';
import './LeftNav.css';
import { NavLink } from 'react-router-dom';

const LeftNav = ({open}) => {
    return (
        <ul open={open}>
            <li> <NavLink to="./"> Home </NavLink></li>
            <li> <NavLink to="./Search"> Search</NavLink></li>
            <li> <NavLink to="./signedOutLogin"> Sign In</NavLink></li>
        </ul>
    )
}

export default LeftNav