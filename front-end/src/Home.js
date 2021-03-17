import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Home.css'
import Nav from './Nav'
import Reach from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home=(props)=> {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <Nav />
        </div>
    )
}

export default Home