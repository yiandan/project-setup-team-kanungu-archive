import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Profile">
        Profile
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
      <a className="menu-item" href="/Results">
        Results
      </a>
    </Menu>
  );
};