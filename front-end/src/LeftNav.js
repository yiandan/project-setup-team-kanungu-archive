import React from 'react';
import './LeftNav.css';
import { NavLink } from 'react-router-dom';

const LeftNav = ({open}) => {
    return (
        <ul open={open}>
            <li> <NavLink to="./"> Home </NavLink></li>
            <li> <NavLink to="./Profile"> Profile</NavLink></li>
            <li> <NavLink to="./Search"> Search</NavLink></li>
            <li> <NavLink to="./MyRecipes"> My Recipes</NavLink></li>
            <li> <NavLink to="./PostNewRecipe"> Post New Recipe</NavLink></li>
            <li> <NavLink to="./MyFeed"> My Feed</NavLink></li>
            <li> <NavLink to="./SavedPosts"> Saved Posts</NavLink></li>
            <li> <NavLink to="./About"> About</NavLink></li>
            <li> <NavLink to="./Login"> Log in</NavLink></li>
            <li> <NavLink to="./signOut"> Sign Out</NavLink></li>
        </ul>
    )
}

export default LeftNav