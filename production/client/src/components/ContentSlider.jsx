import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { SearchContext } from '../hooks/SearchContext';

const ContentSlider = (props) => {

  console.log("slider initialized")

  const { ...searchProps } = React.useContext(SearchContext);

  const handleSlider = (event, newValue) => {
    console.log("slider moved")
    props.setSliderState(newValue)
  }

  const marks = [
    {
      value: 1,
      label: 'Random',
    },
    {
      value: 3,
      label: 'Focused',
    },
  ];

  if (searchProps.selectedTopic === null) {
    return null;
  }

  return (
    <Box sx={{ width: 180, }}>
      <Slider sx={{
        color: '#dbdfe3', 
        zIndex: 0,
        "& .MuiSlider-track": {
          backgroundColor: "#484848",
          border: "none"
        },

        "& .MuiSlider-thumb": {
          backgroundColor: "a5a5a5"
        },
        "& .MuiSlider-rail": {
          backgroundColor: "aliceblue"
        },
        "& .MuiSlider-mark": {
          height: "0px"
          
        },
        "& .MuiSlider-markLabel": {
          color: "aliceblue"
        }
       }}
        size="medium"
        value={props.sliderState}
        aria-label="Small"
        min={1}
        step={1}
        max={3}
        marks={marks}
        onChange={handleSlider}
      />
    </Box>

  )
}

export default ContentSlider