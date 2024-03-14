import React from 'react'
import Footer from '../../components/Footer/Footer'
import NewsComponent from '../../components/NewsComponent/NewsComponent'

function NewsPage() {
  return (
    <div className='bg-cover bg-[#000022]'>
       <div className=' max-w-[1300px] m-auto  pt-10'>
        <div className=' text-center mb-10'>
            <div className='mb-5 text-center font-oxa'>
                <h2 className='  font-normal text-[40px] text-white capitalize'>Tin tức</h2>
            </div>
            {/* <div className=' text-xl bg-yellow-500 px-10 py-4 rounded-lg font-normal m-auto text-white'>Chuẩn Bị Ra Mắt</div> */}
            <div className='lg:m-auto pm:mx-5'>
              <NewsComponent/>
            </div>

        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default NewsPage
