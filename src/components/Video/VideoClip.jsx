import React from 'react'

import ItemVideo from './ItemVideo';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';

const VideoClip = () => {
  const { data: videos} = useFirestoreCollection('Video',3);

  return (
    <div className='relative mt-10 grid md:grid-cols-7 sm:grid-cols-2 pm:grid-cols-1 gap-5 lg:mx-auto pm:mx-5'>
      {videos.map((item, index) => (
         <div className=" md:col-span-3 first:md:col-span-2 last:md:col-span-2 " key={index}>
          <ItemVideo linkImage={item.image} linkVideo={item.video} name={item.name} />
       </div>
      ))}
   
    </div>
  );
};

export default VideoClip;
