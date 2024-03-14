import React from 'react'
import ImgCustomer from './ImgCustomer'

function Customer() {
  return (
    <div className='relative text-center mb-10'>
    <div className='mb-5 text-center font-oxa'>
        <h2 className=' font-normal  md:text-[40px] sm:text-[35px] pm:text-[30px] text-white capitalize'>Khách hàng của chúng tôi</h2>
    </div>
   
   <ImgCustomer/>
</div>
  )
}

export default Customer
