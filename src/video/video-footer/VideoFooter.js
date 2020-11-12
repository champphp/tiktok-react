import React from 'react'
import './VideoFooter.css'

import Ticker from 'react-ticker'
import MusicNoteIcon from '@material-ui/icons/MusicNote'

function VideoFooter({ channel, description, song }) {
  return (
    <div className="video_footer">
      <div className="video_footer__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="video_footer__ticker">
          <MusicNoteIcon className="video_footer__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="video_footer__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  )
}

export default VideoFooter
