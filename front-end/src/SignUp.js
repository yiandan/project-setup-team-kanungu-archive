import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";

// const Login=()=> {
//     return (
//         <div className="container">
//             <h1>Login</h1>
            
//         </div>
//     )
// }

// export default Login

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
      <div className="projectcss">
            <div className="SignUp">
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
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Make an Account
                </Button>
                </Form>
                </div>
                

                <p>{email}</p>
                <p>{password}</p>
            </div>
            </div>
    )
  }

export default SignUp