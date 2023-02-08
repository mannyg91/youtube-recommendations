import React from 'react'
import { LoginContextProvider } from './hooks/LoginContext';

import { Navbar, VideoFeed, WatchVideo, SavedVideos } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SavedContextProvider } from './hooks/SavedContext';

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
      <SavedContextProvider>
        <BrowserRouter>
            <Routes>
              <Route
                path="/"
                // element={user?.email ? <Navigate to="/home" /> : <VideoFeed />}
                element={<><Navbar /><VideoFeed/></>}
              />
              <Route
                path='/video/:id' 
                element={<><Navbar /><WatchVideo /></>} 
              />
              <Route
                path='/saved-videos' 
                element={<><Navbar /><SavedVideos /></>} 
              />


            </Routes>
    
        </BrowserRouter>
      </SavedContextProvider>
    </LoginContextProvider>


  )
}

export default App