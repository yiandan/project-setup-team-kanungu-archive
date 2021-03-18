import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './MyRecipes.css'
import Nav from './Nav'

const MyRecipes=()=> {
    return (
        <div className="container">
            <h1>My Recipes</h1>
            <Nav />
        </div>
    )
}

export default MyRecipes