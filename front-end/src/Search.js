import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Search.css'
import Nav from './Nav'
import SearchBar from './SearchBar'

const Search=()=> {
    return (
        <div className="container">
            <h1>Search Page</h1>
            <Nav />
            <SearchBar />
            <div className="parent">
            <div className="Options">
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