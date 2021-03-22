import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './PostNewRecipe.css'
import Nav from './Nav'

const PostNewRecipe=()=> {
    return (
        <div className="container">
            <h1>Post a New Recipe!</h1>
            
            <div className="wrapper">
            </div>
             <form>
             <fieldset>
               <legend>New Recipe:</legend>
               <label>
                 <p>Name of Recipe</p>
                 <input name="NameOfRecipe" />
               </label>
               <label>
                 <p>Ingredients</p>
                 <input name="NameOfRecipe" />
               </label>
               <label>
                 <p>Cuisine</p>
                 <input name="NameOfRecipe" />
               </label>
               <label>
                <p> Difficulty </p>
               </label>
               <select name="diff" id="diff">
                 <optgroup>
                 <option value="Beginner">Beginner</option>
                 <option value="Intermediate">Intermediate</option>
                 <option value="Difficult">Difficult</option>
                 </optgroup>
                 </select>
               <label>
                 <p>Instructions</p>
                 <textarea class="instructions" cols="80" rows="50"></textarea>
               </label>
                 </fieldset>
                <button type="post">Post</button>
              
             </form>
        
        </div>
    )
}

export default PostNewRecipe