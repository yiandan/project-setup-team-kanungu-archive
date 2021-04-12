import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const UploadProfileImg = (props) => {
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    return (
            <div className="login">
                <div className="form">
                <Form onSubmit={handleSubmit}>
                <input type="file" id="profile_img" accept="image/png, image/jpeg"/>
                </Form>
                </div>

            </div>
    )
  }

export default UploadProfileImg
