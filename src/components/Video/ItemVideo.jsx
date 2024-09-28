import React, { useRef, useState } from 'react'

function ItemVideo({linkImage, linkVideo, name}) {
    const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
        
  {!isPlaying && (
  
    <div className="cursor-pointer w-full relative overflow-hidden block" onClick={handlePlay} >
   
      <div className=' absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <div className=" w-20 h-20 leading-20 text-center rounded-full relative text-blue-500 animate-rippleblue transition duration-500 bg-green-500 text-2xl z-40 cursor-pointer flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-11 h-11 text-white">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>

        </div>
      </div>
      <img src={linkImage} alt="Thumbnail" className="object-cover hover:scale-125 transition duration-1000" />
      <h2 className='text-white font-semibold font-pop text-xl uppercase w-full bg-yellow-600'>{name}</h2>
    </div>
    
  )}
  {isPlaying && (
 
    <div className='absolute z-[50] left-0 w-full' >
          <button className='absolute rounded-full z-10 p-2 bg-slate-100 right-0 cursor-pointer' onClick={() =>{setIsPlaying(false)}} >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>

          </button>
          <div className=''>
              <video
                ref={videoRef}
                src={linkVideo}
                autoPlay
                controls
              />
          </div>
      </div>
  
    
  )}
              </div>
           
  )
}

export default ItemVideo
