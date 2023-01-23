import React from 'react'
import Video from './Video'
import randomWords from 'random-words';

const VideoFeed = () => {
  const [videos, setVideos] = React.useState([]);
  const [randomPhrase, setRandomPhrase] = React.useState("music");

  React.useEffect(() => {
    console.log(randomPhrase);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
      },
    };
    fetch(`https://youtube-v3-alternative.p.rapidapi.com/search?query=${randomPhrase}&geo=US&lang=en&type=video&sort_by=relevance&features=HD`, options)
      .then(response => response.json())
      .then(data => { 
        setVideos(data.data)
        console.log(data);
      })
      .catch(err => console.error(err));
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