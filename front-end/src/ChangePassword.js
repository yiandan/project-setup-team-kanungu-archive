import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './ChangePassword.css'
import SearchBar from './SearchBar'


const ChangePassword=()=> {
    return (
        <div className="container">
            <h1>Edit Profile</h1>
            <SearchBar /> 
        
        <div class="grayRec">
           <p>Current Password</p>
           <p>New Password</p>
           <p>New Password Again</p>
       </div>

       <h2>save</h2>

        </div>
    )

}

export default ChangePassword