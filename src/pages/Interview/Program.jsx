import React, { useState } from "react";

import useFirestoreCollectionWithIndexes from '../../hooks/useFirestoreCollectionWithIndexes'
const Program = () => {
  const [selectedLogo, setSelectedLogo] = useState(null);

  const { data: logos } = useFirestoreCollectionWithIndexes('Programs', 4);
  
  // console.log(logos[0].id)

  const handleLogoClick = (id) => {
    setSelectedLogo(id);

    // console.log(id)
  };

  return (
      <div className=" mx-auto p-6 bg-gradient-to-br from-[#000022] to-[#000044] rounded-lg shadow-lg text-white">
            <h2 className='  font-normal text-[40px] text-white capitalize text-center'> học sinh trải nghiệm</h2>
          
      <div className="flex justify-center space-x-8 my-8">
      {logos.map((logo) => (
          <button
            key={logo.id}
            onClick={() => handleLogoClick(logo.id)}
            className="w-40 h-32 rounded-lg bg-white shadow-md flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-hidden"
            aria-label={`Select ${logo.title}`}
          >
            <img src={logo.images[0]} alt={logo.title} className="w-full h-24 object-cover text-black font-inter" />
          </button>
        ))}
      </div>

      {selectedLogo && (
        <div className="relative mt-8 animate-fade-in">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-white"></div>
          <div className="bg-white text-[#000022] p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">{logos.title}</h2>
                <p className="mb-4 text-gray-700 font-inter">{logos.subtitle}</p>
                  {logos.map((logo, index) => (
                    
                    logo.id === selectedLogo && (
                <ul className="list-disc list-inside space-y-2 text-gray-600 font-inter" key={index}>
                      
                      {logo.descriptions.map((description, descIndex) => (
                        <li key={descIndex}>{description}</li>
                      ))}
                      
                </ul>
                      )
                  ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {/* {logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo.images}
                      alt={`${selectedLogo} image ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg shadow-md border border-blue-400 hover:border-blue-300 transition-colors duration-300"
                    />
                  ))} */}
                </div>
                <div>
                  {/* {logos[selectedLogo].images.slice(2, 3).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedLogo} image ${index + 3}`}
                      className="w-full h-full object-cover rounded-lg shadow-md border border-blue-400 hover:border-blue-300 transition-colors duration-300"
                    />
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Program;
