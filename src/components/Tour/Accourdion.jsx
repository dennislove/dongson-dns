import React, { useState } from 'react';

const Accourdion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="w-full flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className={`w-full p-4 text-left text-xl font-medium rounded-t-lg ${
              activeIndex === index ? 'bg-gray-300' : 'bg-gray-100'
            }`}
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span className="float-right">
              {activeIndex === index ?
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 transition duration-300 ease-[cubic-bezier(0.265, 0.84, 0.44, 1)] ">
               <path fillRule="evenodd" d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
               <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
             </svg>
             
               :
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 transition duration-300 ease-[cubic-bezier(0.265, 0.84, 0.44, 1)] rotate-180 ">
               <path fillRule="evenodd" d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
               <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clipRule="evenodd" />
             </svg>
             }
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 rounded-b-lg bg-white shadow-md">
             <img loading='lazy' src={item.content} alt={item.title} /> 
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accourdion;
