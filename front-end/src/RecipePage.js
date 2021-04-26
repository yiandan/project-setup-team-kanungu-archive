
import React, { useEffect } from 'react'
import { useState } from 'react';
import './RecipePage.css'
import ImageSlider from './TestRecipe'
import CommentBox from './commentBox'
import LikeButton from './LikeButton'

const RecipePage = (props)=> {
   

   const [Author, setA] = useState({firstName:'',lastName:'',profileImage:'',username:''})
 
    const recipe = props.recipe;
    

    

    useEffect(()=>{

        console.log(recipe.likes)
        const user = {firstName:recipe.author.firstName,lastName:recipe.author.lastName,profileImage:recipe.author.profileImage,username:recipe.author.username}
    setA(user)


    },[]);
    
    return (
        
        <div className= "container">
          
            
            <div className = "recipe">
                <img className = "avatar" src={Author.profileImage} alt="Avatars"></img>
                <h1>{recipe.title}</h1>
                <div className = "authorName">
                    <h1>{Author.firstName + " " + Author.lastName}</h1>
                    
                </div>
                <div className = 'car'><ImageSlider images={recipe.images}/></div>
                <div className = 'ing'>
                <i>ingredients<br>
                </br>{recipe.ingredients[0]}<br>
                </br>{recipe.ingredients[1]}<br>
                </br>{recipe.ingredients[2]}
                </i>
                </div>
                <div className = 'Text'>
                <i>{recipe.instructions[0]}<br>
                </br> adipiscing elit. Fusce vitae sapien malesuada<br>
                </br>, fermentum orci id, commodo nulla. Quisque erat turpis<br>
                </br>, mollis id sem quis, posuere dictum orci.<br>
                </br> Nullam semper nunc nec dui porta iaculis.<br>
                </br> {recipe.instructions[1]}<br>
                </br> consectetur erat. Vivamus ultrices odio nunc,<br>
                </br> a luctus orci bibendum non. Interdum et<br>
                </br> malesuada fames ac ante ipsum primis in faucibus.<br>
                </br> Fusce gravida tincidunt magna a facilisis.<br>
                </br> Donec dignissim vulputate efficitur.<br>
                </br> {recipe.instructions[2]}<br
                ></br> Nulla in vehicula lacus. Donec bibendum diam a purus aliquam,<br>
                </br> vitae iaculis orci viverra. Sed maximus non dolor<br>
                </br> eu consectetur. Curabitur id urna accumsan, ornare ante quis,<br>
                </br> mattis massa. Cras ex eros, varius ut lacinia sit amet,<br>
                </br> accumsan mollis sem. Morbi id nulla rhoncus,<br>
                </br> dictum dolor eu, tempus turpis. Praesent bibendum nibh velit,<br>
                </br> vel laoreet quam rutrum quis.
                
</i>
</div>

        <div className = 'comment'><CommentBox data = {{"author":Author,"recipe":recipe._id,"aid":recipe.author._id}}></CommentBox></div>

    
            </div>
        <LikeButton data = {{"author":Author,"recipe":recipe._id,"aid":recipe.author._id,curr:recipe.likes}}></LikeButton>
        </div>
    )
    
}

    
export default RecipePage