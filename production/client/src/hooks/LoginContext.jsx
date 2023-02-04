import React, { useState } from 'react';
const LoginContext = React.createContext();

const LoginContextProvider = (props) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export { LoginContextProvider, LoginContext };