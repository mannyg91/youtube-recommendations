import React from 'react'
import Video from './Video'
import TopicDropdown from './TopicDropdown'
import ContentSlider from './ContentSlider'
import randomWords from 'random-words';
import { youtubeSearch } from '../utils/getVideoResults'
import data from './data/testData'


const VideoFeed = () => {

  const [videos, setVideos] = React.useState(null);
  const [randomPhrase, setRandomPhrase] = React.useState("history");
  const [selectedTopic, setSelectedTopic] = React.useState("/m/04rlf");//music topic
  const [sliderState, setSliderState] = React.useState(2);


  React.useEffect(() => {
    const usingTestData = false;
        if (!usingTestData) { 
          const getVideos = async () => {
            const data = await youtubeSearch(randomPhrase, selectedTopic);
            setVideos(data.items);
          }
          getVideos();
      }
      }, [randomPhrase, selectedTopic]);


  
  function getRandomPhrase() {
    setRandomPhrase(randomWords({min: 1, max: 1, join: ' ' }));
  }

  function handleSpin() {
    if (sliderState === 1 ) {
      getRandomPhrase()
    } else if (sliderState === 3) {

    }

    console.log("spinned")
  }


  const handleSlider = (event, newValue) => {
    console.log("slider moved")
    console.log(event)
    console.log(newValue)
  }


  let videoElements = videos?.map((video, index) =>
  //can put own logic here (filter out certain types of videos, etc.)
    <Video key={index} video={video} />
  );

  return (
    <>
      <div className='controls'>

        <div className='top-section'>

          <TopicDropdown selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />

          <div className='random-search'>
            Search: <strong style={{fontSize: '32px'}}>{randomPhrase}</strong>
            <button style={{width: '100px', marginTop: '10px', marginBottom: '30px'}} onClick={handleSpin}>Spin</button>
          </div>


        </div>

        <ContentSlider sliderState={sliderState} handleSlider={handleSlider} />
      </div>
      {/* <WatchVideo id="Gj7a8dZB_5U" /> */}
      <div className='video-feed'>
          {videoElements}
      </div>

    </>
  )
}

export default VideoFeed