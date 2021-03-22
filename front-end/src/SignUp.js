
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import App from './App'
import './SignUp.css'
import Nav from './Nav'
//copied from Login Screen
const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    //events for later
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
//https://serverless-stack.com/chapters/create-a-login-page.html
    return (
            <div className="login">
                <div className="form">
                <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="SU" type="submit" disabled={!validateForm()}>
                    Sign up!
                </Button>
                </Form>
                </div>
                

                <p>{email}</p>
                <p>{password}</p>
            </div>
            
    )
  }

export default SignUp