import React from 'react';
import data from '../../assets/data.json'

function Media() {
    const images = data.imageMedia
     
      return (
       <div className='max-w-[1300px] m-auto mt-5'>
          <div className="flex gap-5 overflow-x-auto w-full relative overflow-hidden ">
              {images.map((image) => (
                  <img loading='lazy' src={image.imgSrc} alt={image.imgAlt} key={image.id} className='text-white text-xs object-cover hover:scale-110 transition duration-700'/>
              ))}
         
      </div>
       </div>
     
      );
    }


export default Media
