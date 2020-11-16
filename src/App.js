import React, { useEffect, useState } from 'react'
import './App.css';

import Video from './video/Video'
import axios from './axios'

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get('/v2/posts')
      setVideos(resp.data)
    }

    fetchPosts()
  }, [])
  return (
    <div className="App">
      <div className="app_videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares}, index) => (
          <Video
            key={index}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
