import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Navbar from './Navbar';
import Toggle from './Toggle';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div id="wrapper">
            <Navbar />
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
                >
                    <div>
                        <TextField
                            required
                            className="signupText"
                            id="newusername"
                            label="Username"
                            helperText="Enter a username"
                            type="text"
                        />
                        <TextField
                            required
                            className="signupText"
                            id="email"
                            label="Email"
                            helperText="Enter your email address"
                            type="email"
                        /><br/>
                        <TextField
                            required
                            className="signupText"
                            id="newpassword"
                            label="Password"
                            helperText="Enter a password"
                            type="password"
                        />
                        <TextField
                            required
                            className="signupText"
                            id="verifypassword"
                            label="Verify Password"
                            helperText="Enter the same password"
                            type="password"
                        />
                    </div>
                </Box>
                <Button
                    id="loginbutton"
                    variant="outlined"
                    onClick={()=>{
                        console.log("Button clicked, congratulations.");
                    }}>
                        Sign me up!
                    </Button>
                <p>
                    Psst... Already a member? Log in <Link to="../Login">here!</Link>
                </p>
            </div>
        </div>
    )
}

export default Login;