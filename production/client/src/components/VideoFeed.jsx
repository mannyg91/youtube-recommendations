import React from 'react'
import Video from './Video'
import randomWords from 'random-words';
import { youtubeSearch } from '../utils/youtubeSearch'
import data from './data/testData'

const VideoFeed = () => {

  const usingTestData = true;

  const [videos, setVideos] = React.useState(data.items);
  const [randomPhrase, setRandomPhrase] = React.useState("music");


  React.useEffect(() => {
        if (!usingTestData) { 
          const getVideos = async () => {
            const data = await youtubeSearch(randomPhrase);
            setVideos(data.items);
            console.log(data.items)
          }
          getVideos();
      }
      }, [randomPhrase]);


  
  function getRandomPhrase() {
    setRandomPhrase(randomWords({min: 1, max: 2, join: ' ' }));
  }


  let videoElements = videos.map((video, index) =>
  //can put own logic here (filter out certain types of videos, etc.)
    <Video key={index} video={video} />
  );

  return (
    <>
      <div style={{marginLeft: '500px', marginBottom: '20px'}}>
        Search: <strong style={{display: 'block', fontSize: '32px'}}>{randomPhrase}</strong>
        <button style={{display: 'block', marginTop: '10px', marginBottom: '30px'}} onClick={getRandomPhrase} >Random Search</button>
      </div>
      <div className='videoFeed'>
          {videoElements}
      </div>
    </>
  )
}

export default VideoFeed