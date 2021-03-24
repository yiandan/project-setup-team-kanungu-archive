import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './MyFeed.css'
import Nav from './Nav'
import FeedPost from './FeedPost'
import RecipePage from './RecipePage'
import SearchBar from './SearchBar'

const MyFeed=()=> {
    return (
        <div className="container">
            <h1>My Feed</h1>
            <SearchBar />
            <FeedPost> 
                <RecipePage />
            </FeedPost>
            <FeedPost> 
                <RecipePage />
            </FeedPost>
            <FeedPost> 
                <RecipePage />
            </FeedPost>
            <FeedPost> 
                <RecipePage />
            </FeedPost>
         
        </div>
    )
}

export default MyFeed