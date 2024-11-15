import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, child, get, remove } from "firebase/database";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import ReactPaginate from 'react-paginate';
import { handleDelete } from '../../utils/handleDelete';

function AdminTable() {
    // select database
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
    const firstItemRank = ((currentPage - 1) * itemsPerPage) + 1;

  const navigate = useNavigate()
    useEffect(() => {
      const dbRef = ref(getDatabase());

      get(child(dbRef, `du-an`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const fetchedNews = Object.entries(snapshot.val()).map(([id, value]) => ({
              ...value,
              id, // đây là ID từ Firebase
              createdAt: new Date(value.createdAt).toLocaleString()
            }));
            setNews(fetchedNews);
          } else {
            console.log("No data available in News");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);


    const [query, setQuery] = useState('');

    useEffect(() => {
      const results = news.filter(item =>
        item.title.toLowerCase().includes(query)
      );
      setFilteredNews(results);
      if (currentPage > Math.ceil(results.length / itemsPerPage)) {
        setCurrentPage(Math.ceil(results.length / itemsPerPage) || 1);
      }
    }, [query, news]);

    // Pagination handler
    const handlePageClick = (event) => {
      setCurrentPage(event.selected + 1);
  };

  const realtimeDb = getDatabase();
const firestoreDb = getFirestore();
const handleDeleteRealtimeNews = async (newsId) => {
  // Hiển thị hộp thoại xác nhận
  const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa không?");

  if (confirmDelete) {
    try {
      // Tham chiếu đến document trong Realtime Database
      const newsRef = ref(realtimeDb, `du-an/${newsId}`); 
  
      // Lấy dữ liệu của document từ Realtime Database
      const newsSnapshot = await get(newsRef);

      if (newsSnapshot.exists()) {
        const newsData = newsSnapshot.val();
        
        const trashDocRef = doc(firestoreDb, 'Trash', newsId);
        await setDoc(trashDocRef, { ...newsData,source: 'realtime', deletedAt: new Date() });
        await remove(newsRef);
  
        alert("Xóa thành công và di chuyển vào Trash!");
  
        window.location.reload();
      } else {
        console.log("No such document in News!");
      }
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  }
};
    
    const handleUpdateClick = (doc) => {
      // console.log(doc)
      navigate('/admin-du-an-update', { state: doc });
    
    };


  return (
    <div className="mt-12 mb-8 flex flex-col gap-4">
      <h2 className=' font-bold text-2xl font-inter' > Danh sách các dự án</h2>
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
                  Slug
                </th>
                <th scope="col" className="py-3 px-6">
                  Ngày tạo
                </th>
                <th scope="col" className="py-3 px-6">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              {currentItems.map((item, index) => (
              <tr key={firstItemRank + index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-4 px-6">
                 {firstItemRank + index}
                </td>
                <td className="py-4 px-6">
                  {item.title}
                </td>
                <td className="py-4 px-6">
                {item.slug}
                </td>
                <td className="py-4 px-6">
                  {item.createdAt}
                </td>
                <td className="py-4 px-6 flex">
                  
                    <h2 onClick={() => handleUpdateClick(item.id)} className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline ml-4">Sửa</h2>
                    <h2 onClick={() => handleDeleteRealtimeNews(item.id)} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline ml-4">Xóa</h2>
                </td>
              </tr>
                 ))}
              {/* Dynamic rows should be generated here based on data */}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 font-inter">
        <ReactPaginate
        previousLabel={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg> }
        nextLabel={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>}
        breakLabel="..."
        pageCount={totalPages}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex gap-2"
        pageClassName="px-4 py-2 text-[16px] rounded-full hover:bg-gray-200"

        previousClassName="p-2 text-sm text-gray-600 rounded-full hover:bg-gray-300"
        nextClassName="p-2 text-sm text-gray-600 rounded-full hover:bg-gray-300"
        disabledClassName="opacity-50 cursor-not-allowed"
        activeClassName="bg-blue-600 text-white hover:bg-blue-700 "
        initialPage={currentPage - 1}
      />
  <span className="text-sm">
    Trang {currentPage} của {totalPages}
  </span>
</div>

</div>

  )
}

export default AdminTable
