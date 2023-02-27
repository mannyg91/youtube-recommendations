import React from 'react'
import { LoginContextProvider } from './hooks/LoginContext';

import { Navbar, VideoFeed, WatchVideo, SavedVideos, ResetPassword, About } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SavedContextProvider } from './hooks/SavedContext';
import { SearchContextProvider } from './hooks/SearchContext';
import { KeywordRatingsContextProvider } from './hooks/KeywordRatingsContext';


const App = () => {
  // const [user, setUser] = useState({})

  // useEffect(() => {
  //   const theUser = localStorage.getItem("user");

  //   if (theUser && !theUser.includes("undefined")) {
  //     setUser(JSON.parse(theUser));
  //   }
  // }, []);

  // React.useEffect(() => {
  //   //load gapi client
  //  loadClient();
  // }, []);

  return (
    <LoginContextProvider>
      <SearchContextProvider>
      <KeywordRatingsContextProvider>
      <SavedContextProvider>
        <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
            <Routes>
              <Route
                path="/"
                element={<div className='page-wrapper'><Navbar /><VideoFeed/></div>}
              />
              <Route
                path='/video/:id' 
                element={<><Navbar /><WatchVideo /></>} 
              />
              <Route
                path='/saved-videos' 
                element={<><Navbar /><SavedVideos /></>} 
              />
              <Route
                path='/about' 
                element={<><Navbar /><About /></>} 
              />
              <Route
                path='/reset-password' 
                element={<ResetPassword />} 
              />


            </Routes>
    
        </BrowserRouter>
      </SavedContextProvider>
      </KeywordRatingsContextProvider>
      </SearchContextProvider>
    </LoginContextProvider>


  )
}

export default App