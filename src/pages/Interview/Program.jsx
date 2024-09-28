import React, { useState } from "react";
import { FaApple, FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa6";

const Program = () => {
  const [selectedLogo, setSelectedLogo] = useState(null);

  const logos = [
    { id: 1, name: "Pro1", icon: FaApple, image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b" },
    { id: 2, name: "Pro2", icon: FaGoogle, image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd" },
    { id: 3, name: "Pro3", icon: FaMicrosoft, image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011" },
    { id: 4, name: "Pro4", icon: FaAmazon, image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2" },
  ];

  const logoInfo = {
      Pro1: {
        title:"Chương trình Lịch sử cách mạng (1945-1975)",
      description: "Tái hiện các sự kiện lịch sử  liên quan đến cuộc chiến tranh bảo vệ tổ quốc và chiến tranh giải phóng dân tộc trong lịch sử Việt Nam",
      listItems: [
        "Mô tả 1",
        "Mô tả 2",
        "Mô tả 3",
        "Mô tả 4",
      ],
      images: [
        "https://images.unsplash.com/photo-1491933382434-500287f9b54b",
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      ],
    },
    Pro2: {
        title:"Chương trình Lịch sử phong kiến",
      description: "Trải nghiệm tại di tích sinh động,  giúp cho các bạn học sinh có cách tiếp cận với giá trị truyền thống gần gũi hơn!",
      listItems: [
        "Mô tả 1",
        "Mô tả 2",
        "Mô tả 3",
        "Mô tả 4",
      ],
      images: [
        "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec",
        "https://images.unsplash.com/photo-1588580069399-9b31cdf0d1e7",
      ],
    },
    Pro3: {
        title:"Chương trình Teambuilding ",
      description: "KHI LÁ CỜ DOANH NGHIỆP ĐƯỢC TUNG BAY THÌ NHỮNG GIÁ TRỊ CHƯƠNG TRÌNH ĐƯỢC  ĐỌNG LẠI  VỚI NHỮNG CẢM XÚC ĐẶC BIỆT..",
      listItems: [
        "Mô tả 1",
        "Mô tả 2",
        "Mô tả 3",
        "Mô tả 4",
      ],
      images: [
        "https://images.unsplash.com/photo-1623479322729-28b25c16b011",
        "https://images.unsplash.com/photo-1642132652806-8aa0d6c35373",
        "https://images.unsplash.com/photo-1633419461186-7d40a38105ec",
      ],
    },
    Pro4: {
        title:"Chương trình nông nghiệp, làng nghề",
      description: "Bảo tồn và phát triển nghề, làng nghề nhằm giữ gìn và phát huy các giá trị, bản sắc văn hoá truyền thống của các làng nghề.",
      listItems: [
        "Mô tả 1",
        "Mô tả 2",
        "Mô tả 3",
        "Mô tả 4",
      ],
      images: [
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2",
        "https://images.unsplash.com/photo-1614036417651-efe5912149d8",
        "https://images.unsplash.com/photo-1620288627223-53302f4e8c74",
      ],
    },
  };

  const handleLogoClick = (logoName) => {
    setSelectedLogo(logoName);
  };

  return (
      <div className=" mx-auto p-6 bg-gradient-to-br from-[#000022] to-[#000044] rounded-lg shadow-lg text-white">
            <h2 className='  font-normal text-[40px] text-white capitalize text-center'> học sinh trải nghiệm</h2>
          
      <div className="flex justify-center space-x-8 my-8">
      {logos.map((logo) => (
          <button
            key={logo.id}
            onClick={() => handleLogoClick(logo.name)}
            className="w-40 h-32 rounded-lg bg-white shadow-md flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 overflow-hidden"
            aria-label={`Select ${logo.name}`}
          >
            <img src={logo.image} alt={logo.name} className="w-full h-24 object-cover text-black font-inter" />
          </button>
        ))}
      </div>

      {selectedLogo && (
        <div className="relative mt-8 animate-fade-in">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[20px] border-l-transparent border-r-transparent border-b-white"></div>
          <div className="bg-white text-[#000022] p-6 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">{logoInfo[selectedLogo].title}</h2>
                <p className="mb-4 text-gray-700 font-inter">{logoInfo[selectedLogo].description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 font-inter">
                  {logoInfo[selectedLogo].listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {logoInfo[selectedLogo].images.slice(0, 2).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedLogo} image ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg shadow-md border border-blue-400 hover:border-blue-300 transition-colors duration-300"
                    />
                  ))}
                </div>
                <div>
                  {logoInfo[selectedLogo].images.slice(2, 3).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedLogo} image ${index + 3}`}
                      className="w-full h-full object-cover rounded-lg shadow-md border border-blue-400 hover:border-blue-300 transition-colors duration-300"
                    />
                  ))}
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
