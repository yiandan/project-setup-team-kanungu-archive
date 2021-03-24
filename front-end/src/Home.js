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
import RecipePage from './RecipePage';
import Login from './Login';



const Home=(props)=> {
    return (
        <div className="container">

            {/* <div className="top_bar">
                <div className="bar" >
                    <h1 className='item'>Home Page</h1>
                    <div className="float_right">
                        <Link to="./Login">
                            <button type="button" className="login_btn">
                                Login
                            </button>
                        </Link> 
                    </div>
                </div>
            </div> */}

                <h1 className='home_header'>Home Page</h1>
                <Link to="./Login">
                    <button type="button" className="float">
                        Login
                    </button>
                </Link>

            <SearchBar />
            <h2>Explore Our Recipes Below</h2>

            <FeedPost> 
                <RecipePage/>
            </FeedPost>
            <FeedPost> 
                <RecipePage/>
            </FeedPost>
            <FeedPost> 
                <RecipePage/>
            </FeedPost>
            <FeedPost> 
                <RecipePage/>
            </FeedPost>
            <FeedPost> 
                <RecipePage/>
            </FeedPost>
        </div>
    )
}

export default Home