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
    <div className='saved-videos'>
      <h1 style={{position: 'inherit', marginTop: '140px', marginLeft:'10vw', padding:'24px'}}>Saved Videos</h1>
      <div style={{marginTop: '20px'}} className='video-feed'>
        {videoElements}
      </div>
    </div>
  )
}

export default SavedVideos