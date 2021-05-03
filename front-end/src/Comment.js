import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import './Comment.css'
const Comment = (props) =>{
    
    
    useEffect(()=>{
        
        console.log(props.data)
        


    },[]);
    return(
        <div className = "item">
           
               <h4></h4>
          
           {props.data["text"]}
        </div>
    )
}
export default Comment