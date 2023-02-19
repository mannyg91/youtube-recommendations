import * as React from 'react';
import { Link } from "react-router-dom";
import { Login, Signup, SideBar, Toggle, SearchAppBar } from "../components";
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
import Avatar from '@mui/material/Avatar';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import logo from '../assets/logo-desktop.png';

export default function Navbar() {

  // form stuff
  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleLoginOpen = () => {
    closeAccountContainer()
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    closeAccountContainer()
    setLoginOpen(false);
  };


  const [signupOpen, setSignupOpen] = React.useState(false);

  const handleSignupOpen = () => {
    closeAccountContainer()
    setSignupOpen(true);
  };

  const handleSignupClose = () => {
    closeAccountContainer()
    setSignupOpen(false);
  };



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const { username, isLoggedIn, handleLogout } = React.useContext(LoginContext);


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

  const closeAccountContainer = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <>
    
      <Login    
          loginOpen={loginOpen}
          handleLoginClose={handleLoginClose}  
      />

      <Signup
          signupOpen={signupOpen}
          handleSignupClose={handleSignupClose}  
      />


      <Box>
        <AppBar  id="logobar">
          <Toolbar open={open}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon id="burgerbtn" />
            </IconButton>
            
              <Box id="logo-container" component="div" sx={{ flexGrow: 1 }}>
                <Link id="logolink" to="/">
                  <img id="logo" src={logo} alt='logo'/>
                  {/* <span id="logo-title">watchwise</span> <ShuffleIcon id="logo-icon"/> */}
                </Link>
              </Box>


              <SearchAppBar />
            
            <div id="daynighttog">
              {window.matchMedia("(max-width:768px)").matches ? (
                <Toggle id="mobile_tog"/>
              ):(
                <Toggle id="desktop_tog"/>
              )}
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


              {isLoggedIn &&  <span id="account-username" style={{fontSize: '15px', padding: '10px', color:'lightgray' }}>{`Hi, ${username}!`}</span>}
              {isLoggedIn ?  <Avatar style={{background: 'aliceblue', color:'rgba(49,159,193,1)'}}> {username[0]?.toUpperCase()} </Avatar> : <Avatar><AccountCircle id="acctbtn"/></Avatar>}
                
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
                onClose={closeAccountContainer}
              >
                {isLoggedIn ? 
                  <div id="acct-menu">
                    <MenuItem onClick={closeAccountContainer}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </div> :
                   <div id="acct-menu">
                    <MenuItem onClick={handleLoginOpen}>Login</MenuItem>
                    <MenuItem onClick={handleSignupOpen}>Sign Up</MenuItem>
                  </div>
              }
              </Menu>
            </div>

      


          </Toolbar>
        </AppBar>

        {/* <AppBar style={{top:'70px', height:'40px', backgroundColor:'rgba(0,0,0,0)', color:'white', padding: '10px 100px', fontWeight: '500'}}>
          Music | Gaming | Sports | Religion | Hobbies | Knowledge | History |
        </AppBar> */}
      
        <SideBar 
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          open={open}
          setOpen={setOpen}  
        />
      </Box>
    </>
  );
}

