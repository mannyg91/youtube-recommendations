import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

export const Login = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function loginUser(event) {
        event.preventDefault() //prevents refresh to localhost

        const response = await fetch(`http://localhost:5000/api/user/login`, {
            //directions
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', //sends as JSON
            },
            //payload
            body: JSON.stringify({
                // username,
                // email,
                // password,
            }),
        })
    }

    return (
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
           
                    <TextField
                        required
                        id="username"
                        label="Username"
                        helperText="Please enter your username"
                        type="text"
                    /><br/>
                    <TextField
                        required
                        id="password"
                        label="Password"
                        helperText="Please enter your password"
                        type="password"
                    />
                    <Button
                        type="submit"
                        id="loginbutton"
                        variant="outlined"
                        onClick={()=>{
                            console.log("Button clicked, congratulations.");
                        }}>
                         Submit
                    </Button>
     
                </Box>

                <p>
                    Psst... don't have an account yet?<br/>
                    Sign up <Link to="../Signup">here!</Link>
                </p>
            </div>
    )
}

export default Login;