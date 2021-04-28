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
             <form method="POST" action="">
             <fieldset>
               <legend>New Recipe:</legend>
               <p>
                 <label for="title">Name of Recipe: </label>  </p>
                 <input type="text" id="title" name="title" value=""></input>
                 <p>
                 <label for = "ingredients"> Ingredients: </label> </p>
                 <input type = "text" id="ingredients" name = "ingredients" value = ""></input>
                 <p>
                   <label for = "cuisine"> Cuisine</label>
                 </p>
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
                 <p> <label for = "difficulty"> Difficulty: </label> </p>
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
               <p> <label for = "instructions"> Instructions: </label>
               </p>
               <textarea type="text" id="instructions" name="instructions" cols="80" rows="35" value=""></textarea>
               
                 </fieldset>
                <button type="post">Post</button>
              
             </form>
        
        </div>
    )
}

export default PostNewRecipe