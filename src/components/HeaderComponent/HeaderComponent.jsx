
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import data from '../../data.json'
import clsx from 'clsx';
import {  ref, getDownloadURL } from "firebase/storage";
import { match } from 'path-to-regexp'; 
import { storage } from '../../App.js';
import Button from '../Button/Button.jsx';
import { HiBars3CenterLeft, HiOutlineXMark  } from "react-icons/hi2";

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
                    <HiBars3CenterLeft color='#ca8a04' size={30} />
                    </button>
                  {/* logo */}
                    <a href='/' >
                  <img src='/images/logo.jpg' alt="logo-DNS" loading='lazy'
                  className='rounded-full text-white md:h-20 pm:h-16 border-2 border-yellow-600 '/>
                  </a>
              
                <ul className=' text-white items-center justify-center lg:gap-14 md:gap-10 sm:gap-6 hidden md:flex'>
                      {headerList.map(item =>(
                         
                              <NavItem key={item.id} href={item.path}>{item.name}</NavItem>
                        
                      ))}
                  </ul>
                  <div className=''>
                 
           <Button onClick={handleClick} name="PROFILE" />
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
                  <HiOutlineXMark size={30}/>
                  </div>
    
                  <img src='/images/logo.jpg' alt="logo-DNS" loading='lazy' className='mx-auto rounded-full  pm:h-20 border-2 border-yellow-600'/>
                  <ul className='mt-2'>
                {headerList.map(item =>(
                             <li key={item.id} className=' w-full font-inter uppercase cursor-pointer'>
                                <a  href={item.path} className=' items-center py-3 block border-b border-[#f2f2f2]'>{item.name}</a>
                              
                              </li>
                     ))}
                </ul>
                <div className=' mt-5' >
                <Button onClick={handleClick} name="PROFILE" />
                  </div>
                </section>
              </div>
      
            
            </nav>
          
        </div>
      </main>
  
  );

}

export default HeaderComponent
