import React from "react";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
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
        <div className='account-container'>
            <Typography id="logo" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">
                WatchWise
                </Link>
            </Typography>
                <div id="accountDiv">
                    <h1>Welcome back!</h1>
                    <h2>Please login below</h2>
                    <Box
                        className="account-fields"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={loginUser} //login called here
                    >
            
                        <TextField
                            sx={{ display: 'block' }}
                            required
                            label="Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            sx={{ display: 'block' }}
                            required
                            label="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            sx={{ 
                                display: 'block',
                                background: '#F0F8FF',
                                m: '25px 0px 30px',
                             }}
                            type="submit"
                            variant="outlined"
                            onClick={()=>{
                                console.log("Button clicked, congratulations.");
                            }}>
                            Sign In
                        </Button>
        
                    </Box>

                    <p style={{lineHeight: 1.5, textAlign: 'center'}}>
                        Psst... don't have an account yet?<br/>
                        Sign up&nbsp;
                        <span style={{fontWeight: 500, textDecoration: 'underline'}}>
                            <Link to="../signup">here!</Link>
                        </span>
                    </p>
                </div>
            </div>
    )
}

export default Login;