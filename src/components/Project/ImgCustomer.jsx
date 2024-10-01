import React from 'react';

import useFirestoreCollection from '../../Hooks/useFirestoreCollection';

function ImgCustomer() {

  const { data: customers} = useFirestoreCollection('Customers', 18);

  return (
    <div className='grid  mt-6 lg:px-0 pm:px-10
    lg:grid-cols-5 lg:gap-y-10 lg:gap-x-4
     md:grid-cols-4 md:gap-y-8 md:gap-x-4 
     sm:grid-cols-3 sm:gap-x-3 sm:gap-y-6 
     pm:grid-cols-2 pm:gap-y-5 pm:gap-x-2'>
      {customers.map((customer, index) => (
        <div key={index}>
          <img src={customer.image} loading='lazy' alt={customer.name} className='text-white hover:scale-125 transition ease-out duration-300 sm:w-[200px] pm:w-[150px] '/>
        </div>
      ))}
    </div>
  )
}

export default ImgCustomer
