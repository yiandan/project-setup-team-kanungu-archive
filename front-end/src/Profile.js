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
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';

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

const styles = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00"
}

const Profile=()=> {
    return (
        <div className="container">
            <h1>Profile</h1>
            <SearchBar />

            <h5> Good evening, USERNAME!</h5>

            <section>
                <Article number="000" content="Posts"> </Article>
                <Article number="000" content="Followers"> </Article>
                <Article number="000" content="Following"> </Article>
                <img className = "profileImg" src={Avatar}></img>
            </section>

            <optionRow>
                <Link to="./EditProfile">
                    <button className="button">Edit Profile</button>
                </Link>
            </optionRow>

            <optionRow>
                <Link to="./ChangePassword">
                    <button className="button">Change Password</button>
                </Link>
            </optionRow>
           
        
            <row>
                <FeedPost> <button className="button"><RecipePage/> </button> </FeedPost>
                <FeedPost> <RecipePage/> </FeedPost>
                <FeedPost> <RecipePage/> </FeedPost>
            </row>

            <row>
                <FeedPost> <RecipePage/> </FeedPost>
                <FeedPost> <RecipePage/> </FeedPost>
                <FeedPost> <RecipePage/> </FeedPost>
            </row>

            <h4>Clike here to view all My Posts</h4>
                    
        </div>
    )
}



export default Profile