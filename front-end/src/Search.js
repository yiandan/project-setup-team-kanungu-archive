import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Search.css'
import Nav from './Nav'
import SearchBar from './SearchBar'

const Search=()=> {
    /*
    const Ingredients = document.getElementById('ingredient')
    Ingredients.addEventListener('click', function() {
        <a href = '/Results'></a>
    }, false);
    */
    return (
        <div className="container">
            <h1>Search Page</h1>
            
            <SearchBar />
            <div className="parent">
            <div className="Options" id="ingredient">
              Ingredient
            </div>
            <div className="Options">
              Cuisine
            </div>
            <div className="Options">
              Person
            </div>
            <div className="Options">
              Difficulty
            </div>
            </div>
            
        </div>
    )
}

export default Search