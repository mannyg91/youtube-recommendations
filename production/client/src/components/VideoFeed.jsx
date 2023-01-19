import React from 'react'
import Video from './Video'

const VideoFeed = () => {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    console.log("Effect ran");
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
    };
    fetch('https://youtube138.p.rapidapi.com/search?part=snippet&q=music&regionCode=US&maxResults=10', options)
      .then(response => response.json())
      .then(data => { 
        setVideos(data.items)
        console.log(data);
      })
      .catch(err => console.error(err));
  }, []);

  let videoElements = videos.map((video, index) =>
    <Video key={index} data={video} />
  );

  return (
    <>
        Feed here:
        {videoElements}
    </>
  )
}

export default VideoFeed