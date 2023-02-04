import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

export const Login = () => {

    //what the user enters
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')



    //sends login data
    async function loginUser(event) {
        event.preventDefault() //prevents refresh to localhost

        console.log("login user function in login.jsx")
        const response = await fetch(`http://localhost:5000/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //payload
            body: JSON.stringify({
               email,
               password,
            }),
        })
        const data = await response.json()

        //confirms user exists
		if (data.user) {
            console.log(data.user)
			localStorage.setItem('token', data.user)
			alert('You have been logged in')
            window.location.href = '/'
		} else {
			alert('Please check your credentials')
		}
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
                    onSubmit={loginUser} //login called here
                >
           
                    <TextField
                        required
                        label="Email"
                        helperText="Please enter your email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    /><br/>
                    <TextField
                        required
                        label="Password"
                        helperText="Please enter your password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
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