import React, { useState } from "react";


import './EditProfile.css'
import SearchBar from './SearchBar'



const EditProfile=(props)=> {
    return (
        <div className="projectcss">
        <div className="container">
            <h1>Edit Profile</h1>
            <SearchBar /> 

           
            <div className="rec">
                <div className="inputCol"><labeling>Username</labeling><input type="text" className="name" placeholder="asd123"/>*</div>
                <div className="inputCol"><labeling>First Name</labeling><input type="text" className="name" placeholder="John"/>*</div>
                <div className="inputCol"><labeling>Last Name</labeling><input type="text" className="name" placeholder="Smith"/>*</div>
                <div className="inputCol">
                    <labeling>Gender</labeling>
                    <select id="cuisine">
                        <option value="" disabled selected>Choose your gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </select>
                </div>
                <div className="inputCol"><labeling>Email Address</labeling><input type="text" className="name" placeholder="abc@gmail.com"/>*</div>
                <div className="inputCol"><labeling>Occupation</labeling><input type="text" name="name" placeholder="Student"/></div>
                <div className="inputCol">
                    <labeling>Favorite Cuisine</labeling>
                    <select id="cuisine">
                        <option value="" disabled selected>Choose your favorite cuisine</option>
                        <option value="chinese">Chinese</option>
                        <option value="thai">Thai</option>
                        <option value="japanese">Japanese</option>
                        <option value="french">French</option>
                        <option value="american">American</option>
                        <option value="italian">Italian</option>
                        <option value="germany">Germany</option>
                        <option value="korean">Korean</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button className="saveButton">Save</button>
            </div>
        </div>
        </div>
    )
}


export default EditProfile