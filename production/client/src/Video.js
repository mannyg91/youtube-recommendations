import React from 'react'


const Video = ({ data }) => {

  const videoId = data.id.videoId
  const videoTitle = data.snippet.title
  const videoDescription = data.snippet.description
  const thumbnailURL = data.snippet.thumbnails.medium.url
  const thumbnailWidth = data.snippet.thumbnails.medium.width
  const thumbnailHeight = data.snippet.thumbnails.medium.height
  const channelTitle = data.snippet.channelTitle
  const publishTime = data.snippet.publishTime

  return (
    <div>
      <a href={`https://youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer">
        <img width={thumbnailWidth} height={thumbnailHeight} src={thumbnailURL} />
      </a>
      <div>
        <div>
          Thumbnail here
        </div>
        <div>
          {videoTitle}
          {channelTitle}
          {publishTime}
        </div>
      </div>
    </div>
  )
}

export default Video