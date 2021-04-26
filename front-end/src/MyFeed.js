import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './MyFeed.css'
import Nav from './Nav'
import FeedPost from './FeedPost'
import RecipePage from './RecipePage'
import SearchBar from './SearchBar'
const obj = 
{
    "images": [
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/id/207/200/300",
        "https://picsum.photos/id/203/200/300"
    ],
    "ingredients": [
        "rice",
        "beans",
        "sauce",
        ""
    ],
    "instructions": [
        "do something",
        "do something else",
        "finally"
    ],
    "comments": [
        "607efbd3ba150d52c9a5b127"
    ],
    "slug": "empanadas",
    "_id": "607cd8046dced78cc134dffe",
    "author": {
        "posts": [
            "607cd8046dced78cc134dffe",
            "607d7e1832bad543a85f6655",
            "607d804597a960443a2972a0"
        ],
        "followers": [
            0
        ],
        "following": [
            90
        ],
        "likedPosts": [
            "607d7af66349bb11aed3d108"
        ],
        "slug": "chef99",
        "_id": "607c9b35c463426a0e56e31b",
        "username": "chef99",
        "email": "somebody@gmail.com",
        "firstName": "Bob",
        "lastName": "Baker",
        "bio": "World famous chef",
        "profileImage": "https://picsum.photos/id/222/200/300",
        "__v": 2
    },
    "title": "Empanadas",
    "posted": "2020-08-20T04:00:00.000Z",
    "cuisine": "Mexican",
    "difficulty": "advanced",
    "likes": 10,
    "__v": 1
}
const MyFeed=()=> {
    return (
        <div className="container">
            <h1>My Feed</h1>
            <SearchBar />
            <FeedPost> 
                <RecipePage recipe = {obj}/>
            </FeedPost>
            <FeedPost> 
                <RecipePage recipe = {obj} />
            </FeedPost>
            <FeedPost> 
                <RecipePage recipe = {obj} />
            </FeedPost>
            <FeedPost> 
                <RecipePage recipe = {obj}/>
            </FeedPost>
         
        </div>
    )
}

export default MyFeed