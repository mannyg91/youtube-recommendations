import React from 'react'
import Video from './Video'
import TopicDropdown from './TopicDropdown'
import ContentSlider from './ContentSlider'
import randomWords from 'random-words';
import { youtubeSearch } from '../utils/getVideoResults'
import data from './data/testData'


const VideoFeed = () => {

  const [videos, setVideos] = React.useState(data.items);
  const [randomPhrase, setRandomPhrase] = React.useState("history");
  const [selectedTopic, setSelectedTopic] = React.useState("/m/04rlf");//music topic


  React.useEffect(() => {
    const usingTestData = true;
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


  let videoElements = videos.map((video, index) =>
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
            <button style={{width: '100px', marginTop: '10px', marginBottom: '30px'}} onClick={getRandomPhrase}>New search!</button>
          </div>
          <ContentSlider />
        </div>

        
      </div>
      {/* <WatchVideo id="Gj7a8dZB_5U" /> */}
      <div className='video-feed'>
          {videoElements}
      </div>

    </>
  )
}

export default VideoFeed