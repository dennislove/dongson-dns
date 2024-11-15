import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore';
import { db , database} from '../../App';
import {  ref, set } from "firebase/database";
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

const Trash = () => {
    const [trashItems, setTrashItems] = useState([]);
 
    useEffect(() => {
      const fetchTrashItems = async () => {
        const trashCollectionRef = collection(db, 'Trash');
        const trashSnapshot = await getDocs(trashCollectionRef);
        const trashData = trashSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTrashItems(trashData);
      };
  
      fetchTrashItems();
    }, []);


const handlePermanentlyDelete = async (newsId) => {
    
    const trashDocRef = doc(db, 'Trash', newsId);
    await deleteDoc(trashDocRef);
    window.location.reload(); 
  };
  
  const handleRestore = async (newsId) => {
    try {
      const trashDocRef = doc(db, 'Trash', newsId);
      const trashDocSnapshot = await getDoc(trashDocRef);
  
      if (trashDocSnapshot.exists()) {
        const trashData = trashDocSnapshot.data();
  
        if (trashData.source === 'firestore') {
          // Khôi phục về Firestore
          const newsDocRef = doc(db, 'News', newsId);
          await setDoc(newsDocRef, trashData);
          console.log(`Document restored to Firestore: ${newsId}`);
        } else if (trashData.source === 'realtime') {
          // Khôi phục về Realtime Database
          const newsRef = ref(database, `du-an/${newsId}`);
          await set(newsRef, trashData);
          console.log(`Document restored to Realtime Database: ${newsId}`);
        }
  
        // Xóa document khỏi Trash sau khi khôi phục
        await deleteDoc(trashDocRef);
        alert("Khôi phục thành công!");
        window.location.reload();
      } else {
        console.error("Document không tồn tại trong Trash");
      }
    } catch (error) {
      console.error("Error restoring document: ", error);
    }
  };
  
  
  
    return (
      <div className="mt-12 mb-8 flex flex-col gap-4 px-10 ">
        <Link to='/admin-dns'><FaArrowCircleLeft size={32}/></Link>
          <h2 className=' font-bold text-2xl font-inter' > Thùng rác</h2>
           {/* ----------table------------ */}
           
           <div className="overflow-x-auto relative shadow-md sm:rounded-lg font-inter">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      #
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Tiêu đề
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Chức năng
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example row */}
                  {trashItems.map((item, index) => (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="py-4 px-6">
                     {index+1}
                    </td>
                    <td className="py-4 px-6">
                      {item.title}
                    </td>
                    <td className="py-4 px-6 flex">
                      
                        <h2 onClick={() => handleRestore(item.id)} className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline ml-4">Khôi phục</h2>
                        <h2 onClick={() => handlePermanentlyDelete(item.id)} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline ml-4">Xóa</h2>
                    </td>
                  </tr>
                     ))}
                  {/* Dynamic rows should be generated here based on data */}
                </tbody>
              </table>
            </div>
    
           
    
    </div>
    
      )
}

export default Trash