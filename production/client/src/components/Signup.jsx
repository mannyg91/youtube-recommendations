import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

export const Login = () => {

    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    async function registerUser(event) {
        console.log("user registering")
        event.preventDefault() //prevents refresh to localhost
        //something like this
        const response = await fetch(`http://localhost:5000/api/user/signup`, {
            //directions
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //sends as JSON
            },
            //payload
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        })

        const data = await response.json()
        console.log(data)
    }

    return (
            <div id="signupDiv">
                <h1>Welcome to WatchWise!</h1>
                <h2>We're glad to have you.</h2>
                <Box
                    id="signup_form"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={registerUser}
                >

                    <TextField
                        required
                        className="signupText"
                        id="newusername"
                        label="Username"
                        helperText="Enter a username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        className="signupText"
                        id="email"
                        label="Email"
                        helperText="Enter your email address"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    /><br/>
                    <TextField
                        required
                        className="signupText"
                        id="newpassword"
                        label="Password"
                        helperText="Enter Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <TextField
                        required
                        className="signupText"
                        id="verifypassword"
                        label="Verify Password"
                        helperText="Confirm Password"
                        type="password"
                    /> */}
                    <Button
                        type="submit"
                        id="loginbutton"
                        variant="outlined"
                        onClick={()=>{
                            console.log("Button clicked, congratulations.");
                        }}>
                            Sign me up!
                    </Button>
                
                </Box>

                <p>
                    Psst... Already a member? Log in <Link to="../Login">here!</Link>
                </p>
            </div>
    )
}

export default Login;