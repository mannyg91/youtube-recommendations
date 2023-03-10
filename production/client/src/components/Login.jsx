import React from "react";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { LoginContext } from '../hooks/LoginContext';
import Dialog from '@mui/material/Dialog';



export const Login = (props) => {

    //what the user enters
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [ message, setMessage ] = React.useState('')


    const { handleLogin, getUsername } = React.useContext(LoginContext);

    //sends login data
    async function loginUser(event) {

        event.preventDefault() 
    
        const response = await fetch(`${process.env.REACT_APP_DATABASE_API_URL}/user/login`, {
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
            console.log(data.user._id)
			localStorage.setItem('token', data.user)
            getUsername()
            handleLogin()
            setMessage('')
            // navigate('/');
            props.handleLoginClose()
		} else {
            console.log(data)
			setMessage('Please check your login details')
		}
	}



    return (

        <Dialog open={props.loginOpen}  onClose={props.handleLoginClose}>
            <div className='account-container'>
                    <div id="accountDiv">
                        <h1 style={{marginBottom: '10px'}}>Welcome back!</h1>
                        <h3 style={{marginBottom: '25px', color: '#11cde5'}}>Please login below</h3>
                        <Box
                            className="account-fields"
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1 },
                                '& .Mui-focused': { color: '#f5f5f5' },
                                '& .Mui-active': { color: '#f5f5f5' },
                                '& .Mui-filled': { color: '#f5f5f5' },
                            }}
                            noValidate
                            autoComplete="off"
                            onSubmit={loginUser} //login called here
                        >
                
                            <TextField
                                className="account-textfield"
                                required
                                label="Email"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                className="account-textfield"
                                required
                                label="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />


                    <p style={{textAlign: 'center', color: '#aaaaaa', fontSize: '14px', margin: '10px'}}>
                            <span style={{color: '#11cde5', textDecoration: 'underline'}} onClick={props.handleForgotPasswordOpen}>Forgot Password?</span>
                        </p>

                            <Button
                                sx={{ 
                                    display: 'block',
                                    background: '#F0F8FF',
                                    m: '25px 0px 30px',
                                    width: '130px'
                                }}
                                id="submit-btn"
                                type="submit"
                                variant="outlined">
                                Sign In
                            </Button>
            
                        </Box>

                        <p style={{lineHeight: 1.5, textAlign: 'center', color: '#cfcfcf'}}>
                            Psst... don't have an account yet?<br/>
                            Sign up&nbsp;
                            <span style={{color: '#11cde5', textDecoration: 'underline'}} onClick={props.handleSignupOpen}>here!</span><br />
                            <span style={{color: '#d74274'}}>{message}</span>
                        </p>
                    </div>
                </div>
            </Dialog>




    )
}

export default Login;