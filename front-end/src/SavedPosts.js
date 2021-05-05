import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Home.css'
import Nav from './Nav'
import Search from './Search'
import Reach from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignedOutLogin from './SignedOutLogin'
import MyRecipes from './MyRecipes'
import MyFeed from './MyFeed'

import About from './About'
import SignOut from './SignOut'
import SearchBar from './SearchBar'
import FeedPost from './FeedPost'
import RecipePage from './RecipePage';
import Login from './Login';
import axios from 'axios'
import Preview from './Preview'


const SavedPosts=(props)=> {
    const [RecipeList,setList] = useState(null)
    const [isLoading,setLoading] = useState(true)
    useEffect(()=>{
        //get all recipes 
        axios({url:`http://localhost:5000/user/${props.user._id}/saved`,method:'GET'})
            .then(res =>{
                const recipes = res.data.likedPosts;
                
                setList(recipes)
            })
            .catch((err) => {
                console.error(err)
                
            })

    },[])
    useEffect(()=>{
        if(RecipeList){
            setLoading(false)
            console.log(RecipeList)
        }
    },[RecipeList])
    
    if(isLoading ===false){
        return  (
        <div className="projectcss">
        <div className="container">


                <h1 className='home_header'>Recipe Central</h1>

            <SearchBar />
            <h2>My Feed</h2>
        
            {RecipeList.map((recipe)=>(
                
                <Preview recipe = {recipe}></Preview>
            

            ))}
          
        </div>
        </div>
    )
            }
            else{
                return (
                    <div>loading...</div>
                )
            }
}


export default SavedPosts