import RecipePage from "./RecipePage"
import { withRouter } from 'react-router-dom'
import './SmallPreview.css'

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
            <div className = "s-square">

                <img className = "s-avi" src={props.recipe.author.profileImage}alt="Avatar"></img>

                <div className = "s-name">{props.recipe.author.username}</div>
                       
                <div className = "s-date">{fdate}</div>
                <a className = "s-title" href={'/recipe/'+ props.recipe._id}>{props.recipe.title}</a>
                <img className = "s-pic" src={props.recipe.images[0]} alt = "Food"></img>
                <div className = "s-like">  <LikeButton data ={{recipe:props.recipe._id,curr:props.recipe.likes,user:props.recipe.author._id}}></LikeButton></div>
              
            </div>
    )
}
export default Preview