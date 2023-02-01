import React from 'react';
import ReactPlayer from "react-player";

const WatchVideo = (props) => {
  return (
    <ReactPlayer url={`https://www.youtube.com/watch?v=${props.id}`} className="react-player" controls />
  )
}

export default WatchVideo