import React, { useEffect, useState,useRef } from 'react';
import '../MemberCT/style.css'
import { collection,getFirestore, getDocs, query } from 'firebase/firestore';

function SlideMember() {
   
    // const members = data.datamember
    const [members, setMembers] = useState([])
    const [activeTab, setActiveTab] = useState(1);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const db = getFirestore();
        const membersCollection = collection(db, 'Members');
        
        try {
          const snapshot = await getDocs(membersCollection);
  
          if (!snapshot.empty) {
            const fetchedMedia = [];
            snapshot.forEach(doc => {
              const key = doc.id;
              const data = doc.data();
              fetchedMedia.push({ id: key, ...data });
            });
  
            setMembers(fetchedMedia);
          } else {
            console.log("No data available");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []); 
  
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
        <div className='mb-5 text-center'>
        <h2 className=' font-normal md:text-[40px]  sm:text-[35px] pm:text-[30px] text-white capitalize'>Đội Ngũ MC Sự Kiện </h2>
    </div>
        <div className="fui-testimonial-1 mt-10 font-inter">
            
        <div className="testimonialWrap">
            <ul className="testimonialBodyList text-white ">
                {members.map((item, index) =>(
                    <li key={index} className={`testimonialBodyItem  ${activeTab === index ? 'active' : ''}`} data-tab={item.id}>
                    {/* <div className="testimonialRate text-yellow-600">Vị trí:<span className='text-white'>{item.location}</span>
                        
                    </div> */}
                    <p className='testimonialContent text-yellow-600 sm:text-2xl pm:text-xl  font-bold'>Phương châm làm nghề</p>
                    <p className="testimonialContent text-white text-xl mt-3">
                        {item.title} 
                    </p>
                    <div className="testimonialBodyPersonal active">
                      <div className="testimonialBodyPersonalImg">
                        <img src={item.image} alt={item.name} loading='lazy' />
                      </div>
                        <h4 className="testimonialBodyPersonalName">{item.name}</h4>
                    </div>
                </li>
                ))}
                
               
          </ul>
          
            <ul className="testimoniaPersonalList">
                {members.map((item,index) =>(
                    <li key={index} onClick={() => handleClickTab(index)} className={`testimoniaPersonalItem ${activeTab === index ? 'active' : ''}`} data-tab={item.id}>
                      <div className="testimoniaPersonalImage">
                        <img  src={item.image} loading='lazy' alt={item.name} className='text-white text-xs' />
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
