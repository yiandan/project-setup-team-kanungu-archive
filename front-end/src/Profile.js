import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import App from './App';
import './Profile.css';
import Nav from './Nav';
import { Container, Row, Col} from 'reactstrap';

import SearchBar from './SearchBar'
import FeedPost from './FeedPost'
import RecipePage from './RecipePage';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import Preview from './Preview'
import PostNewRecipe from './PostNewRecipe';


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

const Profile=(props)=> {
    var len = 0;
    console.log(props)
    const [posts,setPosts] = useState(null)
const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        axios({url:`http://localhost:5000/user/${props.user._id}/posts`,method:"GET"})
        .then((response) => {
            len = response.data.posts.length
            console.log(response)
            var i, j, resArray=[], chunk = 2;
for (i = 0, j = response.data.posts.length; i < j; i += chunk) {
  resArray.push(response.data.posts.slice(i, i + chunk));
}
console.log(resArray)
            setPosts(resArray)
            
           
            

            
            console.log(response.data)
        
        })
        .catch((err) => {
            console.error(err)
            
            
        })
    
    },[])
    useEffect(()=>{
        if(posts)
        
        setIsLoading(false)
    },[posts])
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
if(isLoading ===false){
    return (
        <div className="projectcss">
        <div className="container">
            <h1>Profile</h1>
            <SearchBar />

            <h5> Good evening, {props.user.username}</h5>

            <section>
                <Article number={len} content="Posts"> </Article>
                <Article number="000" content="Followers"> </Article>
                <Article number="000" content="Following"> </Article>
                <Link to="./EditProfile">
                    <input type="image" className = "profileImg" alt="Click to upload profile image" src={props.user.profileImage}></input>
                </Link>
            </section>
  
  

           
            <div className = "hi">
                {posts.map((row)=>(
               <div>
                   {row.map(col=>(<Preview recipe ={col}></Preview>))}

                </div>
                  ))}
                  </div>
         
         </div>

           
                    
        </div>
        
    )
}
else{
    return(<div>Loading...</div>)
}
}

export default Profile