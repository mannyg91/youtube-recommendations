import React from 'react'
import Toggle from './Toggle'
import {Link} from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import { styled } from "@mui/material/styles";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
const SideBar = ({ handleDrawerClose, open}) => {

  const drawerWidth = 240;
  const [auth, setAuth] = React.useState(true);
  
  const handleLogin = (event) => {
    setAuth(auth ? false : true);
  };

  /*TODO build actual logout functionality*/
  const handleLogout = (event) => {
    setAuth(auth ? false : true);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }));


  return (
    <Drawer
      PaperProps={{ sx: { backgroundColor: "rgb(24,24,24)", color: "aliceblue" } }}
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
        {/*Unable to presently place here -- need fix for functionality*/}
        {/* <div>
          <Toggle />
        </div> */}
        
        {["Home"].map((text, index) => (
          <ListItem className="drawerlist" key={text} disablePadding>
            <ListItemButton LinkComponent={Link} to="/">
              <ListItemIcon>
                <ChevronRightIcon className="listitemicon" />
              </ListItemIcon>
              <ListItemText primary={text} />
              <Divider color="aliceblue" />
            </ListItemButton>
            <ListItemButton>
              <listItemText primary="Logout"/>
            </ListItemButton>
          </ListItem> 
        ))}
        {!auth && (
          <ListItem className="drawerlist" key="Logout" disablePadding>
            <ListItemButton component={Link} to="/login" onClick={handleLogin}>
              <ListItemIcon>
                <ChevronRightIcon className="listitemicon" />
              </ListItemIcon>
              <ListItemText primary="Login" />
              <Divider color="aliceblue" />
            </ListItemButton>
          </ListItem>
        )}
          {auth && (
            <List>
              <ListItem className="drawerlist" key="User Settings" disablePadding>
                <ListItemButton component={Link} to="/settings" onClick={handleLogout}>
                  <ListItemIcon>
                    <ChevronRightIcon className="listitemicon" />
                  </ListItemIcon>
                  <ListItemText primary="User Settings" />
                  <Divider color="aliceblue" />
                </ListItemButton>
                <ListItemButton>
                  <listItemText primary="Logout"/>
                </ListItemButton>
              </ListItem>
              <ListItem className="drawerlist" key="Logout" disablePadding>
                <ListItemButton component={Link} to="/" onClick={handleLogout}>
                  <ListItemIcon>
                    <ChevronRightIcon className="listitemicon" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                  <Divider color="aliceblue" />
                </ListItemButton>
                <ListItemButton>
                  <listItemText primary="Logout"/>
                </ListItemButton>
              </ListItem>
            </List>
        )}  
      </List>
    </Drawer>
  )
}

export default SideBar