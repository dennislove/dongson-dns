import React from 'react';
import CountUp from "react-countup";
import back1 from '../../images/kis-8940.jpg'
import back2 from '../../images/viettools-84690.jpg'

function PhotoCollage() {
  return (
    <div className=" mx-auto px-4 lg:px-4 md:px-4 sm:px-0 pm:px-0 ">
          <div className='flex justify-between mb-8 text-white font-oxa '>
              <div className='px-3 md:py-6 pm:py-4 bg-[#ff4220] md:w-[31%] pm:w-[33%]  text-center '>
                <div className=''><CountUp end={10} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " />
                 <span className=' md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold'>+</span></div>
                <p className=' font-normal md:text-base pm:text-sm'>Năm Kinh Nghiệm</p>
                </div>
             
              <div className='px-3 md:py-6 pm:py-4 bg-[#3dc5ce] md:w-[31%] pm:w-[33%]  text-center '>
              <div className=''><CountUp end={600} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " /> 
              <span className=' md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold'>+</span></div>
                <p className=' font-normal md:text-base pm:text-sm'>Chương Trình</p>
                </div>
             
              <div className='px-3 md:py-6 pm:py-4 bg-[#ffd231] md:w-[31%] pm:w-[33%]  text-center '>
              <div className=''><CountUp end={200} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " /> 
              <span className=' md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold'>+</span></div>
                <p className=' font-normal md:text-base pm:text-sm'>Khách Hàng</p>
                </div>
          </div>
         
        
         <div className='flex gap-7 lg:gap-7 md:gap-4 sm:gap-3 pm:gap-2 flex-row'>
              <div className="  w-full relative overflow-hidden block text-white">
                <img loading='lazy'
                  src={back1}
                  alt="Image 1"
                  className=" object-cover hover:scale-125 hover:-rotate-[10deg] transition duration-1000"
                
                />
              </div>
              <div className="  w-full relative overflow-hidden block text-white
              ">
            
                <img loading='lazy'
                  src={back2}
                  alt="Image 2"
                  className=" object-cover hover:scale-125 hover:-rotate-[10deg] transition duration-1000
                  "
                />
              </div>
         </div>
          </div>
     
     
  
  );
}

export default PhotoCollage;
