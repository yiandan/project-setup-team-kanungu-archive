import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './MyRecipes.css'
import Nav from './Nav'
import SearchBar from './SearchBar'
import FeedPost from './FeedPost'
import RecipePage from './RecipePage'


const MyRecipes=()=> {
    return (
        <div className="container">
            <h1>My Recipes</h1>
            <SearchBar />
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

export default MyRecipes