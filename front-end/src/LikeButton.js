import { useState } from 'react';
import './LikeButton.css'
import axios from 'axios'
import { Error } from 'mongoose';
import React, { useEffect } from 'react'
const LikeButton= (props)=> {
const data = props.data;
const [count,setCount] = useState(data.curr)
const [liked,setLiked] = useState(false)

//here you tell useEffect what state to watch if you want to watch the changing of a  particular state and here we care about someState
const handleLike = e => { 
 
    //Post was unliked, decrement count
    if(liked == true ){
        axios({url:`http://localhost:5000/post/${data.recipe}/like`,data:{likes:count,met:"del",_id:data.user},method:"PUT"})
    .catch((err)=>{
        console.error(err)
    })
        setLiked(false)
        setCount(count-1)
       
        
    }
    else{
        axios({url:`http://localhost:5000/post/${data.recipe}/like`,data:{likes:count,met:"add",_id:data.user},method:"PUT"})
    .catch((err)=>{
        console.error(err)
    })
        setLiked(true)
        setCount(count+1)
        
        
    }
    
    
  
   
  };


const colour = liked ? "red" : "grey"
return(
    <div>
    
    <button className = 'but' onClick={handleLike} style = {{color: colour}}>{count} saves</button>
    </div>
    )

} 

export default LikeButton