import React from 'react';
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getVideoDetails } from '../utils/getVideoDetails'
import { getElapsedTime } from '../utils/getElapsedTime'


//need to run new API fetch for video details
const WatchVideo = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = React.useState(null)

  React.useEffect(() => {
    console.log("effect ran")
   
    const getVideos = async () => {
      const data = await getVideoDetails(id);
      setVideoDetails(data?.items[0]);
    }
    getVideos();
  }, []);

  
  return (
    <div className='player-container'>
      <div className='video-player'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" width="100%" height="100%" controls />
  
        <div className='player-details'>
              <div className='player-video-title'>
                <h2>{videoDetails?.snippet.title}</h2>
                <div>{getElapsedTime(videoDetails?.snippet.publishedAt)}</div>
                <div className='player-video-channel'>{videoDetails?.snippet.channelTitle}</div>
              </div>
              <div>{videoDetails?.snippet.publishedAt}</div>
              <div>{videoDetails?.statistics.viewCount} Views {videoDetails?.statistics.likeCount} Likes</div>
              <div className='player-video-channel'>{videoDetails?.snippet.channelTitle}</div>
              <div className='player-video-description'>{videoDetails?.snippet.description}</div>
        </div>

      </div>
    </div>
  )
}

export default WatchVideo