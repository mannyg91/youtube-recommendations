import React from 'react'
import { Link } from "react-router-dom"; 
import { useHover } from '../hooks/useHover';

const Video = ({ video }) => {
  const [hovered, ref] = useHover()

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


  let alreadySaved = false;

  function saveIcon() {
    //will be used to check if the id is saved:
    // const alreadySaved = savedItems.some(item => item.id === video.id) 

    if(alreadySaved) {
        //will have an on click function
        return <i className="ri-bookmark-fill favorite"></i>
      } else if (hovered) {
        //will have an on click function
        return <i className="ri-bookmark-line favorite"></i>
      }
  }


  return (
        <div className='video-card' style={{width: thumbnailWidth}} ref={ref}>
          <div className='thumbnail' style= {{height: "calc(100% - px)"}}>
            {/* <a href={`https://youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer"></a> */}
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
              <img width="95%" height={thumbnailHeight * .98} src={thumbnailURL} alt={videoTitle} 
                style={{clipPath: "inset(31px 0px 31px 0px round 20px)", marginTop: "-24px"}} 
              />
            </Link>
            {saveIcon()}
          </div>
          <div className='video-details'>
            <div className='video-title'>
              {videoTitle
                .replace(/&#39;/g, "'")
                .replace(/&quot;/g, '"')
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
              }
            </div>
            <div className='channel-title'>{channelTitle}</div>
          </div>
          {/* {publishTime} */}
        </div>
  )
}




export default Video