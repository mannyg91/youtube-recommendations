import React from 'react'
import Video from './Video'
import TopicDropdown from './TopicDropdown'
import ContentSlider from './ContentSlider'
import randomWords from 'random-words';
import { youtubeSearch } from '../utils/getVideoResults'
import Button from "@mui/material/Button";
import data from './data/testData'
import appTopics  from './data/topics';
import { isRestricted } from '../utils/contentFilter'


const VideoFeed = () => {

  const [videos, setVideos] = React.useState(null); // change null to data.items for testData
  const [searchTerm, setSearchTerm] = React.useState("history");
  const [selectedTopic, setSelectedTopic] = React.useState("/m/04rlf");// music topic
  const [sliderState, setSliderState] = React.useState(2);
  const [focusKeywords, setFocusKeywords] = React.useState(null);


  //need functions here for user to saved videos, will check they are authorized, POST request to db


  React.useEffect(() => {
    const usingTestData = false;
        if (!usingTestData) { 
          const getVideos = async () => {
            const data = await youtubeSearch(searchTerm, selectedTopic.id);
            setVideos(data.items);
          }
          getVideos();
      }
      }, [searchTerm, selectedTopic]);


  React.useEffect(() => {
    setFocusKeywords(appTopics.filter(obj => obj.id === selectedTopic)[0].keywords)
  }, [selectedTopic])

  
  function getRandomPhrase() {
    setSearchTerm(randomWords({min: 1, max: 1, join: ' ' }));
  }

  function getFocusedPhrase() {
    const focusPhrase = focusKeywords[Math.floor(Math.random() * focusKeywords.length)];
    setSearchTerm(focusPhrase)
  }

  function getMiddlePhrase() {
    if (Math.random() < 0.5) {
      getRandomPhrase()
    } else {
      getFocusedPhrase()
    }
  }


  function handleSpin() {
    console.log(sliderState)
    console.log(focusKeywords)
    if (sliderState === 3 ) {
      getFocusedPhrase()
    } else if (sliderState === 2) {
      getMiddlePhrase()
    } else {
      getRandomPhrase()
    }
  }



  let videoElements = videos?.map((video, index) => {
    return isRestricted(video)
      ? null
      : <Video key={index} video={video} />
  });

  return (
    <div className='wrapper'>
      <div className='controls'>
        <div className='top-section'>
          <div className='random-search'>
            Search: <strong style={{fontSize: '32px'}}>{searchTerm}</strong>
          
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
          <TopicDropdown selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
          <ContentSlider sliderState={sliderState} setSliderState={setSliderState} />
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