import React from 'react'
import Footer from '../../components/Footer/Footer'
import Program from './Program'
function InterViewCT() {
  return (
    <div className='bg-cover bg-[#000022]'>
       <div className=' max-w-[1300px] m-auto relative pt-10'>
        <div className='relative  mb-10'>
            <div className='mb-5 text-center '>
            <h2 className='  font-normal text-[40px] text-white capitalize'>Giới thiệu</h2>
            
            <div className=' grid md:grid-cols-3 pm:grid-cols-1  gap-4 mt-5 bg-white rounded'>
              <img src='/images/nhansu.jpg' alt="" className='w-full bg-cover col-span-2' />
              <div className=' col-span-1 flex flex-col gap-4 justify-center text-center text-black px-5 bg-gray-200 rounded-xl md:mr-3 pm:ml-3 my-3'>
                <div className='font-semibold  lg:text-[32px]  sm:text-3xl pm:text-[24px]  capitalize font-pop text-center text-yellow-600 '>đội ngũ nhân sự</div>
                <p className='  text-xl font-pop'>Nhân sự sự kiện là linh hồn của một chương trình.
  Chịu trách nhiệm chính từ khâu setup, lên nội dung, ý
  tưởng,… đến thực hiện chương trình một cách thành
                  công nhất!</p>
                  <p className='  text-xl font-pop'>Chúng tôi có đầy đủ các nhân sự từ MC, ca sĩ, vũ
  đoàn, band nhạc, đạo diễn chương trình,… đến các kĩ
  thuật viên hình ảnh, âm thanh, dựng rạp, bắn
  background,…. Luôn chuyên nghiệp, chỉn chu trong
  từng chi tiết nhỏ!</p>
             </div>
            </div>
            </div>
          <Program/>
        </div>
        </div>
      <Footer/>
    </div>
  )
}

export default InterViewCT
