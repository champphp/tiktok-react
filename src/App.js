import React from 'react'
import './App.css';

import Video from './video/Video'

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video 
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" 
          channel="sssOne"
          description="Learn the MERN Stack - Full Tutorial for Beginners"
          song="Take on me"
          likes={111}
          messages={200}
          shares={20}
        />
        <Video 
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" 
          channel="ssssTow"
          description="React Material ready to use from the official website"
          song="Black in black"
          likes={200}
          messages={500}
          shares={100}
        />
      </div>
      {/* app container */}
      {/* videos */}
    </div>
  );
}

export default App;
