import React, { useState } from 'react';
import { FaAnglesDown, FaAnglesUp  } from "react-icons/fa6";
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
            className={`w-full p-4 text-left text-xl font-medium rounded-t-lg uppercase ${
              activeIndex === index ? 'bg-gray-300' : 'bg-gray-100'
            }`}
            onClick={() => handleClick(index)}
          >
            {item.title}
            <span className="float-right">
              {activeIndex === index ?
              <FaAnglesUp />
             
               :
               <FaAnglesDown />
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
