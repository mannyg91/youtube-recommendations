import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import appTopics  from './data/topics'

export default function TopicScrollTab(props) {

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    props.setSelectedTopic(newValue);
  };

  return (
    <div>
      <Box sx={{ maxWidth: "90%", bgcolor: "transparent",marginLeft:"5%"}}>
        <Tabs
          value={props.selectedTopic} 
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none"
            },
            "& .MuiTab-textColorPrimary": {
              color: "rgba(240,248,255,0.8)"
            },
            "& .Mui-selected": {
              color: "darkcyan",
              backgroundColor: "rgba(240,248,255,0.9)"
            },
            "& .MuiTabScrollButton-root": {
              color: "aliceblue"
            }
          }}
        >
          {appTopics.sort((a,b) => a.name > b.name ? 1 : -1)
          .map(topic => (
            <Tab
              sx={{
                border: "1px solid rgba(240,248,255,0.5)",
                borderRadius: "15px",
                marginRight: "1vw"
              }}
              key={topic.id}
              label={topic.name}
              value={topic.id}
            >
              {topic.name}
            </Tab>
          ))}
        </Tabs>
      </Box>
    </div>
  );
}
