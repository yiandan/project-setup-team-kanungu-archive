import React from 'react'
import ReactDOM from 'react-dom';
import {NavLink, Link } from 'react-router-dom';
import App from './App'
import './About.css'
import Nav from './Nav'
import SearchBar from './SearchBar';

const About=()=> {
    return (
        <div className="container">
            <h1>About Recipe Central</h1>
            <SearchBar />
            <p>
            Recipe Central allows for users to write and share recipes. Users are 
            able to post recipes and save and comment on others.
            Users can also search by various categories such as difficulty, ingredients, cuisine,
            other users, and more. Recipe Central is a unique and interactive recipe sharing platform, and recipes
            are easily accessable and shareable.
            </p>
            <br></br>
            <h2>Creating an Account</h2>
            <p>
            If you decide to create an account, you will 
            be able to go through a common and a personalized feed, post and share recipes, 
            and interact with others and their recipes. Recipe Central is perfect for
            anyone who wants be able to use an interactive recipe 
            platform, whether they are trying to learn how to make new things or just 
            continue to learn more recipes to share with others. 
            <br></br>
            <br></br>
            <span>You can sign up here: <NavLink to="./SignedOutLogin"> Log In/Sign Up!</NavLink> </span>
            </p>
          
        </div>
    )
}

export default About