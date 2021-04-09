import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import './EditProfile.css'
import SearchBar from './SearchBar'



const EditProfile=(props)=> {
    const [username, setUsername] = useState("");
    const [firstname, setfn] = useState("");
    const [lastname, setln] = useState("");
    const [email, setEmail] = useState("");
    const [aboutme, setAboutMe] = useState("");

    

    return (
        <div className="container">
            <h1>Edit Profile</h1>
            <SearchBar /> 

           
            <div className="grayRec">
            <div className="inputCol">
                Username  
                <input type="text" id="aligned-username" placeholder="Username" />
                <span className="pure-form-message-inline">*</span>
            </div>
            <div className="colume">
            Username  
            <input type="text" id="aligned-username" placeholder="Username" />
            <span class="pure-form-message-inline">*</span>
            </div>
            </div>


    
     
        


            <div className="grayRec">
                <div className="colume"><h1>User Name</h1><h1>User Name</h1><h1>User Name</h1><h1>User Name</h1></div>
                <div className="inputCol">
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="name" placeholder="name" />
                    <input type="text" name="name" placeholder="name" />
                </div>
            </div>
        </div>



      
      


    )
}


export default EditProfile