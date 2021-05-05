import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import './Comment.css'
const Comment = (props) =>{
    let by= props.data.by;
    let text = props.data.text
    const [loading,setLoading] =useState(true)
   console.log(props)
    useEffect(()=>{
        
        
        if(props.data){
            setLoading(false)
        }


    },);
    if(by &&text)return(
        <div className = "item">
           
               <h4>{by.username}</h4>
          
           {text}
        </div>
    )
    else{
        return(
            <div></div>
        )
    }
}
export default Comment