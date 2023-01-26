import React from 'react'


const Video = ({ video }) => {

  const videoId = video.id.videoId
  const videoTitle = video.snippet.title
  const videoDescription = video.snippet.description

  const thumbnailURL = video.snippet.thumbnails.medium.url;
  // const thumbnailWidth = video.thumbnail[video.thumbnail.length - 1].width;
  // const thumbnailHeight = video.thumbnail[video.thumbnail.length - 1].height;
  const thumbnailWidth = video.snippet.thumbnails.medium.width
  const thumbnailHeight = video.snippet.thumbnails.medium.height

  const channelTitle = video.snippet.channelTitle;
  const publishTime = video.snippet.publishTime;

  return (
        <div className='video-card'>
          <a href={`https://youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">
            <img width={thumbnailWidth} height={thumbnailHeight} src={thumbnailURL} alt={videoTitle} 
              style={{borderRadius: '20px'}} />
          </a>
          <div className='video-details'>
            <div className='video-title'>{videoTitle}</div>
            <div className='channel-title'>{channelTitle}</div>
          </div>
          {/* {publishTime} */}
        </div>
  )
}

export default Video