import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import WavesIcon from '@mui/icons-material/Waves';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export default function Navbar() {
  // I suppose to will be used when we have actual login
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleLogin = (event) => {
    setAuth(auth ? false : true);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
console.log(auth);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id="appbar" position="static" sx={{background: '#000000', padding: '5px', marginBottom: '15px'}}>
        <Toolbar id="MenuAppBar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <WavesIcon id="burgerbtn" />
          </IconButton>
          <Typography id="logo" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ZepBox
          </Typography>
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
    </Box>
  );
}

