import React from "react";

import VideoFeed from './VideoFeed'
import Navbar from './Navbar'


//simple page, with two links
const Landing = () => {
  return (
      <div className="app">
        <Navbar />
        <VideoFeed />
      </div>
  );
};

export default Landing;