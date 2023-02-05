import * as React from 'react';
import { Link } from "react-router-dom";

import { Login, Signup, SideBar, Toggle } from "../components";
import { LoginContext } from '../hooks/LoginContext';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

export default function Navbar() {
  // I suppose to will be used when we have actual login
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const { user, isLoggedIn, handleLogout } = React.useContext(LoginContext);


  //need function here to display name, will check token, display name


  // Pass User
  // const logout = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload();
  // };


  // function handleLogin() {
  //   setIsLoggedIn(!isLoggedIn)
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar id="logobar" sx={{background: '#000000'}} open={open}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon id="burgerbtn" />
          </IconButton>
          
            <Typography id="logo" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                WatchWise
              </Link>
            </Typography>
          
          <div className="dayNightTog">
            <Toggle />
          </div>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >


            {isLoggedIn ?
            <p>YOU ARE LOGGED IN</p>
           : <p>you are not logged in</p>}

              <AccountCircle id="acctbtn"/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {auth && (<MenuItem onClick={handleClose}>Profile</MenuItem>)}
              <MenuItem>
              { console.log(isLoggedIn)}
                {
                  isLoggedIn ? <span onClick={handleLogout}>Logout</span> : <Link to="/login">Login</Link>
                }
              </MenuItem>
            </Menu>
          </div>

    


        </Toolbar>
      </AppBar>
    
      <SideBar 
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        open={open}
        setOpen={setOpen}  
      />
    </Box>
  );
}

