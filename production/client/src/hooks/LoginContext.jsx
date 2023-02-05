import React, { useState } from 'react';
const LoginContext = React.createContext();

const LoginContextProvider = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});


  function handleLogin() {
    setIsLoggedIn(!isLoggedIn)
  };

  function handleLogout() {

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