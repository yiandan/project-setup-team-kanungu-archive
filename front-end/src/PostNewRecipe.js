import React, { useState,useRef,useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Link, Redirect,useHistory } from 'react-router-dom';
import App from './App'
import axios from 'axios'
import './PostNewRecipe.css'
import SearchBar from './SearchBar'
import Nav from './Nav'

const PostNewRecipe=(props)=> {
  const history = useHistory();
  const [cuisine,setCuisine] = useState("Italian")
  const [difficulty,setDifficulty] = useState("Easy")
  const [Image,setImage] = useState([])
  const [Title,setTitle] = useState("")
  const [Ingredients,setIngredients] = useState("")
  const [Instructions,setInstructions] = useState("")

  const handleChange = e => {
    if (e.target.files.length) {
        console.log(e.target.files);
        
    
     
           
            setImage(e.target.files);
              
           
            
        };
       
     
  };
  const handle = e =>{
    setCuisine(e.target.value)

  }


  const handleUpload = async e => {
    e.preventDefault();
    console.log(cuisine)
    const formData = new FormData()
    formData.append('author', props.user._id)
    formData.append('title',Title)
    for (const i of Object.keys(Image)) {
      formData.append('multiple_images', Image[i])
    }
    formData.append('posted',Date().toLocaleString())
    formData.append('cuisine',cuisine)
    formData.append('difficulty',difficulty)
    formData.append('ingredients',Ingredients)
    formData.append('instructions',Instructions)
    formData.append('likes',0)
    
    

    axios.post(`http://localhost:5000/newRecipe/`, formData, {
        }).then(res => {
            console.log(res);
            history.push("/Profile")
            
        })
        
        .catch((err) => {
          history.push("/")
         
          
      })
  };
  

    return (
      <div className="projectcss">
        <SearchBar />


        <div className="container">
            <h1>Post a New Recipe!</h1>
            
            <div className="wrapper">
            </div>
             <form >
             <fieldset>
               <legend>New Recipe:</legend>
               <label>
                 <p>Name of Recipe</p>
                 <input name="NameOfRecipe" id = "title" name = "title" onChange={(event)=>{
                   setTitle(event.target.value)
                 }}/>
               </label>
               <label>
                 <p>Ingredients(Seperated by commas)</p>
                 <input name="Ingredients" id= "ingredients" name= "ingredients" onChange={(event)=>{
                   setIngredients(event.target.value)
                 }}/>
               </label>
               <label>
                <p> Cuisine(Seperated by commas) </p>
               </label>
               <select id="cuisine" name="cuisine" onChange={e=>handle(e)}>
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
               <select name="difficulty"  onChange={(event)=>{
                   setDifficulty(event.target.value)
                 }}>
                 <optgroup>
                 <option value="Beginner">Easy</option>
                 <option value="Intermediate">Intermediate</option>
                 <option value="Difficult">Advanced</option>
                 </optgroup>
                 </select>
                 
                 
                 <label>
                   <p>Upload Recipe Images</p>
                 </label>
                 <form >
                   <div>
                     <label>Select multiple images:  </label>
                     <input type="file" name="multiple_images" multiple onChange={handleChange} />
                     </div>
                     
                  </form>
                  <label>
                 <p>Instructions</p>
                 <textarea class="instructions" cols="80" rows="35" id = "instructions" onChange={(event)=>{
                   setInstructions(event.target.value)
                 }}></textarea>
                </label>
                 </fieldset>
                <button type="post" onClick={handleUpload}>Post</button>
              
             </form>
        
        </div>
        </div>
    )
}

export default PostNewRecipe