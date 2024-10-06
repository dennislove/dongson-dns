import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRealtimeDatabase from '../../hooks/useRealtimeDatabase';

function NewsComponent() {
  const { data: news} = useRealtimeDatabase('du-an');
  const [filteredNews, setFilteredNews] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Filter news based on the query
    const results = news.filter(
      (newsItem) =>
        newsItem.title && newsItem.title.toLowerCase().includes(query)
    );
    setFilteredNews(results);
  }, [query, news]);

  
  //---------show more - show less --------
  const total = news.length;
  // State ban đầu dựa trên kích thước màn hình
  const initialItemsPerPage =
    window.innerWidth >= 960 ? 6 : window.innerWidth <= 576 ? 3 : 4;
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

    // Thêm event listener
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Hàm xử lý khi người dùng click "View More" hoặc "View Less"
  const handleViewToggle = () => {
    setVisibleItems((prevVisibleItems) =>
      prevVisibleItems === itemsPerPage ? total : itemsPerPage
    );
  };

  return (
    <div>
      

      <div className="grid md:grid-cols-3 sm:grid-cols-2 pm:grid-cols-1 gap-5 font-inter">
        {filteredNews.slice(0, visibleItems).map((item, index) => (
          <Link
            to={`/du-an/${item.slug}`}
            data-id={item.id}
            className="group rounded-lg bg-white overflow-hidden relative"
            key={index}
          >
            <img
              loading="lazy"
              src={item.image}
              alt=""
              className="rounded-lg group-hover:scale-125 duration-300 
          transform ease-out "
            />

            <div className="absolute flex flex-col bg-gradient-to-r from-yellow-100/70 to-yellow-50 w-full text-center top-0 h-full -translate-y-full opacity-0 group-hover:opacity-100 transform ease-linear duration-200 group-hover:translate-y-0">
              <h4 className="text-black top-1/2 absolute left-1/2 -translate-x-1/2 -translate-y-3/4  text-lg font-semibold mt-2 ">
                {item.title}
              </h4>

              <div className="w-full h-[3px] bg-yellow-600 absolute top-3/4"></div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10">
      <button onClick={handleViewToggle}
     className={`cursor-pointer relative lg:px-8 md:px-6 lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-yellow-600 font-semibold text-white rounded-lg transition-all bg-yellow-600
    duration-1000 ease-in-out inline-block overflow-hidden capitalize shadow-md hover:bg-transparent hover:text-yellow-600
    before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear ${total<7 ? 'hidden' : "block"}`}>
{visibleItems === total ? 'Ẩn Bớt' : 'Xem Thêm'}
          </button>
      </div>
    </div>
  );
}

export default NewsComponent;
