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

        const data = await response.json()
        console.log(data)
        alert('Account successfully created!');
    }

    // function signupConfirmation() {
    //     return (
    //         <div>
    //             You have signed up!
    //         </div>
    //     )
    // }

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
                                props.handleSignupClose();
                            }}>
                                Sign me up!
                        </Button>
                    
                    </Box>

                    <p style={{lineHeight: 1.5, textAlign: 'center', color: '#cfcfcf'}}>
                        Psst... Already a member?<br/> Log in&nbsp;
                        <span style={{color: '#11cde5'}}>
                            <Link to="../login" style={{textDecoration: 'underline'}}>here!</Link>
                        </span>
                    </p>
                    </div>
                </div>
            </Dialog>

    )
}

export default Signup;