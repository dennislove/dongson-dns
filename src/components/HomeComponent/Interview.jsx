import React from 'react'
import PhotoCollage from './PhotoCollage'
import VideoIntro from './VideoIntro'
import Plx from "react-plx";

function getDeviceDependentEndValue() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 992) { 
    return 600; //  (desktop)
  } else if (windowWidth >= 768) { // (md)
    return 200; //  (tablet)
  } else { //  (sm, xs)
    return 200; // (mobile)
  }
}

function getDeviceDependentStartScale() {
  const windowWidth = window.innerWidth;

  // Define breakpoints and corresponding start values (adjust as needed)
  if (windowWidth >= 992) { // Large screens (lg)
    return 0.5; // Start scaling at the beginning (desktop)
  } else if (windowWidth >= 768) { // Medium screens (md)
    return 0.5; // Start scaling slightly later (tablet)
  } else { // Small screens (sm, xs)
    return 0.8; // Start scaling even later (mobile)
  }
}

function Interview() {
  const parallaxData = [
    {
      start: 0,
      end: getDeviceDependentEndValue(),
      properties: [
        {
          startValue: getDeviceDependentStartScale(),
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ];
  
    
  return (
   <div className=' mb-20 bg-[#000022] lg:px-0  sm:px-5 '>
     <VideoIntro/>
      <div className=' m-auto relative '>
      <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
      <h2 className=' font-normal text-center md:text-[40px] sm:text-[35px] pm:text-[30px] text-white capitalize '>Công Ty Cổ phần Sự kiện và Du lịch Đông Sơn</h2>
        </Plx>
        <div className=' bg-[url("https://firebasestorage.googleapis.com/v0/b/dongsonevent-dns.appspot.com/o/images%2Ffiles%2Fbanner2.png?alt=media&token=80dc97c2-fd27-4954-a6e1-ef3507e77e5b")] bg-bottom bg-cover bg-fixed '>
              
        <div className=' bg-[#00000090] '>  <PhotoCollage/></div>
           </div>
           </div>
   </div>
   
  )
}

export default Interview
