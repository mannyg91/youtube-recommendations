import React, { useState } from 'react';


const KeywordRatingsContext = React.createContext();


const KeywordRatingsContextProvider = (props) => {

  const [keywordRatings, setKeywordRatings] = useState(null);
  
//gets keyword ratings on first render
  React.useEffect(() => {
    console.log("keyword context effect ran")
    // console.log(savedVideos)
    setStats()
    getKeywordRatings()
  }, []);


  async function getKeywordRatings() {
    console.log("getting saved videos")
  
    const token = localStorage.getItem('token')
  
    if (token) {
      const res = await fetch(`${process.env.REACT_APP_DATABASE_API_URL}/user/keywordRatings`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log(data)
        setKeywordRatings(data.keywordRatings)
      } else {
        console.log("Failed to fetch keyword ratings");
      }
    } else {
      console.log("You must be logged in to view keyword ratings");
    }
  }

  async function setStats() {
    console.log("setting keyword stats");
  
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/stats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        console.log("Failed to fetch stats");
      }

  }




  return (
    <KeywordRatingsContext.Provider
      value={{
        keywordRatings,
        setKeywordRatings,
        getKeywordRatings,
      }}
    >
      {props.children}
    </KeywordRatingsContext.Provider>
  );
};

export { KeywordRatingsContextProvider, KeywordRatingsContext };