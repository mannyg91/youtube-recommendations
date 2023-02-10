import React from 'react'
import { LoginContextProvider } from './hooks/LoginContext';

import { Navbar, VideoFeed, WatchVideo, SavedVideos } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SavedContextProvider } from './hooks/SavedContext';
import { SearchContextProvider } from './hooks/SearchContext';

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
      <SearchContextProvider>
      <SavedContextProvider>
        <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
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
      </SearchContextProvider>
    </LoginContextProvider>


  )
}

export default App