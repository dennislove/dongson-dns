import React from 'react'
import FormAddItem from './FormAddItem'
import AdminTable from './AdminTable'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProjectAdmin = () => {
  return (
    <div className='mt-12 mb-8 flex flex-col gap-4 px-10 '>
      <Link to='/admin-dns'><FaArrowCircleLeft size={32}/></Link>
      <h2 className='text-center font-oxa font-bold text-2xl'>Quản lý dự án</h2>
          <FormAddItem />
          <AdminTable/>
    </div>
  )
}

export default ProjectAdmin