import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './SavedPosts.css'
import Nav from './Nav'

const SavedPosts=()=> {
    return (
        <div className="container">
            <h1>Saved Posts</h1>
            <Nav />
        </div>
    )
}

export default SavedPosts