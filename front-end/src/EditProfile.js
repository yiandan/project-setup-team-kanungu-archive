import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './EditProfile.css'
import SearchBar from './SearchBar'



const EditProfile=(props)=> {
    const id = props.user._id
    console.log(id)
    const [image, setImage] = useState("");
    const [preview,setPreview] = useState(null)
  const handleChange = e => {
    if (e.target.files.length) {
        console.log(e.target.files[0]);
     
 
           
            setImage(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]))
           
            
        };
      
     
  };

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('profileImg', image)
    

    axios.post(`http://localhost:5000/user-profile/${id}`, formData, {
        }).then(res => {
            console.log(res)
            props.setUser()
        })
  };

  return (
    <div>
      <label htmlFor="upload-button">
        {preview ? (
          <img src={preview} alt="dummy" width="300" height="300" />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
            <h5 className="text-center">Change profile image!</h5>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <button className = "bu" onClick={handleUpload}>Upload</button>
    </div>
  );
}


export default EditProfile