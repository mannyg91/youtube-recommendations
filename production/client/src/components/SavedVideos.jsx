import React from 'react'
import Video from './Video'
import { SavedContext } from '../hooks/SavedContext';

const SavedVideos = () => {

  const { savedVideos, getSavedVideos } = React.useContext(SavedContext);

  React.useEffect(() => {
    getSavedVideos()
  }, []);



  let videoElements = savedVideos?.map((video, index) => {
    return <Video key={index} video={video.video} />
  });


  return (
    <div className='saved-videos' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{position: 'inherit', marginTop:'150px', padding:'24px'}}>Saved Videos</h1>
      <div style={{marginTop: '40px'}} className='video-feed'>
        {videoElements?.length > 0 ? videoElements : "No Saved Videos"}
      </div>
    </div>
  )
}

export default SavedVideos