
import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.jpg'
import { Link, useLocation } from 'react-router-dom';
import data from '../../data.json'
import clsx from 'clsx';
import {  ref, getDownloadURL } from "firebase/storage";
import { match } from 'path-to-regexp';  // Import match from path-to-regexp

import { storage } from '../../App.js';

const NavItem = ({ children, href,id }) => {
    const location = useLocation();
    const rootPath = location.pathname === '/';

    let isActive;
    if (href === '/') {
      // Chỉ khi đường dẫn là root '/'
      isActive = rootPath;
    } else {
      // Đối với tất cả đường dẫn khác, đảm bảo không khớp với root '/'
      const matcher = match(href, { decode: decodeURIComponent, end: false });
      isActive = matcher(location.pathname) && !rootPath;
    }
    return (
      <li className="nav-item hover:text-yellow-600 md:text-base sm:text-sm font-inter" key={id}>
      <Link 
        to={href}
        className={`nav-link ${isActive ? 'text-yellow-600' : ''}`}
      >
        {children}
      </Link>
    </li>
  );
  };
function HeaderComponent() {

    const [isSideMenuOpen, setMenu] = useState(false);
    const headerList = data.sidebar
  
    const handleClick = () => {
      const fileRef = ref(storage, 'files/hosonanglucDongSon.pdf');
  
      getDownloadURL(fileRef)
        .then((url) => {
          const newWindow = window.open(url, '_blank');
  
          // Check if the new window was successfully opened
          if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            // Fallback to opening the URL in the same tab if it failed to open a new tab
            window.location.href = url;
          }
       
        })
        .catch((error) => {
          console.error("Error opening file: ", error);
        });
    };
  
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 200); // Adjust threshold as needed
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
      <main className={`${isVisible ?"fixed w-full top-0 z-100 transform ease-linear duration-700 animate-slideIn ":""}`}>
        <div className='shadow-md w-full top-0 left-0 relative'>
            <nav className="md:h-20 sm:h-16 pm:h-16 bg-black lg:px-[120px] pm:px-5 " >
                <section className="flex items-center justify-between">
                  
                  {/* menu */}
                    <button className='md:hidden'  onClick={() => setMenu(true)} >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-yellow-600 " >
                  <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
                    </button>
                  {/* logo */}
                    <a href='/' >
                  <img src={logo} alt="logo-DNS" loading='lazy'
                  className='rounded-full text-white md:h-20 pm:h-16 border-2 border-yellow-600 '/>
                  </a>
              
                <ul className=' text-white items-center justify-center lg:gap-14 md:gap-10 sm:gap-6 hidden md:flex'>
                      {headerList.map(item =>(
                         
                              <NavItem key={item.id} href={item.path}>{item.name}</NavItem>
                        
                      ))}
                  </ul>
                  <div className=''>
                  <button onClick={handleClick} className="font-inter lg:px-8 md:px-6 lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
                      duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-yellow-600 hover:text-white
                      before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
                  before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
                  PROFILE
                </button>
           
              </div>
              </section>
      
              {/* sidebar mobile menu */}
              <div onClick={() => setMenu(false)} 
                className={clsx(
                  " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full transition-all ",
                  isSideMenuOpen && "translate-x-0"
                )}
              >
                <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-[50] pm:w-[65%] flex  ">
                  <div onClick={() => setMenu(false)} className="absolute right-1 top-1 p-1 bg-yellow-600  cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 ">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                  </div>
    
                  <img src={logo} alt="logo-DNS" loading='lazy' className='mx-auto rounded-full  pm:h-20 border-2 border-yellow-600'/>
                  <ul className='mt-2'>
                {headerList.map(item =>(
                             <li key={item.id} className=' w-full font-inter uppercase cursor-pointer'>
                                <a  href={item.path} className=' items-center py-3 block border-b border-[#f2f2f2]'>{item.name}</a>
                                {/* <div className='bg-[#f2f2f2] h-[1px] w-full mt-2'></div> */}
                              </li>
                     ))}
                </ul>
                <div className=' mt-5' >
                      <button onClick={handleClick}  className="font-inter lg:px-8 md:px-6  lg:py-4 md:py-2 pm:px-6 pm:py-2 border-2 border-yellow-600 font-semibold text-yellow-600 rounded-lg transition-all 
                          duration-1000 ease-in-out inline-block overflow-hidden relative capitalize shadow-md hover:bg-yellow-600 hover:text-white
                          before:absolute before:-left-[100%] hover:before:left-full before:top-0 before:w-full before:h-full
                      before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent before:transition-all before:duration-500 before:ease-linear">
                      PROFILE
                      </button>
                  </div>
                </section>
              </div>
      
            
            </nav>
          
        </div>
      </main>
  
  );

}

export default HeaderComponent
