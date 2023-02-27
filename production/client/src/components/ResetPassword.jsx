import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import { LoginContext } from '../hooks/LoginContext';
import Dialog from '@mui/material/Dialog';



export const ResetPassword = (props) => {

      const location = useLocation();
      const [newPassword, setNewPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [message, setMessage] = useState('');
    

      const handleResetPassword = async (event) => {
        event.preventDefault();
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get('token');
        try {
          const response = await fetch(`${process.env.REACT_APP_DATABASE_API_URL}/user/reset-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, newPassword }),
          });
          if (response.ok) {
            <Navigate to="/" replace={true} />;
          } else {
            const data = await response.json();
            setMessage(data.error);
          }
        } catch (error) {
          setMessage('Failed to reset password');
        }
      };
    


    return (


            <div className='account-container'>
                    <div id="accountDiv">
                        <h1 style={{marginBottom: '10px'}}>Reset Password</h1>
                            <p style={{lineHeight: 1.5, textAlign: 'center', color: '#11cde5', margin: '16px'}}>
                                Please enter a new password:
                            </p>
         
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
                            onSubmit={handleResetPassword} //login called here
                        >
                

                            
                      <TextField
                            sx={{ display: 'block' }}
                            required
                            label="New Password"
                            className="account-textfield"
                            type="password"
                            onChange={(e) => setNewPassword(e.target.value)}
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
                                Confirm
                            </Button>
                            <p><span style={{color: '#d74274'}}>{message}</span></p>
                        </Box>

                    </div>
                </div>





    )
}

export default ResetPassword;