import * as React from 'react';
import { Link } from "react-router-dom";
import { Login, Signup, SideBar, Toggle, SearchAppBar, ForgotPassword, ContentSwitch, SmartSwitch } from "../components";
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
import logoDesktop from '../assets/logo-desktop.png';
import logoMobile from '../assets/logo-mobile.png';

import Button from "@mui/material/Button";
import { SearchContext } from '../hooks/SearchContext';


import PropTypes from 'prop-types';
import { useMediaQuery, useScrollTrigger } from '@mui/material';
import Slide from '@mui/material/Slide';




function HideOnScroll(props) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 0.1, // wait until 50% of element is visible
  });

  if (isMobile) {
    return (
      <Slide appear={false} direction="down" in={!trigger} timeout={400}>
        {children}
      </Slide>
    );
  } else {
    return <>{children}</>;
  }
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};






export default function Navbar2() {


  const { ...searchProps } = React.useContext(SearchContext);


  // form stuff
  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleLoginOpen = () => {
    closeAccountContainer()
    setLoginOpen(true);
    handleSignupClose();
  };

  const handleLoginClose = () => {
    closeAccountContainer()
    setLoginOpen(false);
  };


  const [signupOpen, setSignupOpen] = React.useState(false);

  const handleSignupOpen = () => {
    closeAccountContainer()
    setSignupOpen(true);
    handleLoginClose();
  };

  const handleSignupClose = () => {
    closeAccountContainer()
    setSignupOpen(false);
  };


  const [forgotPasswordOpen, setForgotPasswordOpen] = React.useState(false);

  const handleForgotPasswordOpen = () => {
    closeAccountContainer()
    setForgotPasswordOpen(true);
    handleLoginClose();
  };

  const handleForgotPasswordClose = () => {
    closeAccountContainer()
    setForgotPasswordOpen(false);
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
        <div class="mobile-navbar">
          <HideOnScroll>
            <AppBar>
                <Toolbar id="navbar-containers" style={{display: 'flex', flexDirection: 'column', background: 'black'}} open={open}>
                  <div class="navbar-top" style={{display: 'flex', justifyContent: 'space-between', width: '100vw'}}>
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
                      <Link style={{ position: 'relative' }} id="logolink" to="/">
                        <span id="logo-title">ShuffleTube</span> <ShuffleIcon id="logo-icon" />
                      </Link>
                    </Box>

                    <IconButton
                    id="acct-icon"
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >


                    {isLoggedIn && <span id="account-username" style={{ fontSize: '15px', padding: '10px', color: 'lightgray' }}>{`Hi, ${username}!`}</span>}
                    {isLoggedIn ? <Avatar style={{ background: 'aliceblue', color: 'rgba(49,159,193,1)' }}> {username[0]?.toUpperCase()} </Avatar> : <Avatar><AccountCircle id="acctbtn" /></Avatar>}

                  </IconButton>

                  </div>

                  <div class="navbar-middle" style={{display: 'flex', gap:'12px', marginLeft: '10px', justifyContent: 'space-evenly', border: 'red 1px solid', width: '100vw'}}>
                      <ContentSwitch id="content-switch" isFocused={searchProps.isFocused} setIsFocused={searchProps.setIsFocused} />
                      <SmartSwitch id="content-switch" isEducational={searchProps.isEducational} setIsEducational={searchProps.setIsEducational} />
                    </div>

                  <div class="navbar-bottom" style={{display: 'flex'}}>
                  <SearchAppBar />
                  </div>
                </Toolbar>
              </AppBar>
            </HideOnScroll>
          </div>



    );
  };

