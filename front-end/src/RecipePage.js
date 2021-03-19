import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import Avatar from './T8YC63.jpg'
import './RecipePage.css'
import Nav from './Nav'

const RecipePage=()=> {
   
    return (
        <div className= "container">
            <h1>Profile</h1>
            <div className = "recipe" style = {backgroundStyle}>
            <img class = "Avatar" src={Avatar} alt="Avatar"></img>

                <div className = "authorName">
                    <h1>Author Name</h1>
                </div>
            </div>
            
        </div>
    )
    
}

    
export default RecipePage
