import React, { useState } from 'react';
import { LoginContext } from '../hooks/LoginContext';

const KeywordRatingsContext = React.createContext();


const KeywordRatingsContextProvider = (props) => {

  const { username } = React.useContext(LoginContext);

  const [keywordRatings, setKeywordRatings] = useState(null);
  
//gets keyword ratings on first render
  React.useEffect(() => {
    console.log("keyword context effect ran")
    // console.log(savedVideos)
    setStats()
    getKeywordRatings()
  }, [username]);


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
  
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/user/stats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log('Data:', data);
      } else {
        console.log("Failed to fetch stats");
      }
    } catch (err) {
      console.log("Error fetching stats", err);
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