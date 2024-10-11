import React from 'react'
import data from '../../data.json'

function Major() {

    const major = data.major
    
  return (
    <div className='grid md:grid-cols-3 pm:grid-cols-1 sm:grid-cols-2 gap-2 '>
       {major.map((item, index) =>(
        <div  key={index} className='bg-white p-4 hover:-translate-y-1 transform ease-linear duration-150 hover:shadow-[0px_4px_0px_3px_rgba(183,183,183,0.6)]'>
            <h2 className='text-yellow-600 text-xl font-semibold'>{item.title}</h2>
            <p className='mt-3 text-16'>{item.description}</p>

            
        </div>
       ))}
    </div>
  )
}

export default Major
