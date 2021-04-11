import React from 'react'

import './ChangePassword.css'
import SearchBar from './SearchBar'


const ChangePassword=()=> {
    return (
        <div className="container">
            <h1>Change Password</h1>
            <SearchBar /> 
        
            <div className="rec">
                <div className="inputCol"><labeling>Current Password</labeling><input type="text" className="name" placeholder="abc123"/>*</div>
                <div className="inputCol"><labeling>New Password</labeling><input type="text" className="name" placeholder="cba456"/>*</div>
                <div className="inputCol"><labeling>New Password Again</labeling><input type="text" className="name" placeholder="cba456"/>*</div>
                <button className="saveButton">Save</button>
            </div>
        </div>
    )

}

export default ChangePassword