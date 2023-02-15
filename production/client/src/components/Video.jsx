import React from 'react'
import { Link } from "react-router-dom";
import { useHover } from '../hooks/useHover';
import { LoginContext } from '../hooks/LoginContext';
import { SavedContext } from '../hooks/SavedContext';


const Video = ({ video }) => {
  const [hovered, ref] = useHover()
  const { savedVideos, getSavedVideos } = React.useContext(SavedContext);
  const { isLoggedIn } = React.useContext(LoginContext);



  const videoTitle = video.snippet.title
  const thumbnailURL = video.snippet.thumbnails.high.url;
  // const thumbnailWidth = video.thumbnail[video.thumbnail.length - 1].width;
  // const thumbnailHeight = video.thumbnail[video.thumbnail.length - 1].height;
  const thumbnailWidth = video.snippet.thumbnails.high.width * .68;
  const thumbnailHeight = video.snippet.thumbnails.high.height * .68;
  const channelTitle = video.snippet.channelTitle;

  const [videoId, setVideoId] = React.useState(video?.id.videoId)
  const [saved, setSaved] = React.useState(false)

  React.useEffect(() => {
    setVideoId(video?.id.videoId)
  }, [video])

  React.useEffect(() => {
    setSaved(savedVideos?.some(savedVideo => savedVideo.videoId === videoId))
  }, [videoId])

  React.useEffect(() => {
    saveIcon()
  }, [setSaved])


  function saveIcon() {
    //will be used to check if the id is saved:

    if (saved) {
      //will have an on click function
      return <i className="ri-bookmark-fill favorite" onClick={unsaveVideo}></i>
    } else if (hovered) {
      //will have an on click function
      return <i className="ri-bookmark-line favorite" onClick={saveVideo}></i>
    }
  }


  async function saveVideo() {
    if (isLoggedIn) {
      setSaved(true)

      // tries to grab token
      const token = localStorage.getItem('token')

      //if token, makes get request
      if (token) {
        const res = await fetch(`${process.env.REACT_APP_DATABASE_API_URL}/user/savedVideos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          //payload
          body: JSON.stringify({
            video,
          }),
        });

        const data = await res.json();

        if (data) {
          console.log("video saved")
        } else {
          alert('cannot save video')
        }
      }
    } else {
      console.log("you are not logged in")
    }


  }

  async function unsaveVideo() {
    // tries to grab token
    setSaved(false)
    const token = localStorage.getItem('token')

    //if token, makes get request
    if (token) {
      const res = await fetch(`${process.env.REACT_APP_DATABASE_API_URL}/user/savedVideos/${videoId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      const data = await res.json();

      if (data) {
        console.log(data)
        console.log("video deleted")

      } else {
        alert('cannot delete video')
      }

    } else {
      console.log("You must be logged in to save videos")
    }

  }



  return (
    <div className='video-card' style={{ width: thumbnailWidth }} ref={ref}>
      <div className='thumbnail' style={{ height: "calc(100% - px)" }}>
        {/* <a href={`https://youtube.com/watch?v=${videoId}`} target="_blank" rel="noreferrer"></a> */}
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
          <img width="95%" height={thumbnailHeight * .98} src={thumbnailURL} alt={videoTitle}
            style={{ clipPath: "inset(31px 0px 31px 0px round 20px)", marginTop: "-24px" }}
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