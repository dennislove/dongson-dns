import React from 'react';
import CountUp from "react-countup";
import Plx from "react-plx";

import { getDeviceDependentStartScale,getDeviceDependentStartScaleRight ,getDeviceDependentEndValue} from '../../utils/screen';
import { createParallaxDataCollage } from '../../utils/parallaxData';


function PhotoCollage() {

  const endValue = getDeviceDependentEndValue(600);
  const startScale = getDeviceDependentStartScale();
  const startScale2 = getDeviceDependentStartScaleRight();
  
  const parallaxData = createParallaxDataCollage(endValue, startScale);
  const parallaxData2 = createParallaxDataCollage(endValue, startScale2);
 
 return (
    <div className='grid font-inter md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-[1300px] m-auto relative  p-10'>
         <div className='block text-white'>
                     <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
                            <div className=' flex flex-col gap-4'>
                              <span className=' font-light leading-6 text-base mt-5'>(Đông Sơn Events & Travels) tiền thân là DNS Team là đơn vị tổ chức sự kiện chuyên nghiệp có nhiều kinh nghiệm làm việc với nhiều sản phẩm cọ xát với nhiều loại sự kiện khác nhau.</span>
                              <span>Chúng tôi sáng tạo, có tầm nhìn bao quát, năng động, nhanh nhẹn, có khả năng thiết lập quan hệ tốt. Chúng tôi biết cách xử lý và ứng phó với mọi tình huống.</span>
                              <span> Công việc tổ chức sự kiện như một bức tranh của trò chơi ghép hình, thành công ở chỗ bức tranh được hoàn chỉnh từ hàng ngàn mảnh ghép chi tiết. Đẳng cấp của chúng tôi thể hiện ở chính sự hoàn hảo, tính khác biệt trong từng tiểu tiết ở mỗi sự kiện.</span>
                            </div>
                     </Plx>
                        
                </div>
        <div className='grid grid-cols-1'>
           <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
                <section className=' border-b grid grid-cols-2 '>
                    <div className='py-8 px-10 border-r text-yellow-600 text-center'><CountUp end={8} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " /> <span className='md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold text-white text-center'>+</span>
                        <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>Năm Kinh Nghiệm</p>
                    </div>
                    <div className='py-8 px-10 text-white text-center'><CountUp end={200} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " /> <span className='md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold text-yellow-600 text-center'>+</span>
                        <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>Khách Hàng</p>
                    </div>
                </section>
               
                <section className='  grid grid-cols-2 '>
                    <div className='py-8 px-10 border-r text-white text-center'><CountUp end={7} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " /> <span className='md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold text-yellow-600 text-center'>+</span>
                        <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>Loại hình dịch vụ</p>
                    </div>
                    <div className='py-8 px-10  text-yellow-600 text-center'><CountUp end={8} className=" md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold " /> <span className='md:text-[60px] sm:text-[40px] pm:text-3xl font-semibold text-white text-center'>+</span>
                        <p className=' uppercase mt-3 font-normal md:text-xl pm:text-sm'>MC Sự kiện</p>
                    </div>
                </section>
           </Plx>
        </div>
    </div>
  );
}

export default PhotoCollage;
