import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from 'axios'
import "./SignUp.css";
import { Redirect } from "react-router";

const SignUp = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [signUp, setSignUp] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

//   const emptyField = () => {
//     return username === '' || password === '' || firstName === '' || lastName === '' || email === '' 
// }

  //events for later
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false)
    setErrorMessage('')

    axios({url:`http://localhost:5000/auth/signup`, //TODO: CHANGE LATER
        method:'POST',
        data:{
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password,
          email: email,
          roles: ["user"]
        }}).then(res=>{
            console.log(res);
            history.push("/")

          })
          .catch((err) => {
              console.error(err)
              setError(true)
              if (err.response.status === 400) {
                setErrorMessage("Username already taken.")
              } 
              else {
                setErrorMessage(err.message)
              }
            
              history.push("/SignUp")
          })
  };

  if (!signUp) {
//https://serverless-stack.com/chapters/create-a-login-page.html
    return (
      <div className="projectcss">
            <div className="SignUp">
                <div className="form">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className={error ? 'text-muted' : 'hidden'}>
                        <Form.Text>{errorMessage}</Form.Text>
                    </Form.Group>
                  <Form.Group size="lg" controlId="email">
                      <Form.Label>E-Mail: </Form.Label>
                      <Form.Control
                      type="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      />
                  </Form.Group>
                  <Form.Group size="lg" controlId="username">
                      <Form.Label>Username: </Form.Label>
                      <Form.Control
                      type="username"
                      value={username}
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                      />
                  </Form.Group>
                  <Form.Group size="lg" controlId="firstName">
                      <Form.Label>First Name: </Form.Label>
                      <Form.Control
                      type="firstName"
                      value={firstName}
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                      />
                  </Form.Group>
                  <Form.Group size="lg" controlId="lastName">
                      <Form.Label>Last Name: </Form.Label>
                      <Form.Control
                      type="lastName"
                      value={lastName}
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
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
                  <Button block size="lg" type="submit" disabled={!validateForm()}>
                      Sign Up
                  </Button>
                </Form>
                </div>
                <a href="SignUp">Already have an account?</a>
            </div>
            </div>
    )
  } else {
      return <Redirect to="/" />
  }
}


export default SignUp;