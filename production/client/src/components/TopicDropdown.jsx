import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');



  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel  sx={{color:'white'}} id="demo-simple-select-label">Topic</InputLabel>
        <Select
          sx={{border:'2px #6a8b96 solid'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Topic"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}








// import React from 'react'
// import appTopics  from './data/topics'
// import {useState} from 'react';

// const TopicDropdown = (props) => {

  
//     const handleChange = event => {
//       props.setSelectedTopic(event.target.value);
//     };

//     const sortedTopics = () => {

//     }
//     return (
//       <div className='topic-dropdown'>
//         Topic:
//         <select value={props.selectedTopic} onChange={handleChange}>
//           {appTopics.sort((a,b) =>a.name > b.name ? 1: -1)
//             .map(topic => (
//             <option key={topic.id} value={topic.id}>
//               {topic.name}
//             </option>
//           ))}
//       </select>
//       </div>
//     );
//   }

// export default TopicDropdown





