import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Home.css'
import Nav from './Nav'
import Search from './Search'
import Reach from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignedOutLogin from './SignedOutLogin'
import MyRecipes from './MyRecipes'
import MyFeed from './MyFeed'
import SavedPosts from './SavedPosts'
import About from './About'
import SignOut from './SignOut'
import SearchBar from './SearchBar'
import FeedPost from './FeedPost'


const Home=(props)=> {
    return (
        <div className="container">
            <h1>Home Page</h1>
            <SearchBar />
            <h2>Please pardon our appearance... hopefully we'll have a cute app soon</h2>
            
            <FeedPost> 
                <h1>This is a open</h1>
                <p>Hello world!</p>
            </FeedPost>
        </div>
    )
}

export default Home