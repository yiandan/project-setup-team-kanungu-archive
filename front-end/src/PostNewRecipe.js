import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './PostNewRecipe.css'
import SearchBar from './SearchBar'
import Nav from './Nav'

const PostNewRecipe=()=> {
    return (
      <div className="projectcss">
        <div className="container">
            <h1>Post a New Recipe!</h1>
            <SearchBar />
            <div className="wrapper">
            </div>
             <form method="POST" action="">
             <fieldset>
               <legend>New Recipe:</legend>
               <label>
                 <p>Name of Recipe</p>
                 <input name="NameOfRecipe" id = "title" name = "title"/>
               </label>
               <label>
                 <p>Ingredients</p>
                 <input name="Ingredients" id= "ingredients" name= "ingredients" />
               </label>
               <label>
                <p> Cuisine  </p>
               </label>
               <select name="cuisine" id="cuisine" name="cuisine">
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
               <select name="difficulty" id="difficulty">
                 <optgroup>
                 <option value="Beginner">Easy</option>
                 <option value="Intermediate">Intermediate</option>
                 <option value="Difficult">Advanced</option>
                 </optgroup>
                 </select>
                 
                 
                 <label>
                   <p>Upload Recipe Images</p>
                 </label>
                 <form method="POST" action="/upload-multiple-images" enctype="multipart/form-data">
                   <div>
                     <label>Select multiple images:  </label>
                     <input type="file" name="multiple_images" multiple />
                     </div>
                     <div>
                       <input type="submit" name="btn_upload_multiple_images" value="Upload" />
                       </div> 
                  </form>
                  <label>
                 <p>Instructions</p>
                 <textarea class="instructions" cols="80" rows="35" id = "instructions"></textarea>
                </label>
                 </fieldset>
                <button type="post">Post</button>
              
             </form>
        
        </div>
        </div>
    )
}

export default PostNewRecipe