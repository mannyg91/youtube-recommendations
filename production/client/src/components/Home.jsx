import React from "react";

import VideoFeed from './VideoFeed'
import Navbar from './Navbar'


// Pass User
const Home = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="app">
      {/* <h1>Hi {user?.email}</h1>
      <p>You are logged in.</p>
      <div>
        <button onClick={logout}>Logout</button>
      </div> */}
      <VideoFeed />
    </div>
  );
};

export default Home;