import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import App from './App'
import './Search.css'
import Nav from './Nav'
import SearchBar from './SearchBar'

const Search=()=> {

  const location= useLocation();

    return (
        <div className="container">
            <h1>Search Page</h1>
            <SearchBar />
            <br></br>
            <span>Or browse by:</span>
            <div className="parent">
            <select name="category" className="advanceddropdown">
            <option value="" disabled selected>Difficulty Level</option>
              <option value="easy" >Easy</option>
              <option value="intermediate" >Intermediate</option>
              <option value="advanced" >Advanced</option>
            </select>

            <select name="category" className="advanceddropdown">
            <option value="" disabled selected>Recipe Time</option>
              <option value="easy" >30 minutes or less</option>
              <option value="intermediate" >30 minutes to an hour</option>
              <option value="advanced" >Longer than an hour</option>
            </select>
            </div>
            <div>
              {location.result}
            </div>
            
        </div>
    )
}

export default Search