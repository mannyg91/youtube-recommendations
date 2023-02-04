import React, { useEffect } from 'react'
import { useState } from "react";
import Link from 'react';

import { Login, Signup, Navbar, VideoFeed, WatchVideo } from "./components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  // const [user, setUser] = useState({})

  // useEffect(() => {
  //   const theUser = localStorage.getItem("user");

  //   if (theUser && !theUser.includes("undefined")) {
  //     setUser(JSON.parse(theUser));
  //   }
  // }, []);

  return (
    
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            // element={user?.email ? <Navigate to="/home" /> : <VideoFeed />}
            element={<VideoFeed/>}
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
            element={<WatchVideo />} 
          />
        </Routes>
 
    </BrowserRouter>


  )
}

export default App