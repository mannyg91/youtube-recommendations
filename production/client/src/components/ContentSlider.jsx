import * as React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

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

const ContentSlider = styled(Slider)(({theme}) => ({
  height: 3,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    backgroundColor: "#fff"
  },
  "& .MuiSlider-valueLabel": {
    "&:before": {
      display: "none"
    },
    "& *": {
      background: "transparent",
    }
  },
  "& .MuiSlider-rail": {
    backgroundColor: "aliceblue"
  },
  "& .MuiSlider-mark": {
    height: 8,
    width: 2,
    backgroundColor: "aliceblue",
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "aliceblue"
    }
  },
  "& .MuiSlider-markLabel": {
    color: "aliceblue"
  }
}));

function CustomSlider(){
    return (
      <Box sx={{ width: 200 }}>
        <ContentSlider 
          sx={{color: 'aliceblue'}}
          size="medium"
          defaultValue={1}
          aria-label="Content Slider"
          min={1}
          step={1}
          max={3}
          marks={marks}
        />
      </Box>
  )
}
export default CustomSlider