import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './MyFeed.css'
import Nav from './Nav'

const MyFeed=()=> {
    return (
        <div className="container">
            <h1>My Feed</h1>
            <Nav />
        </div>
    )
}

export default MyFeed