import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const ContentSlider = () => {

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
      <Slider sx={{color: 'aliceblue', zIndex: -1 }}
        size="medium"
        defaultValue={1}
        aria-label="Small"
        min={1}
        step={1}
        max={3}
        marks={marks}
      />
    </Box>

  )
}

export default ContentSlider