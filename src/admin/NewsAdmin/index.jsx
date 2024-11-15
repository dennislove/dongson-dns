import React from 'react'
import AdminForm from './AdminForm'
import NewTable from './NewTable'
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa'

const NewsAdmin = () => {
  return (
    <div className='mt-12 mb-8 flex flex-col gap-4 px-10'>
      <Link to='/admin-dns'><FaArrowCircleLeft size={32}/></Link>
      <h2 className='text-center font-oxa font-bold text-2xl'>Quản lý tin tức</h2>
      <AdminForm />
      <NewTable/>
    </div>
  )
}

export default NewsAdmin