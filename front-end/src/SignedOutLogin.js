import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './SignedOutLogin.css'
import Nav from './Nav'
import Reach from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const SignedOutLogin=()=> {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <Nav />
          
            
            <p>Hi</p>
        </div>


    )
}


export default SignedOutLogin
