import React from 'react'
import { Video, TopicScrollTab, Ratings, SimpleSnackbar, HideOnScroll } from "../components";
import randomWords from 'random-words';
import Button from "@mui/material/Button";
import { isRestricted } from '../utils/contentFilter'
import { SearchContext } from '../hooks/SearchContext';
import Skeleton from '@mui/material/Skeleton';




const VideoFeed = () => {

  const { ...searchProps } = React.useContext(SearchContext);

  let videoElements = searchProps.videos?.map((video, index) => {
    return isRestricted(video)
      ? null
      : <Video key={index} video={video} />
  });


    if (!searchProps.videos) {
      videoElements = [...Array(20)].map(() => (
        <Skeleton className='video-card' variant="rectangular" width={326} height={299} style={{ position: 'relative' }}>
          <Skeleton variant="rectangular" width={50} height={50} style={{ position: 'absolute', top: '10px', left: '10px' }} sx={{ backgroundColor: 'rgba(255, 255, 255, 1)', zIndex: '10'}} />
        </Skeleton>
      ));
    }




  return (
    <>
      
        <div className="topic-scroll">
          <TopicScrollTab selectedTopic={searchProps.selectedTopic} setSelectedTopic={searchProps.setSelectedTopic}/>
        </div>


      <div className='video-feed'>
          {videoElements}
      </div>

        {/* Toggle ratings on/off here */}
        {/* <SimpleSnackbar /> */} 



    </>
  )
}

export default VideoFeed