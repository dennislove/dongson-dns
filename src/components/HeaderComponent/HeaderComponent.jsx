import React, { useEffect, useState } from 'react'
import NavbarHeader from './NavbarHeader';

  
function HeaderComponent() {
  const [isVisible, setIsVisible] = useState(false);

  // Improved visibility logic considering different scroll positions
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200); // Adjust threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <div>
    <div className=''><NavbarHeader/></div>
    <div className={`fixed w-full top-0 z-100 transform ease-linear duration-700 animate-slideIn ${
        !isVisible && 'hidden' 
      }`}><NavbarHeader/></div>

   </div>
  );
}

export default HeaderComponent
