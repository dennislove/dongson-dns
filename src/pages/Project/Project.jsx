import React from 'react'
import Footer from '../../components/Footer/Footer'
import NewsComponent from './NewsComponent'

function Project() {
  return (
    <div className='bg-cover bg-[#000022]'>
       <div className=' max-w-[1300px] m-auto relative pt-10'>
        <div className='relative text-center mb-10'>
            <div className='mb-5 text-center '>
                <h2 className='  font-normal text-[40px] text-white capitalize'>Dự án</h2>
            </div>
          {/* <div className=' text-xl bg-yellow-500 px-10 py-4 rounded-lg font-normal m-auto text-white'>Chuẩn Bị Ra Mắt</div> */}
          <NewsComponent/>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Project
