import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SmartSlider = (props) => {

  const handleSlider = (event, newValue) => {
    console.log("slider moved")
    console.log(newValue)
    props.setSliderState2(newValue)
    

    if (newValue === 1) {
      props.setSelectedType("24")
    } else if (newValue === 2) {
      props.setSelectedType("26")
    } else {
      props.setSelectedType("27")
    }

    console.log(props.selectedType)

  }

  const marks = [
    {
      value: 1,
      label: 'Leisure',
    },
    {
      value: 3,
      label: 'Learning',
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
          height: "0px"
          
        },
        "& .MuiSlider-markLabel": {
          color: "aliceblue"
        }
       }}
        size="medium"
        value={props.sliderState2}
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

export default SmartSlider