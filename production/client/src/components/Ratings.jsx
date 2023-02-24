import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { LoginContext } from '../hooks/LoginContext';
import { SearchContext } from '../hooks/SearchContext';
import { KeywordRatingsContext } from '../hooks/KeywordRatingsContext';



const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Okay',
  4: 'Good',
  5: 'Excellent',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Ratings = (props) => {
  const [value, setValue] = React.useState(null);
  const [hover, setHover] = React.useState(-1);

  const { ...searchProps } = React.useContext(SearchContext);
//searchTerm, selectedTopic

  const { isLoggedIn } = React.useContext(LoginContext);
  const { keywordRatings, getKeywordRatings } = React.useContext(KeywordRatingsContext);

  const [keywordRating, setKeywordRating] = React.useState(null);




  React.useEffect(() => {

    //valid string

    if (value !== null) {
    console.log(searchProps.selectedTopic + "." + searchProps.searchTerm)
    console.log('useEffect', searchProps.selectedTopic, searchProps.searchTerm, value);

    const newKeywordRating = {
      keywordRatingId: searchProps.selectedTopic + '.' + searchProps.searchTerm,
      keyword: searchProps.searchTerm,
      topic: searchProps.selectedTopic,
      rating: value,
    };

    console.log('newKeywordRating', newKeywordRating);
    setKeywordRating(newKeywordRating);
    getKeywordRatings()
    saveRating(newKeywordRating); // call saveRating with the new keyword rating
      
    }
  }, [value])


  React.useEffect(() => {
    setValue(null)

  }, [searchProps.searchTerm, searchProps.selectedTopic])

  
// React.useEffect(() => {
//   if (value !== null) {

//   }
// },[])

function handleRating(rating) {
  setValue(rating)
  saveRating()
  getKeywordRatings()
  props.setSnackbarActionComplete(true)
  // props.setOpen(false)
}

function saveRating(newKeywordRating) {

  console.log("attempting to save rating")
    // tries to grab token
    const token = localStorage.getItem('token')
    console.log("saveRating function", newKeywordRating)

    //if token, makes get request
    if (token) {
      const method = "POST";
      const url = `${process.env.REACT_APP_DATABASE_API_URL}/user/keywordRatings`;
      fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          keywordRating: newKeywordRating,
        }),
      }).then((res) => {
        if (res.ok) {
          getKeywordRatings();
        } else {
          console.log("Error saving rating");
        }
      });

  } 
}


  return (
    <div class="ratings-container">
      <p style={{fontWeight: '300'}}>
        <span style={{}}>Help improve your content! </span>
        <br />
        How would you rate the quality of your results?
      </p>

      <Box
        sx={{
          width: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '25px',
          padding: '10px 20px 10px 20px',
          transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={1}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            handleRating(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ color: 'white', opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2, color: 'lightgray' }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    </div>
  );
}

export default Ratings;


