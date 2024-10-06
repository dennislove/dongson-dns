import React from 'react'
import PhotoCollage from './PhotoCollage'
import VideoIntro from './VideoIntro'
import Plx from "react-plx";

import { getDeviceDependentEndValue, getDeviceDependentStartScale } from '../../utils/screen';
import { createParallaxData } from '../../utils/parallaxData';

function Interview() {
  const endValue = getDeviceDependentEndValue(1300);
const startScale = getDeviceDependentStartScale();

const parallaxData = createParallaxData(endValue, startScale);
    
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
