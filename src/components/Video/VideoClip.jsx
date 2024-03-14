import React, { useState, useRef } from 'react';

import clipMV1 from '../../images/mv.mp4'
import clipMV2 from '../../images/mv2.mp4'
import clipMV3 from '../../images/mv3.mp4'
import imgMV1 from '../../images/mv1.jpg'
import imgMV2 from '../../images/mv2.jpg'
import imgMV3 from '../../images/mv3.jpg'


const VideoClip = () => {
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const handlePlay1 = () => {
    setIsPlaying1(true);
  };

  const handlePlay2 = () => {
    setIsPlaying2(true);
  };
  const handlePlay3 = () => {
    setIsPlaying3(true);
  };
  

  return (
    <div className='relative mt-10 grid md:grid-cols-7 sm:grid-cols-2 pm:grid-cols-1 gap-5 lg:mx-auto pm:mx-5'>

      <div className=" md:col-span-2  ">
        {!isPlaying1 && (
        
          <div className="cursor-pointer w-full relative overflow-hidden block" onClick={handlePlay1} >
            <button className=' absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 z-10 rounded-full p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>

            </button>
            <img src={imgMV1} alt="Thumbnail" className="object-cover hover:scale-125 transition duration-1000" />
            <h2 className='text-white font-semibold font-pop text-xl uppercase w-full bg-yellow-600'>Để cho anh cưa</h2>
          </div>
          
        )}
        {isPlaying1 && (
       
          <div className='absolute z-[50] left-0 w-full' >
                <button className='absolute rounded-full z-10 p-2 bg-slate-100 right-0 cursor-pointer' onClick={() =>{setIsPlaying1(false)}} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
    
                </button>
                <div className=''>
                    <video
                      ref={videoRef1}
                      src={clipMV1}
                      className="w-full h-full"
                      autoPlay
                      controls
                    />
                </div>
            </div>
        
          
        )}
      </div>

      <div className=" md:col-span-3  ">
        {!isPlaying2 && (
        
          <div className="cursor-pointer w-full relative overflow-hidden block" onClick={handlePlay2} >
            <button className=' absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 z-10 rounded-full p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>

            </button>
            <img src={imgMV2} alt="Thumbnail" className="object-cover hover:scale-125 transition duration-1000" />
            <h2 className='text-white font-semibold font-pop text-xl uppercase w-full bg-yellow-600'>chúng ta của tương lai</h2>
          </div>
          
        )}
        {isPlaying2 && (
          
        <div className='absolute z-[50] left-0 w-full' >
              <button className='absolute rounded-full z-10 p-2 bg-slate-100 right-0 cursor-pointer' onClick={() =>{setIsPlaying2(false)}} >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
  
              </button>
              <div className=''>
                  <video
                    ref={videoRef2}
                    src={clipMV2}
                    className="w-full h-full"
                    autoPlay
                    controls
                  />
              </div>
          </div>
        
          
        )}
      </div>

      <div className=" md:col-span-2  ">
        {!isPlaying3 && (
        
          <div className="cursor-pointer w-full relative overflow-hidden block" onClick={handlePlay3} >
            <button className=' absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300 z-10 rounded-full p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>

            </button>
            <img src={imgMV3} alt="Thumbnail" className="object-cover hover:scale-125 transition duration-1000" />
            <h2 className='text-white font-semibold font-pop text-xl uppercase w-full bg-yellow-600'>vụ nổ lớn</h2>
          </div>
          
        )}
        {isPlaying3 && (
          
        <div className='absolute z-[50] left-0 w-full' >
              <button className='absolute rounded-full z-10 p-2 bg-slate-100 right-0 cursor-pointer' onClick={() =>{setIsPlaying3(false)}} >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
  
              </button>
              <div className=''>
                  <video
                    ref={videoRef3}
                    src={clipMV3}
                    className="w-full h-full"
                    autoPlay
                    controls
                  />
              </div>
          </div>
        
          
        )}
      </div>
    </div>
  );
};

export default VideoClip;
