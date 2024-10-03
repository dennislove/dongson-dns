import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDatabase, ref, child, get } from "firebase/database";
import Footer from '../../components/Footer/Footer';


const DetailNewsPage = () => {
    const { slug } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);

    useEffect(() => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `du-an`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              snapshot.forEach(childSnapshot => {
                const data = childSnapshot.val();
                if (data.slug === slug) {
                    setNewsDetail(data);
                    return; 
                }
              });
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
    }, [slug]);

    if (!newsDetail) {
        return <div>Loading...</div>;
    }
 // render descriptions
 const renderDescriptions = () => {
  const descriptionsArray = [];
  // Loop through all keys in the newsDetail object
  for (const key in newsDetail.descriptions) {
      if (newsDetail.descriptions.hasOwnProperty(key)) {
          descriptionsArray.push(
              <p className='text-white leading-1' key={key}>
                  {newsDetail.descriptions[key]}
              </p>
          );
      }
  }
  return descriptionsArray;
};

 // render images
 const renderImages = () => {
  const imagesArray = [];
  // Loop through all keys in the newsDetail object
  for (const key in newsDetail.listImages) {
      if (newsDetail.listImages.hasOwnProperty(key)) {
          imagesArray.push(
            <img src={newsDetail.listImages[key]} key={(key)} alt="" />
          );
      }
  }
  return imagesArray;
  };
  
    return (
      <div className=' bg-[#000022] md:mt-10 pm:mt-2 pb-20 px-10 font-inter'>
        <div className='max-w-[1300px] lg:m-auto md:mx-10 sm:mx-16 '>
         <Link to="/du-an" className='flex items-center gap-5 cursor-pointer'>
            <div className="py-5  text-yellow-600 flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>

              Dự Án
            </div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-4 h-4 text-white">
              <path strokeLinecap="round"
              strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          <div className="py-5  text-gray-400 flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>
             Chi Tiết
            </div>
         </Link>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
              <img loading='lazy' src={newsDetail.image} alt="" />
              <div className=' text-start flex flex-col gap-6 justify-center'>
                  <h1 className='text-yellow-600 font-bold text-3xl'>{newsDetail.title}</h1>
                  <div className='grid grid-cols-1 gap-7 mt-2'>
                  {renderDescriptions()}
             </div>
              </div>
          </div>
  
              <div className='bg-white w-full h-[2px] my-10'></div>
             
            <div className=' grid sm:grid-cols-2 pm:grid-col-1 gap-10'> {renderImages()}</div>
        </div>

        <Footer/>
    </div>
    );
};

export default DetailNewsPage;
