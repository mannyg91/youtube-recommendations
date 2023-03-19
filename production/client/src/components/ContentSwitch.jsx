import * as React from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SearchContext } from '../hooks/SearchContext';


const ContentSwitch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');
  const { ...searchProps } = React.useContext(SearchContext);

  const [checked, setChecked] = React.useState(true);

  const handleSwitch = (event, newValue) => {
    setChecked(event.target.checked);
    searchProps.setIsFocused(!searchProps.isFocused);
  }

  if (searchProps.selectedTopic === null) {
    return null;
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography style={{ color: 'whitesmoke', fontSize: isMobile ? '11px' : '15px' }}>Random</Typography>
      <Switch
        checked={checked}
        onChange={handleSwitch}
        disableRipple
        focusVisibleClassName=".Mui-focusVisible"
        sx={{
          width: isMobile ? 45 : 80,
          height: isMobile ? 26 : 33,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: isMobile ? 0.3 : 0.25,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: isMobile ? 'translateX(20px)' : 'translateX(46px)',
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
              color: 'red',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: isMobile? 21 : 28,
            height: isMobile ? 21 : 28,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: 'lightgray',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
              duration: 500,
            }),
          },
        }}
      />
      <Typography style={{ color: 'whitesmoke', fontSize: isMobile ? '11px' : '15px'}}>Focused</Typography>
    </Stack>
  );
};

export default ContentSwitch;






// const IOSSwitch = styled((props) => (
//   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
//   width: 45,
//   height: 26,
//   padding: 0,
//   '& .MuiSwitch-switchBase': {
//     padding: 0,
//     margin: 2,
//     transitionDuration: '300ms',
//     '&.Mui-checked': {
//       transform: 'translateX(20px)',
//       color: 'lightgray',
//       '& + .MuiSwitch-track': {
//         backgroundColor: '#3faed1',
//         opacity: 1,
//         border: 0,
//       },
//       '&.Mui-disabled + .MuiSwitch-track': {
//         opacity: 0.5,
//       },
//     },
//     '&.Mui-focusVisible .MuiSwitch-thumb': {
//       color: '#33cf4d',
//       border: '6px solid #fff',
//     },
//     '&.Mui-disabled .MuiSwitch-thumb': {
//       color: 'red'
//     },
//     '&.Mui-disabled + .MuiSwitch-track': {
//       opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     boxSizing: 'border-box',
//     width: 22,
//     height: 22,
//   },
//   '& .MuiSwitch-track': {
//     borderRadius: 26 / 2,
//     backgroundColor: 'lightgray',
//     opacity: 1,
//     transition: theme.transitions.create(['background-color'], {
//       duration: 500,
//     }),
//   },
//   // Mobile styles
//   [theme.breakpoints.down('xs')]: {
//     width: 30,
//     '& .MuiSwitch-switchBase.Mui-checked': {
//       transform: 'translateX(20px)',
//     },
//   },
// }));

// const ContentSwitch = (props) => {

//   const { ...searchProps } = React.useContext(SearchContext);

//   const [checked, setChecked] = React.useState(true);

//   const handleSwitch = (event, newValue) => {
//     setChecked(event.target.checked);
//     searchProps.setIsFocused(!searchProps.isFocused);
//   }

//   if (searchProps.selectedTopic === null) {
//     return null;
//   }

//   return (
//     <Stack direction="row" spacing={1} alignItems="center">
//       <Typography style={{ color: 'whitesmoke', fontSize: '11px' }}>Random</Typography>
//       <IOSSwitch checked={checked} onChange={handleSwitch} />
//       <Typography style={{ color: 'whitesmoke', fontSize: '11px' }}>Focused</Typography>
//     </Stack>
//   );
// }

// export default ContentSwitch;