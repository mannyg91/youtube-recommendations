import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const ContentSlider = (props) => {

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

  return (
    <Box sx={{ width: 200 }}>
      <Slider sx={{
        color: 'aliceblue', 
        zIndex: 0,
        "& .MuiSlider-thumb": {
          backgroundColor: "#fff"
        },
        "& .MuiSlider-rail": {
          backgroundColor: "aliceblue"
        },
        "& .MuiSlider-mark": {
          height: 0
        },
        "& .MuiSlider-markLabel": {
          color: "aliceblue"
        }
       }}
        size="medium"
        defaultValue={props.sliderState}
        aria-label="Small"
        min={1}
        step={1}
        max={3}
        marks={marks}
        onChange={props.handleSlider}
      />
    </Box>

  )
}

export default ContentSlider