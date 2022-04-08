import React from 'react'

export default function VideoCard({videoLink}) {
  return (
    <>
        <div className="videosCard">
            <iframe className="v_link" src={videoLink}></iframe>
        </div>
    </>
  )
}
