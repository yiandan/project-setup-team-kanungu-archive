import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App';
import './Profile.css';
import Nav from './Nav';

import SearchBar from './SearchBar'
import FeedPost from './FeedPost'
import RecipePage from './RecipePage';
import { Form } from 'react-bootstrap';


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
    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };

      const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);
    
        await fetch("YOUR_URL", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: formData
        });
      };

    return (
        <div className="container">
            <h1>Profile</h1>
            <SearchBar />

            <h5> Good evening, USERNAME!</h5>

            <section>
                <Article number="000" content="Posts"> </Article>
                <Article number="000" content="Followers"> </Article>
                <Article number="000" content="Following"> </Article>
                <Link to="./UploadProfileImg">
                    <input type="image" className = "profileImg" alt="Click to upload profile image" src={Avatar}></input>
                </Link>
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
            <Link to="./MyFeed">
                <h4>Clike here to view all My Feed</h4>
            </Link>
                    
        </div>
    )
}

export default Profile