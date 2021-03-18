import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './PostNewRecipe.css'
import Nav from './Nav'

const PostNewRecipe=()=> {
    return (
        <div className="container">
            <h1>Post New Recipe</h1>
            <Nav />
        </div>
    )
}

export default PostNewRecipe