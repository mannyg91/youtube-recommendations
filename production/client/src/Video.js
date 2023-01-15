import React from 'react'


const Video = ({ data }) => {
  return (
    <li>{data.snippet.description}</li>
  )
}

export default Video