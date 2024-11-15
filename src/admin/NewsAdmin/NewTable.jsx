import React, {  useState } from 'react'
import { useNavigate } from "react-router-dom";
import {  doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../App';
import useFirestoreCollectionWithIndexes from '../../hooks/useFirestoreCollectionWithIndexes';

function NewTable() {
  const { data: news } = useFirestoreCollectionWithIndexes('News', 10);
  const [filteredNews, setFilteredNews] = useState(news);
  const navigate = useNavigate()

    
  const handleDeleteNews = async (newsId) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirmDelete) {
    try {
      
      const newsDocRef  = doc(db, 'News', newsId);
      const newsDocSnapshot = await getDoc(newsDocRef);
      if (newsDocSnapshot.exists()) {
        const newsData = newsDocSnapshot.data();
        const trashDocRef = doc(db, 'Trash', newsId);
        await setDoc(trashDocRef, { ...newsData, source: 'firestore', deletedAt: new Date() });
        await deleteDoc(newsDocRef);
        alert("Đã chuyển vào thùng rác!")
        window.location.reload()
      }
    } catch (error) {
      console.error("Error deleting document: ", error);
      }
    }
  };
    const handleUpdateClick = (doc) => {
      console.log(doc)
      navigate('/admin-news-update', { state: doc });
    
    };


  return (
    <div className="mt-12 mb-8 flex flex-col gap-4">
      <h2 className=' font-bold text-2xl font-inter' > Danh sách các tin tức</h2>
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
                  Link
                </th>
              
                <th scope="col" className="py-3 px-6">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              {news.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">
                 {index +1}
                </td>
                <td className="py-4 px-6">
                  {item.title}
                </td>
                <td className="py-4 px-6">
                {item.link}
                </td>
              
                <td className="py-4 px-6 flex">
                  
                    <h2 onClick={() => handleUpdateClick(item.id)} className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline ml-4">Sửa</h2>
                    <h2 onClick={() => handleDeleteNews(item.id)} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline ml-4">Xóa</h2>
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

export default NewTable
