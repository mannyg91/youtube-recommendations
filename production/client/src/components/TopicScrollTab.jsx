import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import appTopics from './data/topics'

export default function TopicScrollTab(props) {
  const handleChange = (event, newValue) => {
    props.setSelectedTopic(newValue);
  };

  const tabElements = appTopics.sort((a, b) => a.name > b.name ? 1 : -1)
    .map(topic => (
      <Tab
        sx={{
          border: "1px solid rgba(240,248,255,.3)",
          borderRadius: "14px",
          margin: "0 .4vw",
          minHeight: "24px",
          padding: "9px 15px",
          fontSize: "12px",
        }}
        key={topic.id}
        label={topic.name}
        value={topic.id}
      />
    ));

  return (

      <Box sx={{ 
        maxWidth: "100%", bgcolor: "transparent",
        "@media screen and (min-width:700px)": {
          maxWidth: "82%", 
          bgcolor: "transparent",

        }
        }}>
        <Tabs
          value={props.selectedTopic}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          TransitionProps={{
            unmountOnExit: true,
            timeout: { enter: 500, exit: 0 },
          }}
          TransitionComponent={"Grow"}
          sx={{
            alignItems: "center",
            "& .MuiTabs-indicator": {
              display: "none",
            },
            // "& .MuiTab-textColorPrimary": {
            //   color: "rgba(240,248,255,.9)",
            //   border: "1px solid rgba(255,255,255,0.25)",
            // },
            "& .MuiTab-textColorPrimary": {
              color: "#c2c2c2",
              border: "none",
              backgroundColor:'rgb(50,50,50)'
            },
            "& .Mui-selected": {
              color: "#1976D2",
              backgroundColor: "rgba(240,248,255,1)",
            },
            "& .MuiTabScrollButton-root": {
              color: "aliceblue",
            },
          }}
        >
          {tabElements}
        </Tabs>
      </Box>
  );
}
