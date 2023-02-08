export const getSavedVideos = async () => {
    console.log("getting saved videos")

    const token = localStorage.getItem('token')

    if (token) {
      //if found, decodes it
      const user = jwt_decode(token)

      if (!user) {
        //if no user, removes token
        console.log("you must be logged in to save videos")
        return
      } else {
        console.log("in else")
        const id = user.id

        const response = await fetch(`http://localhost:5000/api/user/savedVideos`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      })
      const data = await response.json()

            //confirms user exists
        if (data) {
                //function here?
                console.log(data)
        } else {
          alert('cannot save video')
        }



        console.log(user.id)
      }}

}