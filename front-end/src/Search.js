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
            <div>
              {location.result}
            </div>
            
        </div>
    )
}

export default Search