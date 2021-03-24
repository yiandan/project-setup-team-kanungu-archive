import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './PostNewRecipe.css'
import SearchBar from './SearchBar'
import Nav from './Nav'

const PostNewRecipe=()=> {
    return (
        <div className="container">
            <h1>Post a New Recipe!</h1>
            <SearchBar />
            
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
                 <input name="Ingredients" />
               </label>
               <label>
                <p> Cuisine  </p>
               </label>
               <select name="cuisine" id="cuisine">
                 <optgroup>
                 <option value="Italian">Italian</option>
                 <option value="Chinese">Chinese</option>
                 <option value="Japanese">Japanese</option>
                 <option value="Indian">Indian</option>
                 <option value="Mexican">Mexican</option>
                 <option value="Thai">Thai</option>
                 <option value="American">American</option>
                 <option value="French">French</option>
                 <option value="Vietnamese">Vietnamese</option>
                 </optgroup>
                 </select>
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
                 <textarea class="instructions" cols="80" rows="35"></textarea>
               </label>
                 </fieldset>
                <button type="post">Post</button>
              
             </form>
        
        </div>
    )
}

export default PostNewRecipe