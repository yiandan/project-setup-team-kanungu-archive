import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './RecipePage.css'
import ImageSlider from './TestRecipe'
const Comment = require('./comment.png')
const Avatar = 'https://picsum.photos/200/300';
const food1 = 'https://picsum.photos/300/400';
const food2 = 'https://picsum.photos/500/600';
const food3 = 'https://picsum.photos/600/700';
let rec = ''
let name = ''

const RecipePage=()=> {
    
    //needs to be triggered
    async function GetData(){
    
        //const response = await fetch('https://my.api.mockaroo.com/useres.json?key=81cab390')
        const response = await fetch('http://localhost:5000/recipes/list')
       
        //need to use states
        const data =  await response.json();
        
        name = data
        rec =data["Recipe"]
    }
    GetData()
    return (
        <div className= "container">
            <h1>Recipe Page</h1>
       
            <div className = "recipe">
                <img className = "avatar" src={Avatar} alt="Avatars"></img>
                
                <div className = "authorName">
                    <h1>Hello</h1>
                   
                </div>
                <div className = 'car'><ImageSlider images={[food1,food2,food3]}/></div>
                <div className = 'Text'>
                <i>Lorem ipsum dolor sit amet, consectetur<br>
                </br> adipiscing elit. Fusce vitae sapien malesuada<br>
                </br>, fermentum orci id, commodo nulla. Quisque erat turpis<br>
                </br>, mollis id sem quis, posuere dictum orci.<br>
                </br> Nullam semper nunc nec dui porta iaculis.<br>
                </br> Maecenas quis placerat ipsum, eget<br>
                </br> consectetur erat. Vivamus ultrices odio nunc,<br>
                </br> a luctus orci bibendum non. Interdum et<br>
                </br> malesuada fames ac ante ipsum primis in faucibus.<br>
                </br> Fusce gravida tincidunt magna a facilisis.<br>
                </br> Donec dignissim vulputate efficitur.<br>
                </br> Nulla tristique bibendum ipsum sed bibendum.<br
                ></br> Nulla in vehicula lacus. Donec bibendum diam a purus aliquam,<br>
                </br> vitae iaculis orci viverra. Sed maximus non dolor<br>
                </br> eu consectetur. Curabitur id urna accumsan, ornare ante quis,<br>
                </br> mattis massa. Cras ex eros, varius ut lacinia sit amet,<br>
                </br> accumsan mollis sem. Morbi id nulla rhoncus,<br>
                </br> dictum dolor eu, tempus turpis. Praesent bibendum nibh velit,<br>
                </br> vel laoreet quam rutrum quis.
                
</i>
</div>
<form className ="comment">
      <span className="formtext"></span>
    	  <input 
          type="text" 
          placeholder="Enter a Comment" 
          required 
        />
        <button>LeaveComment!</button>
    	</form>
            </div>
        <button className = "like">LIKE</button>
        </div>
    )
    
}

    
export default RecipePage
