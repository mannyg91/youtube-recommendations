import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Navbar from './Navbar'

export const Login = () => {
    return (
        <div id="wrapper">
            <div id="loginDiv">
                <h1>Welcome back!</h1>
                <h2>Please login below.</h2>
                <Box
                    id="login_form"
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
                            className="loginText"
                            id="username"
                            label="Username"
                            helperText="Please enter your username"
                            type="text"
                        /><br/>
                        <TextField
                            required
                            className="loginText"
                            id="password"
                            label="Password"
                            helperText="Please enter your password"
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
                        Submit
                    </Button>
                <p>
                    Psst... don't have an account yet?<br/>
                    Sign up here!
                </p>
            </div>
        </div>
    )
}

export default Login;