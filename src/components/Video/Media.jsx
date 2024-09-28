import React from 'react';
import data from '../../assets/data.json'

function Media() {
  const images = data.imageMedia
  
      return (
        <div className='max-w-[1300px] m-auto mt-5'>
          
          <div className=' relative'>
           
                 
                <div className="flex gap-5 -ml-10 overflow-x-auto w-full relative overflow-hidden md:snap-none scroll-smooth scrollbar lg:snap-x"> 
                  <div className=' flex flex-row gap-10 w-full ' >
                    
                    {images.map((image) => (
                   
                                <img loading='lazy' src={image.imgSrc} alt={image.imgAlt} key={image.id}  className='text-white text-xs w-[400px] hover:scale-110 transition duration-700' />
                    
                              ))}
                              </div>
               
            </div>
          </div>
         </div>
      
     
      );
    }


export default Media
