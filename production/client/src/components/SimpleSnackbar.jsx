import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Ratings } from ".";
import { SearchContext } from '../hooks/SearchContext';
import { LoginContext } from '../hooks/LoginContext';
import { KeywordRatingsContext } from '../hooks/KeywordRatingsContext';

import Slide from '@mui/material/Slide';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [snackbarActionComplete, setSnackbarActionComplete] = React.useState(false); // change null to data.items for testData
  const [snackbarMessage, setSnackbarMessage] = React.useState(<Ratings setOpen={setOpen} setSnackbarActionComplete={setSnackbarActionComplete} />);
  

  const { ...searchProps } = React.useContext(SearchContext);
  const { isLoggedIn } = React.useContext(LoginContext);
  const { keywordRatings } = React.useContext(KeywordRatingsContext);

  React.useEffect(() => {
    setOpen(false)

    let keywordAlreadyRated = false;

    if (keywordRatings !== null ){
      keywordAlreadyRated = keywordRatings.some((rating) => {
        console.log("entered keyword already rated")
        return rating.keywordRatingId === searchProps.selectedTopic + '.' + searchProps.searchTerm;
      })

    }
 

    console.log("keyword rated", keywordAlreadyRated)

    if (searchProps.selectedTopic !== null && searchProps.sliderState === 3 && isLoggedIn && !keywordAlreadyRated  ) {
    setTimeout(() => {
      setOpen(true);
      setSnackbarActionComplete(false);
      setSnackbarMessage(<Ratings setOpen={setOpen} setSnackbarActionComplete={setSnackbarActionComplete} />);
    }, 2000);
  }
  }, [searchProps.searchTerm])

  React.useEffect(() => {
    setOpen(false);
  }, [searchProps.selectedTopic])


  React.useEffect(() => {
    if (snackbarActionComplete) {
      setSnackbarMessage("Thanks for your rating!");
      setTimeout(() => {
        setOpen(false);
        setSnackbarActionComplete(false);
      }, 2000)
    } 
  }, [snackbarActionComplete]);

  const handleOnExited = () => {
    setSnackbarMessage(<Ratings setOpen={setOpen} setSnackbarActionComplete={setSnackbarActionComplete} />);
  };


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    if (snackbarActionComplete) {
      setSnackbarMessage(<Ratings setOpen={setOpen} setSnackbarActionComplete={setSnackbarActionComplete} />);
    }
  };




  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon style={{color: 'gray'}} fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={open}
      TransitionComponent={SlideTransition}
      TransitionProps={{
        appear: true,
        enter: true,
        exit: true,
        timeout: { appear: 500, enter: 500, exit: 200 },
        // add delay to enter transition
        onEnter: (node, isAppearing) => {
          node.style.transitionDelay = '0.5s';
        },
      }}
      // autoHideDuration={6000}
      onClose={handleClose}
      onExited={handleOnExited}
      message={snackbarMessage}
      action={action}
    />
  );
}

export default SimpleSnackbar;
