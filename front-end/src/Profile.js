import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App'
import './Profile.css'
import Nav from './Nav'

import SearchBar from './SearchBar'
import Search from './Search'
//import MyRecipes from './MyRecipes'


//const ProfilePhoto = ()

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
*/
const MyPost = ( { post } ) => {
    return (
        <postContent>
            <p>{post}</p>
        </postContent>
    )
}


const Profile=()=> {
    return (
        <div className="container">
            <h1>Profile</h1>
            <SearchBar />

            <h5>How are you doing today, USERNAME?</h5>

            <section>
                <Article number="000" content="Posts"> </Article>
                <Article number="000" content="Followers"> </Article>
                <Article number="000" content="Following"> </Article>
            </section>

            <row> 
                <moreOptions>Edit Profile</moreOptions>
                <moreOptions>Change Password</moreOptions>
            </row>
           


            

        
            <row>
                <MyPost post="My Post"></MyPost>
                <MyPost post="My Post"></MyPost>
                <MyPost post="My Post"></MyPost>
            </row>

            <row>
                <MyPost post="My Post"></MyPost>
                <MyPost post="My Post"></MyPost>
                <MyPost post="My Post"></MyPost>
            </row>
         


            
        </div>
    )
}



export default Profile