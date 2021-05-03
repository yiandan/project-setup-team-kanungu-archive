import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import Comment from './Comment'
import CommentBox from './commentBox'
import './CommentList.css'
const CommentList = (props) =>{
    const recipe = props.data.recipe;
    const Author = props.data.author;
    console.log(Author)
    function CommentSubmit(data){
        setList([...CList,data])
    }
    const [CList, setList] = useState(recipe.comments)
    console.log(CList)
   
    var l;
    useEffect(()=>{
       
        
    });
    
    return(
        <div>
 <div className = "c">COMMENTS</div>
        <div className = "scroller">
           



           
    {CList.map((comment) => (
        <Comment data = {comment}></Comment>
    ))}
        
       
         

        </div>
        <CommentBox c data = {{"author":Author,"id":recipe._id}} className="combox" OnChildClick={CommentSubmit}></CommentBox>
        </div>
    )
}
export default CommentList