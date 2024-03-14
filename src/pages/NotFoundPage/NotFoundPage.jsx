import React from 'react'
import image from '../../images/error.png'

function NotFoundPage() {
  
  return (
    <div className='max-w-[1300px] m-auto px-10'>
      <div className='flex flex-col items-center justify-center'>
        <img loading='lazy' src={image} alt="" className='w-1/2 h-1/2 bg-cover' />
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold text-xl'>Oops! Trang hiện không tồn tại</h3>
          <span>TRANG BẠN ĐANG TÌM KIẾM KHÔNG TỒN TẠI, BỊ XÓA HOẶC THÔNG TIN ĐÃ BỊ THAY ĐỔI.</span>
          <button><a href='/' className='bg-yellow-600 text-white text-base px-3 py-2 rounded font-medium cursor-pointer' >TRỞ LẠI TRANG CHỦ</a></button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
