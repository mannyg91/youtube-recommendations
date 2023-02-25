import React from 'react';
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { getVideoDetails } from '../utils/getVideoDetails'
import { getElapsedTime } from '../utils/getElapsedTime'
import { SavedContext } from '../hooks/SavedContext';
import { useHover } from '../hooks/useHover';
import { LoginContext } from '../hooks/LoginContext';
import Snackbar from '@mui/material/Snackbar';


import Skeleton from '@mui/material/Skeleton';

import YouTubeIcon from '@mui/icons-material/YouTube';


const WatchVideo = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = React.useState(null)
  const { savedVideos, getSavedVideos } = React.useContext(SavedContext);
  const { isLoggedIn } = React.useContext(LoginContext);
  const [saved, setSaved] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");



  React.useEffect(() => {
    console.log("effect ran", id)

   
    const getVideos = async () => {
      const data = await getVideoDetails(id);
      setVideoDetails(data?.items[0]);
      console.log(videoDetails)
    }
    getVideos();
  }, []);



  // React.useEffect(() => {
  //   setVideoId(video?.id.videoId);
  // }, [video]);

  React.useEffect(() => {
    console.log(id)
    setSaved(savedVideos?.some(savedVideo => savedVideo.videoId === id));
  }, []);

  function handleSaveVideo() {

    const video = JSON.parse(localStorage.getItem('clickedSearchResult'));

    console.log('id', id)
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
        const method = saved ? "DELETE" : "POST";
        const url = saved ? `${process.env.REACT_APP_DATABASE_API_URL}/user/savedVideos/${id}` : `${process.env.REACT_APP_DATABASE_API_URL}/user/savedVideos`;
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
      return <i className="ri-bookmark-fill player-favorite" onClick={handleSaveVideo}></i>
    } else {
      return <i className="ri-bookmark-line player-favorite" onClick={handleSaveVideo}></i>
    }
  }


  
  return (
<>
      <div className='watch_player-container'>
        <div className='watch_video-player'>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" width="100%" height="100%" controls />
    
          <div className='player-details'>
                <div className='player-video-title'>
                  {videoDetails ? (
                    <h2 style={{marginBottom: '15px'}}>{videoDetails?.snippet.title}</h2>
                  ) : (
                    <Skeleton style={{ marginBottom: '-5px' }} variant="text" width='100%' height={50} />
                  )}
                  {videoDetails ? (
                    <div className="player-video-channel-container">
                      <div className='player-video-channel'>{videoDetails?.snippet.channelTitle}</div>
                      <div> {saveIcon()}</div>
                    </div>
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
        </>

  )
}

export default WatchVideo