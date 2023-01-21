import React from 'react'


const Video = ({ video }) => {

  const videoId = video.videoId
  const videoTitle = video.title
  const videoDescription = video.description

  const thumbnailURL = video.thumbnail[video.thumbnail.length - 1].url;
  // const thumbnailWidth = video.thumbnail[video.thumbnail.length - 1].width;
  // const thumbnailHeight = video.thumbnail[video.thumbnail.length - 1].height;
  const thumbnailWidth = 360
  const thumbnailHeight = 202

  const channelTitle = video.channelTitle;
  const publishTime = video.publishedText;

  return (
    <div>
      <a href={`https://youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">
        <img width={thumbnailWidth} height={thumbnailHeight} src={thumbnailURL} alt={videoTitle} />
      </a>
      <div>
        <div>
          <div><strong>{videoTitle}</strong></div>
          {channelTitle}
          {/* {publishTime} */}
        </div>
      </div>
    </div>
  )
}

export default Video