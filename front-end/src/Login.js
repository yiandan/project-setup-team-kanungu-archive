import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Axios from "axios"
import { Redirect } from "react-router";


// Component for sign in form
// Does not expect any argument for props
// Example:
// <SignInForm />
const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    const [signIn, setSignIn] = useState(false)

    const [error, setError] = useState(false)

    // check if either of the fields is empty
    const emptyField = () => {
        return username === '' || password === ''
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(false)
        setErrorMessage('')
        Axios({url:"http://localhost:5000/auth/signin", method:"POST", data:{username:username, password:password}})
        .then((response) => {
          console.log(response)
            if(response.data.accessToken){
              localStorage.setItem('token',response.data.accessToken)
              setSignIn(true)

            }  
        
        })
        .catch((err) => {
            console.error("ERROR", err)
            setError(true)
              if (err.response.status === 404) {
                setErrorMessage("Invalid user. Please sign up.")
              } else if (err.response.status === 401) {
                setErrorMessage("Wrong password.")
              } 
              else {
                setErrorMessage(err.message)
              }
            
        })

    }

    if (!signIn) {
        return (
            <div className="LogIn">
                <div className="form">
                <Form className="inputs">
                    <Form.Group className={error ? 'text-muted' : 'hidden'}>
                        <Form.Text>{errorMessage}</Form.Text>
                    </Form.Group>
                    <Form.Group size="lg" className="username" controlId="username">
                    <Form.Label>Username: </Form.Label>
                        <Form.Control
                            size="md"
                            type="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" className="password" controlId="password">
                    <Form.Label>Password: </Form.Label>
                        <Form.Control
                            size="md"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        className="submitButton"
                        onClick={handleSubmit}
                        variant="info"
                        block
                        block size="lg"
                        disabled={emptyField()}
                    >
                        Log In

                    </Button>
                </Form>
                </div>
                {/* <div className="redirectSignIn">Don't have an account?</div> */}
                <div>
                    <a
                        // className="createAccountLink text-info"
                        href="/SignUp"
                    >
                        Don't have an account?
                    </a>
                </div>
            </div>
        )
    } else {
        return <Redirect to="/" />
    }
}

export default Login