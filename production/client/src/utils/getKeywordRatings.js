export const getKeywordRatings = async () => {
  console.log("getting keyword ratings")

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
      // success, sets username state
      // const savedVideos = data.savedVideos
      // setUsername(username); 
    } else {
      console.log("Something went wrong");
    }
  } else {
    console.log("You must be logged in to get keyword ratings");
  }

  console.log("Reached end")
}