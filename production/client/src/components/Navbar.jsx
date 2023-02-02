import * as React from 'react';
import { Link } from "react-router-dom";
import SideBar from './SideBar'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import WavesIcon from '@mui/icons-material/Waves';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from "@mui/material/styles";
import Toggle from './Toggle'


const drawerWidth = 240;

export default function Navbar() {
  // I suppose to will be used when we have actual login
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleLogin = (event) => {
    setAuth(auth ? false : true);
  };

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
            <WavesIcon id="burgerbtn" />
          </IconButton>
          {/* <Link to="/"> */}
            <Typography id="logo" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              WatchWise
            </Typography>
          {/* </Link> */}
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
              <MenuItem onClick={handleLogin}>{auth ? 'Logout' : 'Login'}</MenuItem>
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

