import React from 'react';
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getVideoDetails } from '../utils/getVideoDetails'
import { getElapsedTime } from '../utils/getElapsedTime'

import Skeleton from '@mui/material/Skeleton';


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
    <div style={{minHeight: '105vh'}}>
      <div className='player-container'>
        <div className='video-player'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" width="100%" height="100%" controls />
    
          <div className='player-details'>
                <div className='player-video-title'>
                  {videoDetails ? (
                    <h2 style={{marginBottom: '15px'}}>{videoDetails?.snippet.title}</h2>
                  ) : (
                    <Skeleton style={{ marginBottom: '-5px' }} variant="text" width='100%' height={50} />
                  )}
                  {videoDetails ? (
                    <div className='player-video-channel'>{videoDetails?.snippet.channelTitle}</div>
                  ) : (
                    <Skeleton variant="text" width='10%' height={30} margin={0} />
                  )}
                </div>
    
                <div className='player-video-description-container'>
                  <div style={{marginBottom: '15px', fontSize: '15px', color: 'lightblue'}}>
                    {videoDetails ? (
                      <div>
                        {getElapsedTime(videoDetails?.snippet.publishedAt)}&nbsp; · &nbsp;
                        {Number(videoDetails?.statistics.viewCount).toLocaleString()} Views
                      </div>
                    ) : (
                      <Skeleton variant="text" width={210} height={30} />
                    )}
                  </div>
                  {videoDetails ? (
                    <div className='player-video-description'>
                      {videoDetails?.snippet.description}
                    </div>
                  ) : (
                    <Skeleton variant="rect" width='100%' height={60} />
                  )}
                </div>
          </div>
    
        </div>
      </div>
    </div>
  )
}

export default WatchVideo