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
import { Login } from "../components";
import { LoginContext } from '../hooks/LoginContext';
import Dialog from '@mui/material/Dialog';


const SideBar = ({ handleDrawerClose, open}) => {

  // form stuff
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { username, isLoggedIn, handleLogout } = React.useContext(LoginContext);

  const handleLoginOpen = () => {
    closeAccountContainer()
    setLoginOpen(true);
    handleDrawerClose();
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


  return (
    <>
      <Login    
            loginOpen={loginOpen}
            handleLoginClose={handleLoginClose}
              
      />

      <Dialog style={{minHeight: '100vh'}} open={open}  onClose={handleDrawerClose}>
        <Drawer 
          PaperProps={{ sx: { backgroundColor: "rgb(12,12,12)", color: "aliceblue" } }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box"
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
          <Divider color="aliceblue" />

          <List>

            <ListItem className="drawerlist mobile" key="Day/NightTog" disablePadding>
                <ListItemButton sx={{marginLeft:"-17%"}}>
                  <Toggle />
                </ListItemButton>
              </ListItem>

            <Link to="/about">
              <ListItem className="drawerlist" key="About Us" disablePadding>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>
                    <Groups2Icon className="listitemicon" />
                  </ListItemIcon>
                  <ListItemText primary="About Us" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to="/saved-videos/">
              <ListItem className="drawerlist" key="Saved Videos" onClick={handleDrawerClose} disablePadding>
                <ListItemButton onClick={handleDrawerClose}>
                  <ListItemIcon>
                    <FavoriteIcon className="listitemicon" />
                  </ListItemIcon>
                  <ListItemText primary="Saved Videos" />
                </ListItemButton>
              </ListItem>
            </Link>
            
            <ListItem className="drawerlist" key="Settings" disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemIcon>
                  <SettingsIcon className="listitemicon" />
                </ListItemIcon>
                <ListItemText primary="Settings" />
                <Divider color="aliceblue" />
              </ListItemButton>
            </ListItem>

            {!isLoggedIn &&
            <ListItem className="drawerlist" key="Login" disablePadding>
              <ListItemButton onClick={handleLoginOpen} >
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