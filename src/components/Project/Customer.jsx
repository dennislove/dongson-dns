import React from 'react'
import ImgCustomer from './ImgCustomer'
import Plx from "react-plx";

import { getDeviceDependentEndValue, getDeviceDependentStartScale } from '../../utils/screen';
import { createParallaxData } from '../../utils/parallaxData';

function Customer() {
  const endValue = getDeviceDependentEndValue(1300);
  const startScale = getDeviceDependentStartScale();
  
  const parallaxData = createParallaxData(endValue, startScale);
 
  return (
    <div className='relative text-center mb-10'>
    <div className='mb-5 text-center'>
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
          <h2 className=' font-normal  md:text-[40px] sm:text-[35px] pm:text-[30px] text-white capitalize '>Khách hàng của chúng tôi</h2>
        </Plx>
    </div>
    <div className='sm:h-[300px] pm:h-[350px] overflow-hidden overflow-y-scroll font-inter snap-none scroll-smooth no-scrollbar'>
  <ImgCustomer/>
</div>

</div>
  )
}

export default Customer
