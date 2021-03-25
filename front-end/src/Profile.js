import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Profile.css'
import Nav from './Nav'

import SearchBar from './SearchBar'
import Search from './Search'
import FeedPost from './FeedPost'
import RecipePage from './RecipePage';



const Avatar = 'https://picsum.photos/200';
//import MyRecipes from './MyRecipes'


//const ProfilePhoto = ()



//var myNewP = document.createElement("p")
//myNewP.innerHTML = "This is a paragraph"

const Article = ( { number, content } ) => {
    return (
        <article>
            <h1>{number}</h1>
            <p>{content}</p>
        </article>
    )
}

/*
function Options(props) {
    return (
        <postContent>
            <p onClick={props.editProfile}>Edit Profile</p>
            <p onClick={props.changePassword}>Change Password</p>
        </postContent>
    )
}

const MyPost = ( { post } ) => {
    return (
        <postContent>
            <p>{post}</p>
        </postContent>
    )
}
*/

const Profile=()=> {
    return (
        <div className="container">
            <h1>Profile</h1>
            <SearchBar />

            <h5>Good evening, USERNAME!</h5>

            <section>
                <Article number="000" content="Posts"> </Article>
                <Article number="000" content="Followers"> </Article>
                <Article number="000" content="Following"> </Article>
                <img className = "profileImg" src={Avatar}></img>
            </section>

            <optionRow><button type="button">Edit Profile</button></optionRow>
            <optionRow><button type="button">Change Password</button></optionRow>
           
        
            <row>
                <FeedPost> <button type="button"><RecipePage/> </button> </FeedPost>
                <FeedPost> <RecipePage/> </FeedPost>
                <FeedPost> <RecipePage/> </FeedPost>
            </row>

            <row>
                <FeedPost> <RecipePage/> </FeedPost>
                <FeedPost> <RecipePage/> </FeedPost>
                <FeedPost> <RecipePage/> </FeedPost>
            </row>
                    
        </div>
    )
}



export default Profile