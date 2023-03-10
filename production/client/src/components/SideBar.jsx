import React from 'react'
import Toggle from './Toggle'
import { Link } from "react-router-dom"
import IconButton from '@mui/material/IconButton';
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import SettingsIcon from '@mui/icons-material/Settings'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Groups2Icon from '@mui/icons-material/Groups2';

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { SavedContext } from '../hooks/SavedContext';
import { Login, About } from "../components";
import { LoginContext } from '../hooks/LoginContext';
import Dialog from '@mui/material/Dialog';


const SideBar = ({ handleDrawerClose, open}) => {

  // form stuff
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { username, isLoggedIn, handleLogout } = React.useContext(LoginContext);
  const [aboutUsOpen, setAboutUsOpen] = React.useState(false);

  const handleLoginOpen = () => {
    closeAccountContainer()
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    closeAccountContainer()
    setLoginOpen(false);
  };

  const closeAccountContainer = () => {
    setAnchorEl(null);
  };

  const { savedVideos, getSavedVideos } = React.useContext(SavedContext);

  const drawerWidth = 240;

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }));

//change to about us
  const handleAboutUsOpen = () => {
    handleDrawerClose()
    setAboutUsOpen(true);
  };

  const handleAboutUsClose = () => {
    setAboutUsOpen(false);
  };






  return (
    <>
      <Login    
            loginOpen={loginOpen}
            handleLoginClose={handleLoginClose}  
      />

      <About
            aboutUsOpen={aboutUsOpen}
            handleAboutUsClose={handleAboutUsClose}  
      />

      <Dialog style={{minHeight: '100vh'}} open={open}  onClose={handleDrawerClose}>
        <Drawer 
          PaperProps={{ sx: { backgroundColor: "rgb(21,21,21)", color: "aliceblue" } }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            }
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon id="menuclosearrow" />
            </IconButton>
          </DrawerHeader>

          <List style={{marginLeft: '15px'}}>
            <ListItem className="drawerlist mobile" key="Day/NightTog" disablePadding>
                <ListItemButton style={{display: 'flex', justifyContent: 'center', marginLeft: '-15px', marginBottom: '24px'}}>
                  <Toggle />
                </ListItemButton>
              </ListItem>

  
              <ListItem className="drawerlist" key="About Us" onClick={handleAboutUsOpen} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Groups2Icon className="listitemicon" />
                  </ListItemIcon>
                  <ListItemText primary="About Us" />
                </ListItemButton>
              </ListItem>


            <Link to="/saved-videos/">
              <ListItem className="drawerlist" key="Saved Videos" onClick={handleDrawerClose} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FavoriteIcon className="listitemicon" />
                  </ListItemIcon>
                  <ListItemText primary="Saved Videos" />
                </ListItemButton>
              </ListItem>
            </Link>
            
            <ListItem className="drawerlist" key="Settings" onClick={handleDrawerClose} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon className="listitemicon" />
                </ListItemIcon>
                <ListItemText primary="Settings" />
                <Divider color="aliceblue" />
              </ListItemButton>
            </ListItem>

            {!isLoggedIn &&
            <ListItem className="drawerlist" key="Login" onClick={handleDrawerClose} disablePadding>
              <ListItemButton onClick={handleLoginOpen}>
                <ListItemIcon>
                  <LoginIcon className="listitemicon" />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>}

            {isLoggedIn &&
            <ListItem className="drawerlist" key="Logout" disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon className="listitemicon" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>}

          </List>
        </Drawer>
      </Dialog>
    </>
  )
}

export default SideBar