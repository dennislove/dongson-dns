import React from 'react'
import logo from '../../images/logo.jpg'
import LinkNow from './LinkNow'

function Footer() {
  return (
    <div className='bg-[url(images/bg2.jpg)] object-fill bg-cover pt-10 bg-[#000022] pb-10  '>
      <div className='max-w-[1300px]  lg:m-auto md:mx-10 sm:mx-8 pm:mx-5 relative'>
        <div className=' justify-between mb-10  sm:flex pm:block'>
          <div className=' mx-auto  md:w-[20%] sm:w-[30%] pm:w-full mb-10'> 
          <img loading='lazy' src={logo} alt="logo-DNS" className='text-white text-xs text-center w-28 h-28 rounded-full'/>
          <h2 className=' uppercase text-yellow-600 font-oxa text-base'> Đông sơn event</h2>
          <h2 className='text-sm text-white'>Giới hạn là bầu trời</h2>
          </div>
          <div className=' md:w-[77%] sm:w-[67%] pm:w-full'> 
              <ul className='grid  lg:gap-10 md:gap-8 sm:gap-6 pm:gap-0  md:grid-cols-4 sm:grid-cols-2 pm:grid-cols-1'>
                <li className='  text-white font-medium text-xl uppercase'>Giờ làm việc
                  <div className='flex items-center mb-9 mt-4 '>
                    <div className=' rounded-lg bg-[#fff] text-center text-white '>
                      <span className='px-3 py-2 w-full  bg-yellow-600 rounded-[8px_8px_0px_0px] flex items-center justify-center text-xs font-semibold'>Buổi</span>
                    <h2 className='px-3 py-2 flex items-center justify-center mb-0 uppercase text-yellow-800 text-base font-semibold'>Sáng</h2>
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-base font-semibold'>8:00 - 12:00</h3>
                      <div className='text-base font-normal border-t border-[#ffffff50] pt-1 mt-1'>Thứ 2 - CN</div>
                    </div>
                  </div>
                  <div className='flex items-center mb-9 '>
                    <div className=' rounded-lg bg-[#fff] text-center text-white '>
                      <span className='px-3 py-2 w-full  bg-yellow-600 rounded-[8px_8px_0px_0px] flex items-center justify-center text-xs font-semibold'>Buổi</span>
                    <h2 className='px-3 py-2 flex items-center justify-center mb-0 uppercase text-base text-yellow-800 font-semibold'>Chiều</h2>
                    </div>
                    <div className='ml-4'>
                      <h3 className='text-base font-semibold'>14:00 - 19:00</h3>
                      <div className='text-base font-normal border-t border-[#ffffff50] pt-1 mt-1'>Thứ 2 - CN</div>
                    </div>
                  </div>
                </li>
                <li className=' uppercase text-white font-medium text-xl mb-10'>Dịch vụ
                  <h4 className=' mt-4 text-sm font-light '>MSC MOVING FORWARD WITH VIETNAM</h4>
                </li>
                <li className=' uppercase text-white font-medium text-xl'>Liên hệ ngay
                  <div className='mt-4'> <LinkNow/></div>
                </li>
                

              </ul>
          </div>
        </div>

        <div className='grid gap-10  md:grid-cols-3 sm:grid-cols-1 pm:grid-cols-1'>
            <div className='px-4 py-5 bg-yellow-600  flex gap-5  items-center rounded-md'>
            
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20  lg:w-20 lg:h-20 md:w-20 md:h-20 sm:w-14 sm:h-14 pm:w-14 pm:h-14 text-white">
    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
  </svg>
            
          <div className='text-white'>
            <h2 className=' uppercase font-semibold '>Address</h2>
            <span>38 đường số 8, Khu Dân Cư Cityland Park Hills, Gò Vấp, Thành Phố Hồ Chí Minh</span>
          </div>
            </div>
            <div className='px-4 py-5 bg-yellow-600  flex items-center rounded-md gap-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

          <div className='text-white'>
            <h2 className=' uppercase font-semibold '>Hotline</h2>
            <span>0123456</span>
          </div>
            </div>
            <div className='px-4 py-5 bg-yellow-600  flex gap-5 items-center rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

          <div className='text-white'>
            <h2 className=' uppercase font-semibold '>Email</h2>
            <span>dongsonevent@gmail.com</span>
          </div>
            </div>
        </div>
        <h2 className='text-center font-sm text-white mt-10'>2024 Copyright <span className='text-yellow-600'>Đông Sơn Event</span>. Designed by <span className='text-yellow-600'>dongsonevent</span></h2>
      </div>
    </div>
  )
}

export default Footer
