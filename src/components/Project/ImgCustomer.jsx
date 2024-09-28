import React, { useEffect, useState,useRef } from 'react';

import { getDatabase, ref, child, get } from "firebase/database";
import { collection,getFirestore, getDocs, query } from 'firebase/firestore';

function ImgCustomer() {

  const [customers, setCustomers] = useState([])

  // useEffect(() => {
  //   const dbRef = ref(getDatabase());

  //   get(child(dbRef, `Customers`))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const fetchedMedia = [];
  //         const initialStates = {};
  //         snapshot.forEach(childSnapshot => {
  //           const key = childSnapshot.key;
  //           const data = childSnapshot.val();
  //           fetchedMedia.push({ id: key, ...data });
  //           initialStates[key] = { isPlaying: false, ref: React.createRef() }; 
  //         });
  //         setCustomers(fetchedMedia);
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const customersCollection = collection(db, 'Customers'); // Thay đổi 'sliders' thành collection của bạn
      
      try {
        const snapshot = await getDocs(customersCollection);

        if (!snapshot.empty) {
          const fetchedMedia = [];
          snapshot.forEach(doc => {
            const key = doc.id;
            const data = doc.data();
            fetchedMedia.push({ id: key, ...data });
            
          });

          setCustomers(fetchedMedia);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

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
