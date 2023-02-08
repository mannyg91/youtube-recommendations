import React from 'react'
import Toggle from './Toggle'
import { Link } from "react-router-dom"


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

import { SavedContext } from '../hooks/SavedContext';


const SideBar = ({ handleDrawerClose, open}) => {

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

          <Link to="/saved-videos/">
            <ListItem className="drawerlist" key="Saved Videos" disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <ChevronRightIcon className="listitemicon" />
                    </ListItemIcon>
                    <ListItemText primary="Saved Videos" />
                    <Divider color="aliceblue" />
                  </ListItemButton>
                </ListItem>
          </Link>

            <ListItem className="drawerlist" key="No-Go List" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ChevronRightIcon className="listitemicon" />
                </ListItemIcon>
                <ListItemText primary="No-Go List" />
                <Divider color="aliceblue" />
              </ListItemButton>
            </ListItem>

            <ListItem className="drawerlist" key="User Settings" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ChevronRightIcon className="listitemicon" />
                </ListItemIcon>
                <ListItemText primary="User Settings" />
                <Divider color="aliceblue" />
              </ListItemButton>
            </ListItem>

            <ListItem className="drawerlist" key="Logout" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ChevronRightIcon className="listitemicon" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
                <Divider color="aliceblue" />
              </ListItemButton>
            </ListItem>

      </List>
    </Drawer>
  )
}

export default SideBar