import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { match } from 'path-to-regexp';

const PageTitleManager = () => {
  const location = useLocation();
  const titleMap = {
    '/': 'Đông Sơn Event',
    '/gioi-thieu': 'DNS | Giới Thiệu',
    '/tin-tuc': 'DNS | Tin Tức',
    '/du-an/:slug': 'DNS | Dự Án', // Đường dẫn này sử dụng tham số
    '/dich-vu': 'DNS | Dịch Vụ',
    '/du-an': 'DNS | Dự Án',
    '/lien-he': 'DNS | Liên Hệ'
  };

  useEffect(() => {
    const updateTitle = () => {
      let title = '404'; // Tiêu đề mặc định khi không khớp bất kỳ đường dẫn nào

      // Kiểm tra xem có khớp với bất kỳ đường dẫn nào trong titleMap không
     
      for (let path in titleMap) {
        const matcher = match(path, {
          decode: decodeURIComponent,
          end: path === '/du-an/:slug' ? false : true
        });
        if (matcher(location.pathname)) {
          title = titleMap[path];
          break;
        }
      }
      document.title = title;
    };

    updateTitle();
  }, [location]); // Phụ thuộc vào location

  return null;
};

export default PageTitleManager;
