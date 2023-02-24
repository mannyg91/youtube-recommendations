import * as React from 'react';
import { Link } from "react-router-dom";
import { Login, Signup, SideBar, Toggle, SearchAppBar, ForgotPassword, ContentSlider, ContentSwitch } from "../components";
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
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  // console.log('trigger', trigger);
  // console.log('in', !trigger);

  if (isMobile) {
    return (
      <Slide appear={false} direction="down" in={!trigger} timeout={400}>
        {children}
      </Slide>
    );
  } else {
    return <>{children}</>
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






export default function Navbar() {


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
    <>

      <Box>
        <Login
          loginOpen={loginOpen}
          handleLoginClose={handleLoginClose}
          handleSignupOpen={handleSignupOpen}
          handleForgotPasswordOpen={handleForgotPasswordOpen}
        />

        <Signup
          signupOpen={signupOpen}
          handleSignupClose={handleSignupClose}
          handleLoginOpen={handleLoginOpen}
        />

        <ForgotPassword
          forgotPasswordOpen={forgotPasswordOpen}
          handleForgotPasswordClose={handleForgotPasswordClose}
        />


        <HideOnScroll>
          <AppBar id="logobar">
            <Toolbar id="logobar-containers" open={open}>

              <div class='logobar-top'>
                <div id='logobar-left'>
                  <div id='logobar-left-outer'>
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
                        <img id="logo-mobile" src={logoMobile} alt='logo' />
                        <img id="logo-desktop" src={logoDesktop} alt='logo' />
                        {/* <span id="logo-title">watchwise</span> <ShuffleIcon id="logo-icon"/> */}
                      </Link>
                    </Box>
                  </div>
                  <div id='logobar-left-inner'>
                    {/* <ContentSlider sliderState={searchProps.sliderState} setSliderState={searchProps.setSliderState} /> */}
                    <ContentSwitch id="content-switch" sliderState={searchProps.sliderState} setSliderState={searchProps.setSliderState} />
                  </div>
                </div>





                <div class='logobar-top' id='logobar-right'>
                  {/* <div className="desktop">
                  <Toggle id="desktop_tog" />
              </div> */}




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

                    PaperProps={{
                      style: {
                        backgroundColor: 'rgb(50,50,50)', // Change this to the desired background color
                        color: '#f5f5f5',
                        zoom: '1.1111',
                      },}}

      
                  >
                    {isLoggedIn ?
                      <>
                        <MenuItem onClick={closeAccountContainer}>Profile</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </>

                      :
                      <>
                        <MenuItem onClick={handleLoginOpen}>Login</MenuItem>
                        <MenuItem onClick={handleSignupOpen}>Sign Up</MenuItem>
                      </>


                    }
                  </Menu>
                </div>
              </div>

              <div class='logobar-bottom'>
                <div id='logobar-middle'>


                  <SearchAppBar />

                </div>
              </div>





            </Toolbar>
          </AppBar>
        </HideOnScroll>

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

