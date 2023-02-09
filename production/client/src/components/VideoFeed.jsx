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

  const { ...props } = React.useContext(SearchContext);
  console.log(props)

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
    props.setSearchTerm(randomWords({min: 1, max: 1, join: ' ' }));
  }

  function getFocusedPhrase() {
    const focusPhrase = props.focusKeywords[Math.floor(Math.random() * props.focusKeywords.length)];
    props.setSearchTerm(focusPhrase)
  }

  function getMiddlePhrase() {
    if (Math.random() < 0.5) {
      getRandomPhrase()
    } else {
      getFocusedPhrase()
    }
  }


  function handleSpin() {
    console.log(props.sliderState)
    console.log(props.focusKeywords)
    if (props.sliderState === 3 ) {
      getFocusedPhrase()
    } else if (props.sliderState === 2) {
      getMiddlePhrase()
    } else {
      getRandomPhrase()
    }
  }



  let videoElements = props.videos?.map((video, index) => {
    return isRestricted(video)
      ? null
      : <Video key={index} video={video} />
  });

  return (
    <div className='wrapper'>
      <div className='controls'>
        <div className="topic-scroll">
          <TopicScrollTab selectedTopic={props.selectedTopic} setSelectedTopic={props.setSelectedTopic}/>
        </div>
        <div className='top-section'>
          <div className='random-search'>
            Search: <strong style={{fontSize: '32px'}}>{props.searchTerm}</strong>
          
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

          <TopicDropdown selectedTopic={props.selectedTopic} setSelectedTopic={props.setSelectedTopic} />
          <ContentSlider sliderState={props.sliderState} setSliderState={props.setSliderState} />
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