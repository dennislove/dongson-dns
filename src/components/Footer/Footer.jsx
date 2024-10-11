import React from 'react'
import LinkNow from './LinkNow'
import { HiMapPin, HiPhone, HiEnvelope } from "react-icons/hi2";
function Tags() {
  const itemTags = [
    {
      icon: <HiMapPin size={34} color='white'/>,
      name: "72 đường Tống Duy Tân, P.Bắc Sơn, TP Sầm Sơn, tỉnh Thanh Hóa",
      topic:"Địa chỉ"
    },
    {
      icon: <HiPhone size={30} color='white'/>,
      name: "0983.378.939",
      name2: "0971.729.698",
      topic:"Hotline"
    },
    {
      icon: <HiEnvelope size={30} color='white'/>,
      name: "dongsonevent.travel@gmail.com",
      topic:"Email"
    }
  ]
  return (
    <div className='grid gap-10  md:grid-cols-3 sm:grid-cols-1 pm:grid-cols-1 font-inter'>
      {
        itemTags.map((item, index) => (
          <div className='px-4 py-5 bg-yellow-600  flex gap-5  items-center rounded-md' key={index}>
          {item.icon}
      <div className='text-white'>
          <h2 className=' uppercase font-semibold '>{item.topic}</h2>
          <div className=' flex flex-col'>
                <span>{ item.name}</span>
                <span>{ item.name2}</span>
              </div>
      </div>
    </div>
      ))}
    </div>
    
  )
}
function Footer() {
  const services = ["Media quay chụp","Nhà rạp không gian","Âm thanh, ánh sáng","Màn hình LED","Sân khấu sự kiện","Bộ gametool teambuilding"]
  return (
    <div className='bg-[url("/public/images/banner3.png")] object-fill bg-cover pt-10 bg-[#000022] pb-10  '>
      <div className='max-w-[1300px]  lg:m-auto md:mx-10 sm:mx-8 pm:mx-5 relative'>
        <div className=' justify-between mb-10  sm:flex pm:block'>
          <div className=' mx-auto  md:w-[20%] sm:w-[30%] pm:w-full mb-10'> 
          <img loading='lazy' src="/images/logo.jpg" alt="logo-DNS" className='text-white text-xs text-center w-28 h-28 rounded-full'/>
          <h2 className=' uppercase text-yellow-600  text-base'> Đông sơn events & travels</h2>
          <h2 className='text-sm text-white font-inter'>Giới hạn là bầu trời</h2>
          </div>
          <div className=' md:w-[77%] sm:w-[67%] pm:w-full font-inter'> 
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
                {services.map((item, index) => (
                  <h4 key={index} className=' mt-4 text-sm  font-light '>{item}</h4>
                ))}
                </li>
                <li className=' uppercase text-white font-medium text-xl'>Liên hệ ngay
                  <div className='mt-4'> <LinkNow/></div>
                </li>
                

              </ul>
          </div>
        </div>
            <Tags/>
      
        <h2 className='text-center font-sm text-white mt-10 font-inter'>2024 Copyright <span className='text-yellow-600'>Đông Sơn Events & Travels</span>. Designed by <span className='text-yellow-600'>dnsteam©</span></h2>
      </div>
    </div>
  )
}

export default Footer
