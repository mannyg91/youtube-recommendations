import React from "react";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import { LoginContext } from '../hooks/LoginContext';
import Snackbar from '@mui/material/Snackbar';

export const Signup = (props) => {

    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState("");

    const { handleLogin, getUsername } = React.useContext(LoginContext);
    const [ message, setMessage ] = React.useState('')

    const emailRegex = /^\S+@\S+\.\S+$/


    function handleSnackbarClose() {
        setSnackbarOpen(false);
      }

    async function registerUser(event) {
        event.preventDefault() 
        console.log("user registering")

        if (!username || !email || !password || !confirmPassword) {
            setMessage('Please fill in all the fields')
            return;
        }

        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address')
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
            return;
        }

        setMessage('')
        //something like this
        const response = await fetch(`${process.env.REACT_APP_DATABASE_API_URL}/user/signup`, {
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

        try{
            const data = await response.json()
            console.log(data)
            setSnackbarMessage("Your account has been created!");
            setSnackbarOpen(true);
            props.handleSignupClose();
        } catch {
            setSnackbarMessage("Something went wrong. Please try again.");
            setSnackbarOpen(true);
            return;
        }
        loginUser(event);
    }

    // function signupConfirmation() {
    //     return (
    //         <div>
    //             You have signed up!
    //         </div>
    //     )
    // }





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
            // navigate('/');
		} else {
            console.log(data)
            setSnackbarMessage("Something went wrong. Please try again.");
            setSnackbarOpen(true);
		}
	}


    return (
        <Dialog open={props.signupOpen} disableBackdropClick={false} onClose={props.handleSignupClose}>
            <div className='account-container'>
                <div id="accountDiv">
                <h1 style={{marginBottom: '10px'}}>Welcome!</h1>
                    <h3 style={{marginBottom: '25px', color: '#11cde5'}}>Create a new account</h3>
                    <Box
                        className="account-fields"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={registerUser}
                    >
                        <TextField
                            sx={{ display: 'block' }}
                            required
                            label="Username"
                            className="account-textfield"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            sx={{ display: 'block' }}
                            required
                            label="Email"
                            className="account-textfield"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            sx={{ display: 'block' }}
                            required
                            label="Password"
                            className="account-textfield"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            sx={{ display: 'block' }}
                            required
                            label="Confirm Password"
                            className="account-textfield"
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
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
                                Sign me up!
                        </Button>
                    
                    </Box>

                    <p style={{lineHeight: 1.5, textAlign: 'center', color: '#cfcfcf'}}>
                        Psst... Already a member?<br/> Log in&nbsp;
                        <span style={{color: '#11cde5', textDecoration: 'underline'}} onClick={props.handleLoginOpen}>here!</span><br/>
                        <span style={{color: '#d74274'}}>{message}</span>
                    </p>
                    </div>
                </div>
                <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={snackbarOpen}
            autoHideDuration={2000}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
          />
            </Dialog>

    )
}

export default Signup;