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
        </div>
    )
}

export default Search