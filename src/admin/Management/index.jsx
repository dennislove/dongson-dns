import React from 'react'
import { FaTrash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Management = () => {
  return (
    <div className=' grid grid-cols-3  gap-3 font-pop px-10 py-10 font-semibold text-xl text-center w-full'>
  
        <Link className=' bg-gray-800 rounded-md px-5 py-2 text-white' to={'/admin-tin-tuc'}>Quản lý tin tức </Link>
        <Link className=' bg-gray-800 rounded-md px-5 py-2 text-white' to={'/admin-du-an'}>Quản lý dự án </Link>
  
      <Link className=' bg-gray-800 rounded-md px-5 py-2 text-white flex justify-center items-center gap-4' to={'/admin-trash'}>Thùng rác <FaTrash/> </Link>
    </div>
  )
}

export default Management