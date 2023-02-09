import React from 'react'
import Video from './Video'
import { SavedContext } from '../hooks/SavedContext';

const SavedVideos = () => {

  const { savedVideos, getSavedVideos } = React.useContext(SavedContext);

  React.useEffect(() => {
    getSavedVideos()

  }, []);



  let videoElements = savedVideos?.map((video, index) => {
    return <Video key={index} video={video} />
  });


  return (
    <div className='wrapper'>
      <h1 style={{marginTop: '100px', marginLeft:'10%', padding:'24px'}}>Saved Videos</h1>
      <div className='video-feed'>
        {videoElements}
      </div>
    </div>
  )
}

export default SavedVideos