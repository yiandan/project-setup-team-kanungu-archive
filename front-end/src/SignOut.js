import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './SignOut.css'
import Home from './Home'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const SignOut=()=> {
    return (
        <div className="container">
            <h1>SignOut</h1>
            <p1>You have successfully signed out!</p1>
            <br></br>
            <a href='./'>Return Home</a>
          
        </div>
    )
}

export default SignOut