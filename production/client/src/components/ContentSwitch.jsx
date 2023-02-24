import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import { SearchContext } from '../hooks/SearchContext';


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 60,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(35px)',
      color: 'lightgray',
      '& + .MuiSwitch-track': {
        backgroundColor: '#3faed1',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: 'red'
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: 'lightgray',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
  // Mobile styles
  [theme.breakpoints.down('xs')]: {
    width: 30,
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(20px)',
    },
  },
}));

const ContentSwitch = (props) => {

  const { ...searchProps } = React.useContext(SearchContext);

  const [checked, setChecked] = React.useState(true);

  const handleSlider = (event, newValue) => {
    console.log("slider moved")
    setChecked(event.target.checked);
    if (checked)
      props.setSliderState(1)
    else
      props.setSliderState(3)
  }

  if (searchProps.selectedTopic === null) {
    return null;
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
    <Typography style={{color: 'whitesmoke', fontSize: '16px'}}>Random</Typography>
    <IOSSwitch checked={checked} onChange={handleSlider} />
    <Typography style={{color: 'whitesmoke', fontSize: '16px'}}>Focused</Typography>
      </Stack>
  );
}

export default ContentSwitch;