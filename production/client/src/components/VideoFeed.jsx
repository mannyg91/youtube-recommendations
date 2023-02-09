import React from 'react'
import Video from './Video'
import TopicDropdown from './TopicDropdown'
import TopicScrollTab from './TopicScrollTab'
import ContentSlider from './ContentSlider'
import randomWords from 'random-words';
import Button from "@mui/material/Button";
import { isRestricted } from '../utils/contentFilter'
import { SearchContext } from '../hooks/SearchContext';




const VideoFeed = () => {

  const { ...searchProps } = React.useContext(SearchContext);
  console.log(searchProps)

  // videos,
  // setVideos,
  // searchTerm,
  // setSearchTerm,
  // selectedTopic,
  // setSelectedTopic,
  // sliderState,
  // setSliderState,
  // focusKeywords,
  // setFocusKeywords


  function getRandomPhrase() {
    searchProps.setSearchTerm(randomWords({min: 1, max: 1, join: ' ' }));
  }

  function getFocusedPhrase() {
    const focusPhrase = searchProps.focusKeywords[Math.floor(Math.random() * searchProps.focusKeywords.length)];
    searchProps.setSearchTerm(focusPhrase)
  }

  function getMiddlePhrase() {
    if (Math.random() < 0.5) {
      getRandomPhrase()
    } else {
      getFocusedPhrase()
    }
  }


  function handleSpin() {
    console.log(searchProps.sliderState)
    console.log(searchProps.focusKeywords)
    if (searchProps.sliderState === 3 ) {
      getFocusedPhrase()
    } else if (searchProps.sliderState === 2) {
      getMiddlePhrase()
    } else {
      getRandomPhrase()
    }
  }



  let videoElements = searchProps.videos?.map((video, index) => {
    return isRestricted(video)
      ? null
      : <Video key={index} video={video} />
  });

  return (
    <div className='wrapper'>
      <div className='controls'>
        <div className="topic-scroll">
          <TopicScrollTab selectedTopic={searchProps.selectedTopic} setSelectedTopic={searchProps.setSelectedTopic}/>
        </div>
        <div className='top-section'>
          <div className='random-search'>
            Search: <strong style={{fontSize: '32px'}}>{searchProps.searchTerm}</strong>
          
            <Button
              sx={{ 
                  background: '#F0F8FF',
                  m: '15px 0px 30px',
                  width: '136px',
                  fontSize: '14px',
                  borderRadius: '8px'
                }}
              id="submit-btn"
              type="submit"
              variant="outlined"
              onClick={handleSpin}>
              Spin
            </Button>

          </div>
        </div>

        <div className='bottom-section'>

          {/* <TopicDropdown selectedTopic={searchProps.selectedTopic} setSelectedTopic={searchProps.setSelectedTopic} /> */}
          <ContentSlider sliderState={searchProps.sliderState} setSliderState={searchProps.setSliderState} />
        </div>

        
      </div>
      {/* <WatchVideo id="Gj7a8dZB_5U" /> */}
      <div className='video-feed'>
          {videoElements}
      </div>
    </div>
  )
}

export default VideoFeed