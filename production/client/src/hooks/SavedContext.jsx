import React, { useState } from 'react';


const SavedContext = React.createContext();


const SavedContextProvider = (props) => {

  const [savedVideos, setSavedVideos] = useState(null);
  

  React.useEffect(() => {
    console.log("context effect ran")
    // console.log(savedVideos)
    getSavedVideos()
  }, []);


  async function getSavedVideos() {
    console.log("getting saved videos")
  
    const token = localStorage.getItem('token')
  
    if (token) {
      const res = await fetch(`${process.env.REACT_APP_DATABASE_API_URL}/user/savedVideos`, {
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
        console.log("Failed to fetch saved videos");
      }
    } else {
      console.log("You must be logged in to view saved videos");
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