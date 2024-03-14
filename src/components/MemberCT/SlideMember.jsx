import React, { useEffect, useState,useRef } from 'react';
import '../MemberCT/style.css'
import data from '../../assets/data.json'

function SlideMember() {
   
    const members = data.datamember

    const [activeTab, setActiveTab] = useState(1);
    const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prevActiveTab) => (prevActiveTab + 1) % members.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [members.length]);

  const handleClickTab = (index) => {
    setActiveTab(index);
    clearInterval(intervalRef.current);
  };
  return (
    <div className='py-10'>
        <div className='mb-5 text-center font-oxa'>
        <h2 className=' font-normal md:text-[40px]  sm:text-[35px] pm:text-[30px] text-white capitalize'>Đội Ngũ Đông Sơn Event</h2>
    </div>
        <div className="fui-testimonial-1 mt-10">
            
        <div className="testimonialWrap">
            <ul className="testimonialBodyList text-white">
                {members.map((item, index) =>(
                    <li key={index} className={`testimonialBodyItem ${activeTab === index ? 'active' : ''}`} data-tab={item.id}>
                    <div className="testimonialRate text-yellow-600">Vị trí:<span className='text-white'>{item.location}</span>
                        
                    </div>
                    <p className='testimonialContent text-yellow-600 text-2xl font-bold'>Phương châm làm nghề</p>
                    <p className="testimonialContent text-white text-xl">
                        {item.title}
                    </p>
                    <div className="testimonialBodyPersonal active">
                        <div className="testimonialBodyPersonalImg"><img src={item.avatar} alt={item.name} loading='lazy'/></div>
                        <h4 className="testimonialBodyPersonalName">{item.name}</h4>
                    </div>
                </li>
                ))}
                
               
            </ul>
            <ul className="testimoniaPersonalList ">
                {members.map((item,index) =>(
                    <li key={index} onClick={() => handleClickTab(index)} className={`testimoniaPersonalItem ${activeTab === index ? 'active' : ''}`} data-tab={item.id}>
                      <div className="testimoniaPersonalImage">
                        <img  src={item.avatar} loading='lazy' alt={item.name} className='text-white text-xs' />
                      </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    </div>
  )
}

export default SlideMember
