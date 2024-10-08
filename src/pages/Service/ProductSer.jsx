import React from 'react'
import Footer from '../../components/Footer/Footer'
import Slider from './Slider'
import VideoClip from '../../components/Video/VideoClip'
import Media from '../../components/Video/Media'

function ProductSer() {
  return (
    <div className='bg-cover bg-[#000022]'>
       <div className=' max-w-[1300px] m-auto relative pt-10'>
        <div className='relative text-center mb-10'>
            <div className='mb-5 text-center '>
                <h2 className='  font-normal text-[40px] text-white capitalize'>Game Tool</h2>
            </div>
            {/* <div className=' text-xl bg-yellow-500 px-10 py-4 rounded-lg font-normal m-auto text-white'>Chuẩn Bị Ra Mắt</div> */}
            <section>
            <Slider/>
            </section>

            <div className='mt-10 mb-5 text-center  z-[101] sm:mt-0 pm:-mt-[300px]'>
            <h2 className='  font-normal mt-10 text-[40px] text-white capitalize'>Video Clip</h2>
            {/* <VideoClip /> */}
            <div className=' text-xl bg-yellow-500 px-10 py-4 rounded-lg font-normal m-auto text-white font-inter'>Chuẩn Bị Ra Mắt</div>
       
            </div>

            <div className='mt-10 mb-5 text-center '>
            <h2 className='  font-normal text-[40px] text-white capitalize'>Albums Hoạt Động</h2>
              <Media/>
       
            </div>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ProductSer
