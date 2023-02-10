export const getSavedVideos = async () => {
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
      console.log(data)
      // success, sets username state
      // const savedVideos = data.savedVideos
      // setUsername(username); 
    } else {
      console.log("This video has already been saved");
    }
  } else {
    console.log("You must be logged in to save videos");
  }

  console.log("Reached end")
}