import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './SavedPosts.css'
import FeedPost from './FeedPost'
import Nav from './Nav'
import Todo from './ShoppingList'
import Sidebar from './Sidebar'
import RecipePage from './RecipePage'

const SavedPosts=()=> {
    return (
        <div>
        
            
        <div className="container">
        <Todo />
  
            <h1>Saved Posts</h1>
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
        </div>
    )
}

export default SavedPosts