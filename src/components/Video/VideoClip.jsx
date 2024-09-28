import React, { useEffect, useState } from 'react'
import { getDatabase, ref, child, get } from "firebase/database";

import ItemVideo from './ItemVideo';


const VideoClip = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `Video`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const fetchedMedia = [];
          const initialStates = {};
          snapshot.forEach(childSnapshot => {
            const key = childSnapshot.key;
            const data = childSnapshot.val();
            fetchedMedia.push({ id: key, ...data });
            initialStates[key] = { isPlaying: false, ref: React.createRef() }; // Initialize state and ref for each video
          });
          setVideos(fetchedMedia);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



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
