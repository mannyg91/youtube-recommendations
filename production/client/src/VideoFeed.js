import React from 'react'
import Video from './Video'

const VideoFeed = () => {

  React.useEffect(() => {
    console.log("Effect ran");

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    fetch('https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
        Feed here:
        <Video />   
        <Video />
        <Video />
    </>
  )
}

export default VideoFeed