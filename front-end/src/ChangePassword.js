import React, { useState } from "react";

import './ChangePassword.css'
import SearchBar from './SearchBar'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ChangePassword=(props)=> {
    const [currentPW, setCurrentPW] = useState("");
    const [newPW, setNewPW] = useState("");

    function validateForm() {
        return currentPW.length > 0 && newPW.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="projectcss">
        <div className="container">
            <h1>Profile</h1>
            <SearchBar />

        <div className="changePW">
                <div className="changePWForm">
                <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="currentPW">
                    <Form.Label>Current Password: </Form.Label>
                    <Form.Control
                    autoFocus
                    type="currentPW"
                    value={currentPW}
                    placeholder="Enter Current Passowrd"
                    onChange={(e) => setCurrentPW(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="newPW">
                    <Form.Label>New Password: </Form.Label>
                    <Form.Control
                    type="newPW"
                    value={newPW}
                    placeholder="Enter New Password"
                    onChange={(e) => setNewPW(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="newPW">
                    <Form.Label>New Password: </Form.Label>
                    <Form.Control
                    type="newPW"
                    value={newPW}
                    placeholder="Enter New Password Again"
                    onChange={(e) => setNewPW(e.target.value)}
                    />
                </Form.Group>
                <br></br>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Save
                </Button>
                </Form>
                </div>
    
                <p>{currentPW}</p>
                <p>{newPW}</p>
            </div>
            </div>
            </div>
    )

}

export default ChangePassword