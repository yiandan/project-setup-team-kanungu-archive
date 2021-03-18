import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './About.css'
import Nav from './Nav'

const About=()=> {
    return (
        <div className="container">
            <h1>About Recipe Central</h1>
            <Nav />
        </div>
    )
}

export default About