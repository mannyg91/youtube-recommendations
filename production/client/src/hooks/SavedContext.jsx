import React, { useState } from 'react';


const SavedContext = React.createContext();


const SavedContextProvider = (props) => {

  const [savedVideos, setSavedVideos] = useState(null);

  React.useEffect(() => {
    console.log(savedVideos)

  }, [savedVideos]);


  async function getSavedVideos() {
    console.log("getting saved videos")
  
    const token = localStorage.getItem('token')
  
    if (token) {
      const res = await fetch(`http://localhost:5000/api/user/savedVideos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (res.ok) {
        const data = await res.json();
        setSavedVideos(data.savedVideos)
      } else {
        console.log("This video has already been saved");
      }
    } else {
      console.log("You must be logged in to save videos");
    }
  
  }


  return (
    <SavedContext.Provider
      value={{
        savedVideos,
        setSavedVideos,
        getSavedVideos,
      }}
    >
      {props.children}
    </SavedContext.Provider>
  );
};

export { SavedContextProvider, SavedContext };