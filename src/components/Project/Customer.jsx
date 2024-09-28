import React from 'react'
import ImgCustomer from './ImgCustomer'
import Plx from "react-plx";

function getDeviceDependentEndValue() {
  const windowWidth = window.innerWidth;

  // Define breakpoints and corresponding start values (adjust as needed)
  if (windowWidth >= 992) { // Large screens (lg)
    return 1300; // Start scaling at the beginning (desktop)
  } else if (windowWidth >= 768) { // Medium screens (md)
    return 200; // Start scaling slightly later (tablet)
  } else { // Small screens (sm, xs)
    return 300; // Start scaling even later (mobile)
  }
}

function getDeviceDependentStartScale() {
  const windowWidth = window.innerWidth;

  // Define breakpoints and corresponding start values (adjust as needed)
  if (windowWidth >= 992) { // Large screens (lg)
    return 0.5; // Start scaling at the beginning (desktop)
  } else if (windowWidth >= 768) { // Medium screens (md)
    return 0.5; // Start scaling slightly later (tablet)
  } else { // Small screens (sm, xs)
    return 0.8; // Start scaling even later (mobile)
  }
}


function Customer() {
  const parallaxData = [
    {
      start: 0,
      end: getDeviceDependentEndValue(),
      properties: [
        {
          startValue: getDeviceDependentStartScale(),
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ];
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
