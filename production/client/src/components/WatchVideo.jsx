import React from 'react';
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getVideoDetails } from '../utils/getVideoDetails'


//need to run new API fetch for video details
const WatchVideo = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = React.useState({})

  React.useEffect(() => {
    console.log("effect ran")
   
    const getVideos = async () => {
      const data = await getVideoDetails(id);
      setVideoDetails(data.items[0]);
    }
    getVideos();
  }, []);





  return (
    <div className='video-player'>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
{/* 
      <div className='video-details'>
            <div className='video-title'>{videoDetails.snippet.title}</div>
            <div className='channel-title'>{videoDetails.snippet.description}</div>
      </div> */}
    </div>
  )
}

export default WatchVideo