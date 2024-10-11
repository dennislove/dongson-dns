import React, { useEffect, useState } from 'react'
import useFirestoreCollectionWithIndexes from '../../hooks/useFirestoreCollectionWithIndexes';

import { Link } from 'react-router-dom';

function NewsComponent() {

  const { data: news} = useFirestoreCollectionWithIndexes('News',4);

    const [filteredNews, setFilteredNews] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearchChange = (event) => {
      setQuery(event.target.value.toLowerCase());
    };
  
    useEffect(() => {
      // Filter news based on the query
      const results = news.filter(newsItem =>
          (newsItem.title && newsItem.title.toLowerCase().includes(query)) 
      );
      setFilteredNews(results);
  }, [query, news]);

const clearInput = () => {
  setQuery('');
  setFilteredNews([]); 
};
//---------show more - show less --------
  const total = news.length;
 
  // State ban đầu dựa trên kích thước màn hình
  const initialItemsPerPage = window.innerWidth >= 960 ? 6 : window.innerWidth <= 576 ? 3 : 4;
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  // Xử lý thay đổi kích thước màn hình
  useEffect(() => {
      const handleResize = () => {
          let newItemsPerPage;
          if (window.innerWidth >= 960) {
              newItemsPerPage = 6;
          } else if (window.innerWidth <= 576) {
              newItemsPerPage = 3;
          } else {
              newItemsPerPage = 4;
          }
          setItemsPerPage(newItemsPerPage);
          setVisibleItems(newItemsPerPage);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  // Hàm xử lý khi người dùng click "View More" hoặc "View Less"
  const handleViewToggle = () => {
      setVisibleItems(prevVisibleItems =>
          prevVisibleItems === itemsPerPage ? total : itemsPerPage
      );
  };
 
  return (
   <div>
      <div className="relative my-4 flex items-center font-inter">
        <input
          type="text"
          value={query} 
          onChange={handleSearchChange}
          placeholder="Tìm kiếm tin tức..."
          className="w-full p-3 border-none focus:outline-none rounded-l text-gray-700 "
        />
         {query && (
              <div className='bg-white p-3'>
                <svg onClick={clearInput} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-500">
                <path fillRule="evenodd" d="M8.707 10l-3.147 3.146a.5.5 0 0 0 .708.708L10 10.707l3.146 3.147a.5.5 0 0 0 .708-.708L10.707 10l3.147-3.146a.5.5 0 0 0-.708-.708L10 9.293 6.854 6.146a.5.5 0 0 0-.708.708L9.293 10z" clipRule="evenodd" />
            </svg>
              </div>
            )}
      <div className='py-3 px-10 bg-yellow-600 text-white rounded-r' >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      </div>

      <div className='grid md:grid-cols-3 sm:grid-cols-2 pm:grid-cols-1 gap-5 font-inter'>
     
          {filteredNews.slice(0, visibleItems).map((item, index) => (
        <Link to={item.link} target='blank' data-id={item.id} className='group rounded-lg bg-white overflow-hidden relative' key={index}>
          <img loading='lazy' src={item.image} alt="" className='rounded-lg group-hover:scale-125 duration-300 
          transform ease-out '/>
    
          <div className='absolute flex flex-col bg-gradient-to-r from-yellow-100/70 to-yellow-50 w-full text-center top-0 h-full -translate-y-full opacity-0 group-hover:opacity-100 transform ease-linear duration-200 group-hover:translate-y-0'>
            <h4 className='text-black top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-3/4  text-lg font-semibold mt-2 '>
              {item.title}</h4>
              
                <div className='w-full h-[3px] bg-yellow-600 absolute top-3/4'></div>
              </div>
        </Link>
        ))} 
      
   </div>
  
 <div className='mt-10'>
      
        <button onClick={handleViewToggle}
     className={`font-inter cursor-pointer relative lg:px-8 md:px-6 lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-yellow-600 font-semibold text-white rounded-lg transition-all bg-yellow-600
    duration-1000 ease-in-out inline-block overflow-hidden capitalize shadow-md hover:bg-transparent hover:text-yellow-600
    before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear ${total<7 ? 'hidden' : "block"}`}>
{visibleItems === total ? 'Ẩn Bớt' : 'Xem Thêm'}
          </button>
          
 </div>
   </div>
  )
}

export default NewsComponent
