import React from 'react';
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getVideoDetails } from '../utils/getVideoDetails'


//need to run new API fetch for video details
const WatchVideo = () => {
  const { id } = useParams();
  let videoDetails = {}

  React.useEffect(() => {
    console.log("effect ran")
   
    const getVideos = async () => {
      const data = await getVideoDetails(id);
      videoDetails = data;
      console.log(videoDetails)
    }

    getVideos();
  }, []);


  return (
    <div className='video-player'>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
    </div>
  )
}

export default WatchVideo