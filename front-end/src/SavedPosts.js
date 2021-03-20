import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './SavedPosts.css'
import FeedPost from './FeedPost'
import Nav from './Nav'

const SavedPosts=()=> {
    return (
        <div className="container">
            <h1>Saved Posts</h1>
            <FeedPost> 
                <h1>This is a open</h1>
                <p>Hello world!</p>
            </FeedPost>
            <FeedPost> 
                <h1>This is a open</h1>
                <p>Hello world!</p>
            </FeedPost>
            <FeedPost> 
                <h1>This is a open</h1>
                <p>Hello world!</p>
            </FeedPost>
            <FeedPost> 
                <h1>This is a open</h1>
                <p>Hello world!</p>
            </FeedPost>
            <FeedPost> 
                <h1>This is a open</h1>
                <p>Hello world!</p>
            </FeedPost>
           

          
        </div>
    )
}

export default SavedPosts