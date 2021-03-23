import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'
import { BrowserRouter as NavLink, Switch, Route } from 'react-router-dom';
import Profile from './Profile'


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
      <NavLink activeClassName="current" to="/">
          Home
        </NavLink>
      </a>
      <a className="menu-item" href="/Profile">
      <NavLink activeClassName="current" to="/Profile">
          Profile
        </NavLink>

      </a>
      
      <a className="menu-item" href="/Search">
        Search
      </a>
      <a className="menu-item" href="/MyRecipes">
        My Recipes
      </a>
      <a className="menu-item" href="/PostNewRecipe">
        Post New Recipe
      </a>
      <a className="menu-item" href="/MyFeed">
        My Feed
      </a>
      <a className="menu-item" href="/SavedPosts">
        Saved Posts
      </a>
      <a className="menu-item" href="/About">
        About
      </a>
      <a className="menu-item" href="/SignedOutLogin">
        Sign In
      </a>
      <a className="menu-item" href="/SignOut">
        Sign Out
      </a>
    </Menu>
    
  );
};