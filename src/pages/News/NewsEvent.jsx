import React from 'react'
import Footer from '../../components/Footer/Footer'

function NewsEvent() {
  return (
    <div className='bg-cover bg-[#000022]'>
     <div className='max-w-[1300px] m-auto relative'>
          <div className=' bg-slate-200 w-full flex gap-2 mt-10 py-2 text-black'>
            <a href='/tin-tuc' className=' font-normal text-base capitalize'>Tin tức</a>
            <div>/</div>
            <a href='/tin-tuc/event' className='font-normal text-base  capitalize'>Event</a>
          </div>
          <Footer/>
     </div>
    </div>
  )
}

export default NewsEvent
