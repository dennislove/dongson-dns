import { createContext, useEffect, useState } from "react";

export const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200); // Adjust threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return <HeaderContext.Provider value={isVisible} >
        {children}
    </HeaderContext.Provider>
}