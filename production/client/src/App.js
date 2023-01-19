import React from 'react'
import VideoFeed from './components/VideoFeed'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Navbar />
      <VideoFeed />
    </div>
  )
}

export default App