import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';


const LoginContext = React.createContext();


const LoginContextProvider = (props) => {
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState({});

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  React.useEffect(() => {
    console.log("login context user effect")
		const token = localStorage.getItem('token')
		if (token) {
			  setIsLoggedIn(true);
        getUsername();
			} else {
        setIsLoggedIn(false);
			}
  }, []);


  function handleLogin() {
    console.log('handle login launched')
    setIsLoggedIn(true)
    setSnackbarMessage("You are now logged in");
    setSnackbarOpen(true);
  };

  function handleLogout() {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setSnackbarMessage("You have been logged out");
    setSnackbarOpen(true);
  }

  function handleSnackbarClose() {
    setSnackbarOpen(false);
  }


  //should probably create a function just for handling token


  //need to get token, send it, make the get request to username, receive back the username, set it
  async function getUsername() {
    // tries to grab token
    const token = localStorage.getItem('token');
  
    // if token, makes get request
    if (token) {
      const res = await fetch(`${process.env.REACT_APP_DATABASE_API_URL}/user/username`, {
        method: 'GET',
        headers: {
          // passes the access token grabbing from local storage
          'Authorization': `Bearer ${token}`
        }
      });
  
      // if successful  response, username is set
      if (res.ok) {
        const data = await res.json();
        // success, sets username state
        const username = data.username
        setUsername(username);
      } else {
        // removes token if request is unsuccessful
        localStorage.removeItem('token');
      }
    }
  }
	





  console.log("loginContext rendered")
  console.log(isLoggedIn)

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        handleLogin,
        handleLogout,
        username,
        setUsername,
        getUsername,
      }}
    >
      {props.children}

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </LoginContext.Provider>
  );
};

export { LoginContextProvider, LoginContext };