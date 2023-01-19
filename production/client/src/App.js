import React, { useEffect } from 'react'
import { useState } from "react";

import VideoFeed from './components/VideoFeed'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Home, Landing, Login, Signup } from "./components";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
        setUser(JSON.parse(theUser));
      }
    }, []);

  return (
    <BrowserRouter>

      {/* <div className="app">
        <Sidebar />
        <Navbar />
        <VideoFeed />
      </div> */}

    <Routes>
      <Route
      path="/"
      element={user?.email ? <Navigate to="/home" /> : <Landing />}
      />
      <Route
        path="/signup"
        element={user?.email ? <Navigate to="/home" /> : <Signup />}
      />
      <Route
        path="/login"
        element={user?.email ? <Navigate to="/home" /> : <Login />}
      />
      <Route
          path="/home"
          element={user?.email ? <Home user={user} /> : <Navigate to="/" />}
        />
    </Routes>
  </BrowserRouter>



  )
}

export default App