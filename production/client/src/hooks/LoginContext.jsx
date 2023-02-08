import React, { useState } from 'react';
import jwt_decode from 'jwt-decode'


const LoginContext = React.createContext();


const LoginContextProvider = (props) => {
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState({});

  React.useEffect(() => {
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
  };

  function handleLogout() {
    setIsLoggedIn(false)
  }

	function getUsername() {
		//tries to grab token
		const token = localStorage.getItem('token')
		if (token) {
			//if found, decodes it
			const user = jwt_decode(token)

			if (!user) {
				//if no user, removes token
				localStorage.removeItem('token')
			} else {
				//if user is logged in, it gets a quote
        setUsername(user.username)
        console.log(user)
        console.log(user.username)
        console.log(user.id)
        
				// populateQuote()
			}
		}
	}


  //user.userame


	// async function getUsername() {
  //   //grabs quote from the api, using the usertoken. could probably use to grab name
  //   //does each user have a unique quote? how does it tie the two together?
  //     const req = await fetch('http://localhost:5000/api/quote', {
  //       headers: {
  //         //passes the access token grabbing from local storage
  //         'x-access-token': localStorage.getItem('token'),
  //       },
  //     })
  
  //       //the response
  //     const data = await req.json()
  //     if (data.status === 'ok') {
  //       // if successful, sets the quote to be displayed
  //       setQuote(data.quote)
  //     } else {
  //       // alerts if unsuccessful
  //       alert(data.error)
  //     }
  //   }


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
    </LoginContext.Provider>
  );
};

export { LoginContextProvider, LoginContext };