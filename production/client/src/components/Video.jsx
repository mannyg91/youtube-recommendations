import React from 'react'
import { Link } from "react-router-dom"; 

const Video = ({ video }) => {

  const videoId = video.id.videoId
  const videoTitle = video.snippet.title
  const videoDescription = video.snippet.description

  const thumbnailURL = video.snippet.thumbnails.high.url;
  // const thumbnailWidth = video.thumbnail[video.thumbnail.length - 1].width;
  // const thumbnailHeight = video.thumbnail[video.thumbnail.length - 1].height;
  const thumbnailWidth = video.snippet.thumbnails.high.width * .68;
  const thumbnailHeight = video.snippet.thumbnails.high.height * .68;

  const channelTitle = video.snippet.channelTitle;
  const publishTime = video.snippet.publishTime;

  return (
        <div className='video-card' style={{width: thumbnailWidth}}>
          <div className='thumbnail' style= {{height: "calc(100% - px)"}}>
            {/* <a href={`https://youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer"></a> */}
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
              <img width="95%" height={thumbnailHeight * .98} src={thumbnailURL} alt={videoTitle} 
                style={{clipPath: "inset(34px 0px 34px 0px round 20px)", marginTop: "-26px"}} />
            </Link>
          </div>
          <div className='video-details'>
            <div className='video-title'>{videoTitle}</div>
            <div className='channel-title'>{channelTitle}</div>
          </div>
          {/* {publishTime} */}
        </div>
  )
}




export default Video