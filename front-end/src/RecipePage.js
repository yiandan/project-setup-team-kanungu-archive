import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './RecipePage.css'
import ImageSlider from './TestRecipe'
import CommentBox from './commentBox'
import LikeButton from './LikeButton'

const RecipePage=()=> {
    const seed = Math.floor((Math.random() * 10) + 1);
    const[Food,setFood] = useState([])
    const [authorName,setAuthor] = useState("")
    const [AuthorImage,setAImage] = useState("")
    const [Recipe,setRecipe] =  useState("")
    const [text,setText] = useState("")
    const [userName,setUser] = useState("")
    

    async function GetData(){
        setFood(['https://picsum.photos/seed/'+seed*2+'/400/300','https://picsum.photos/seed/'+seed*3+'/500/600','https://picsum.photos/seed/'+seed*4+'/400/300'])
        setAImage('https://picsum.photos/seed/'+seed+'/200/300')
        
        //const response = await fetch('https://my.api.mockaroo.com/users.json?key=eff75f40')
        //needs to be results from out API
        //can send data using props (props.data)
        const response = await fetch('http://localhost:5000/recipes/posts')
        const n = Math.floor(Math.random() * 2) + 1
        
        let data =  await response.json();
        
        
     setAuthor(data.data[n]["author"]);
     setRecipe(data.data[n]["name"]);
     setText(data.data[n]["ingredients"]);
    }
    useEffect(()=>{
        GetData()

    },[]);
    
    return (
        <div className= "container">
          
            
            <div className = "recipe">
                <img className = "avatar" src={AuthorImage} alt="Avatars"></img>
                <h1>{Recipe}</h1>
                <div className = "authorName">
                    <h1>{authorName}</h1>
                    
                </div>
                <div className = 'car'><ImageSlider images={Food}/></div>
                <div className = 'ing'>
                <i>ingredients<br>
                </br>{
                text}
                </i>
                </div>
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

        <div className = 'comment'><CommentBox></CommentBox></div>

    
            </div>
        <LikeButton></LikeButton>
        </div>
    )
    
}

    
export default RecipePage