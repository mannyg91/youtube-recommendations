import React from 'react'
import { Link } from "react-router-dom";
import { useHover } from '../hooks/useHover';
import { LoginContext } from '../hooks/LoginContext';
import { SavedContext } from '../hooks/SavedContext';
import Snackbar from '@mui/material/Snackbar';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from '@mui/material/IconButton';

const Video = ({ video }) => {
  const [hovered, ref] = useHover();
  const { savedVideos, getSavedVideos, clickedSearchResult, setClickedSearchResult } = React.useContext(SavedContext);
  const { isLoggedIn } = React.useContext(LoginContext);
  const [videoId, setVideoId] = React.useState(video?.id.videoId);
  const [saved, setSaved] = React.useState(false);

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  const videoTitle = video.snippet.title;
  const thumbnailURL = video.snippet.thumbnails.high.url;
  const thumbnailWidth = video.snippet.thumbnails.high.width * .62;
  const thumbnailHeight = video.snippet.thumbnails.high.height * .62;
  const channelTitle = video.snippet.channelTitle;

  React.useEffect(() => {
    setVideoId(video?.id.videoId);
  }, [video]);

  React.useEffect(() => {
    setSaved(savedVideos?.some(savedVideo => savedVideo.videoId === videoId));
  }, [videoId]);

  function handleVideoClick() {
    localStorage.setItem('clickedSearchResult', JSON.stringify(video));
  }

  function handleSaveVideo() {
    console.log('videoId', videoId)
    console.log('stringify', JSON.stringify(video));

    if (isLoggedIn) {
      setSaved(!saved);
      if (!saved) {
        setSnackbarMessage("Video saved to bookmarks");
      } else {
        setSnackbarMessage("Video removed from bookmarks");
      }
      setSnackbarOpen(true);

      // tries to grab token
      const token = localStorage.getItem('token')

      //if token, makes get request
      if (token) {
        console.log('video', video)
        const method = saved ? "DELETE" : "POST";
        const url = saved ? `${process.env.REACT_APP_DATABASE_API_URL}/user/savedVideos/${videoId}` : `${process.env.REACT_APP_DATABASE_API_URL}/user/savedVideos`;
        fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            video,
          }),
        }).then((res) => {
          if (res.ok) {
            getSavedVideos();
          } else {
            console.log("Error saving video");
          }
        });
      }
    } else {
      setSnackbarMessage("You must be logged in to save videos");
      setSnackbarOpen(true);
    }
  }

  function handleSnackbarClose() {
    setSnackbarOpen(false);
  }

  function saveIcon() {
    if (saved) {
      return <i className="ri-bookmark-fill favorite" onClick={handleSaveVideo}></i>
    } else {
      return <i className="ri-bookmark-line favorite" onClick={handleSaveVideo}></i>
    }
  }

  return (
    <div className='video-card' style={{ width: thumbnailWidth }} ref={ref}>
      <div className='thumbnail' style={{ height: "calc(100% - px)" }}>
        <Link to={`/video/${videoId ?? 'cV2gBU6hKfY'}`} onClick={handleVideoClick}>
          <img className='exclude' width="96%" height={thumbnailHeight * .98} src={thumbnailURL} alt={videoTitle}
            style={{ clipPath: "inset(28px 0px 28px 0px round 16px)", marginTop: "-22px" }}
          />
        </Link>


        <Link to={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
          <YouTubeIcon className="video-youtube-icon" />
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
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </div>
  )
}

export default Video