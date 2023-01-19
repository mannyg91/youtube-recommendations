import React from "react";

import VideoFeed from './VideoFeed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


//simple page, with two links
const Landing = () => {
  return (
      <div className="app">
        <Sidebar />
        <Navbar />
        <VideoFeed />
      </div>
  );
};

export default Landing;