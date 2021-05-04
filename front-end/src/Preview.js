import RecipePage from "./RecipePage"
import { withRouter } from 'react-router-dom'
import './Preview.css'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import './App.css';
import LikeButton from './LikeButton'
const Preview = (props)=>{
    console.log(props)
   const date = new Date(props.recipe.posted)
   const fdate = date.toDateString();
   console.log(props.recipe)
    return(
            <div className = "square">

                <img className = "avi" src={props.recipe.author.profileImage}alt="Avatar"></img>
                <div className = "name">{props.recipe.author.username}</div>

                <div  className = "box_center">
                    <div className = "date">{fdate}</div>
                    <a className = "title" href={'/recipe/'+ props.recipe._id}>{props.recipe.title}</a>
                </div>
                
                <div class="rect-img-container">
                    <img className = "pic" src={props.recipe.images[0]} alt = "Food"></img>
                </div>
                
                <div className = "like">  <LikeButton data ={{recipe:props.recipe._id,curr:props.recipe.likes,user:props.recipe.author._id}}></LikeButton></div>
              
            </div>
    )
}
export default Preview