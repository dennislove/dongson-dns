import React from 'react'
import data from '../../assets/data.json'

function TourMember() {
    const tourmembers = data.tourmember
   
  return (
    <div className='flex flex-col gap-8'>
        {tourmembers.map((item,index) =>(
       <div key={index} className='md:w-[70%] sm:w-[95%] pm:w-[92%] group items-center justify-center flex gap-8 relative'>
                <div className={
                index % 2 === 0
                  ? "w-1/2 h-1/2 ml-20 translate-x-1/2"
                  : "w-1/2 h-1/2 transform -translate-x-1/2 "
              }>
                    <img loading='lazy' src={item.imgSrc} alt={item.imgAlt} className='w-full h-full bg-cover transition-all delay-200'/>
                    <div className='h-[1px] w-full bg-white'></div>
                </div>
               
            <h3 className={
                index % 2 === 0
                ? "w-[47%] absolute ml-3 opacity-0 transform group-hover:-translate-x-1/2 transition ease-out duration-500 group-hover:opacity-100 text-white font-normal text-[15px] text-ellipsis overflow-hidden h-[90px]"
                : "w-[47%] absolute ml-3 opacity-0 transform group-hover:translate-x-3/4 transition ease-out duration-500 group-hover:opacity-100 text-white font-normal text-[15px] text-ellipsis overflow-hidden h-[90px]"
            }>{item.description}</h3>
       </div>
        ))}
    </div>  
  )
}

export default TourMember
