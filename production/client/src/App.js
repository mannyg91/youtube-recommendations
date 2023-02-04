import React from 'react'
import { LoginContextProvider } from './hooks/LoginContext';

import { Login, Signup, Navbar, VideoFeed, WatchVideo } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // const [user, setUser] = useState({})

  // useEffect(() => {
  //   const theUser = localStorage.getItem("user");

  //   if (theUser && !theUser.includes("undefined")) {
  //     setUser(JSON.parse(theUser));
  //   }
  // }, []);

  return (
    <LoginContextProvider>
      <BrowserRouter>
          <Routes>
            <Route
              path="/"
              // element={user?.email ? <Navigate to="/home" /> : <VideoFeed />}
              element={<><Navbar /><VideoFeed/></>}
          />
            <Route
              path="/signup"
              // element={user?.email ? <Navigate to="/home" /> : <Signup />}
              element={<Signup/>}
            />
            <Route
              path="/login"
              // element={user?.email ? <Navigate to="/home" /> : <Login />}
              element={<Login/>}
            />
            <Route
              path='/video/:id' 
              element={<><Navbar /><WatchVideo /></>} 
            />
          </Routes>
  
      </BrowserRouter>
    </LoginContextProvider>


  )
}

export default App