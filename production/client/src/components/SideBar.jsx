import React from 'react'
import Toggle from './Toggle'


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
        <Toggle />
        {["Liked Keywords", "No-Go List", "User Settings", "Logout"].map((text, index) => (
          <ListItem className="drawerlist" key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightIcon className="listitemicon" />
              </ListItemIcon>
              <ListItemText primary={text} />
              <Divider color="aliceblue" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default SideBar