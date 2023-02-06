import React from "react";
import TextField from "@mui/material/TextField";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';

export const Signup = (props) => {

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
        <Dialog open={props.signupOpen} disableBackdropClick={false} onClose={props.handleSignupClose}>
            <div className='account-container'>
                <div id="accountDiv">
                <h1 style={{marginBottom: '10px'}}>Welcome!</h1>
                    <h2 style={{marginBottom: '25px'}}>Create a new account</h2>
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

                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        />
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
                                            width: '130px'
                                        }}
                            id="submit-btn"
                            type="submit"
                            variant="outlined"
                            onClick={()=>{
                                console.log("Button clicked, congratulations.");
                            }}>
                                Sign me up!
                        </Button>
                    
                    </Box>

                    <p>
                        Psst... Already a member? Log in&nbsp;
                        <span style={{color: '#67ffd9'}}>
                            <Link to="../login">here!</Link>
                        </span>
                    </p>
                    </div>
                </div>
            </Dialog>

    )
}

export default Signup;