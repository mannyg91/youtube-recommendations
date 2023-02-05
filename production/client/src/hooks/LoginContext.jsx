import React, { useState } from 'react';
const LoginContext = React.createContext();


const LoginContextProvider = (props) => {
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // React.useEffect(() => {
  //   setIsLoggedIn(false);
  // }, []);


  function handleLogin() {
    console.log('handle login launched')
    setIsLoggedIn(true)
  };

  function handleLogout() {
    setIsLoggedIn(false)
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
        user,
        setUser,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider, LoginContext };