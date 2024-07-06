import React from 'react'
import video from '../../images/videointro.mp4'

function VideoIntro() {
  return (
    <div className='w-full mb-10 relative'>
    <video className='w-full h-3/4' autoPlay muted loop>
      <source src={video} type='video/mp4' />
    </video>
      <div className=' absolute top-1/2 left-1/2 z-30 bg-blue-600'>
      
      </div>
    </div>
  )
}

export default VideoIntro
