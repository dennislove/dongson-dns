import React from 'react'
import data from '../../assets/data.json'
function ImgCustomer() {
    const customers = data.customer
  return (
    <div className='grid  mt-6 
    lg:grid-cols-5 lg:gap-y-10 lg:gap-x-4
     md:grid-cols-4 md:gap-y-8 md:gap-x-4 
     sm:grid-cols-3 sm:gap-x-3 sm:gap-y-6 
     pm:grid-cols-2 pm:gap-y-5 pm:gap-x-2'>
      {customers.map(customer => (
        <div key={customer.id}>
          <img src={customer.imgSrc} loading='lazy' alt={customer.imgAlt} className='text-white hover:scale-125 transition ease-out duration-300'/>
        </div>
      ))}
    </div>
  )
}

export default ImgCustomer
