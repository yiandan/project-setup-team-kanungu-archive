import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Results.css'
import Nav from './Nav'
import SearchBar from './SearchBar'

const Results=()=> {
    return (
        <div className="container">
            <h1>Results</h1>
            <Nav />
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

export default Results
