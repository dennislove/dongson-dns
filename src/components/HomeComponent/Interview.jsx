import React from 'react'
import PhotoCollage from './PhotoCollage'
import { Link } from 'react-router-dom'
import VideoIntro from './VideoIntro'

function Interview() {
    
  return (
   <div className='  bg-[#000022] lg:px-0  sm:px-5 '>
     <VideoIntro/>
        <div className='py-[80px] max-w-[1300px] m-auto relative '>

           
        <div className='  bg-[url("https://tramhuongannhien.vn/wp-content/uploads/2023/07/gia-tri-cot-loi-tam-huong-an-nhien.jpg")] bg-bottom bg-cover bg-fixed '>
              
              <div className=' bg-[#00000090] '>  <PhotoCollage/></div>
           </div>
           </div>
   </div>
   
  )
}

export default Interview
