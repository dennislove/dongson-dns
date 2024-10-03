import React, { useEffect, useRef, useState } from 'react'
import '../Service/style.css'
import { collection, getFirestore, getDocs, query } from 'firebase/firestore';

function Slider() {
    const [sliders, setSliders] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideDirection, setSlideDirection] = useState("");
    const [transform, setTransform] = useState("")
    const [thumbnailOrder, setThumbnailOrder] = useState([]);
   
   
    useEffect(() => {
        const fetchData = async () => {
          const db = getFirestore();
          const slidersCollection = collection(db, 'sliders'); // Thay đổi 'sliders' thành collection của bạn
          
          try {
            const snapshot = await getDocs(slidersCollection);
    
            if (!snapshot.empty) {
              const fetchedMedia = [];
              const initialStates = {};
    
              snapshot.forEach(doc => {
                const key = doc.id;
                const data = doc.data();
                fetchedMedia.push({ id: key, ...data });
                initialStates[key] = { isPlaying: false, ref: React.createRef() }; // Initialize state and ref for each video
              });
    
              setSliders(fetchedMedia);
              setThumbnailOrder(fetchedMedia.map((_, index) => index));
            } else {
              console.log("No data available");
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []); 
   
    // function for handle next to slide
    const nextSlide = () => {
        const newSlide = (currentSlide + 1) % sliders.length;
        setCurrentSlide(newSlide);
        moveThumbnailToEnd(newSlide);
        setSlideDirection("next");
        setTransform("animation-showContent")
    };
    
    const prevSlide = () => {
        const newSlide = (currentSlide - 1 + sliders.length) % sliders.length;
        setCurrentSlide(newSlide);
        moveThumbnailToStart(newSlide);
        setSlideDirection("prev");
    };

    const moveThumbnailToEnd = (index) => {
        setThumbnailOrder(prevOrder => {
            const temp = prevOrder[0];
            console.log(temp)
            const newOrder = prevOrder.slice(1).concat(temp);
            console.log(newOrder)
            const currentIndex = newOrder.indexOf(index);
            newOrder.unshift(newOrder.splice(currentIndex, 1)[0]);
            return newOrder;
        });
      };
    
    const moveThumbnailToStart = (index) => {
        setThumbnailOrder(prevOrder => {
            const newOrder = [...prevOrder];
            const currentIndex = newOrder.indexOf(index);
            newOrder.unshift(newOrder.splice(currentIndex, 1)[0]);
            return newOrder;
        });
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideDirection("");
        }, 500); // assuming animation duration is 0.5s

        return () => clearTimeout(timer);
    }, [currentSlide]); 

  return (
    <div className={`carousel ${slideDirection} ${transform} font-inter` }>
            <div className={`list `}  >  
                {sliders.map((item, index) => (
                    <div onClick={() => setCurrentSlide(index)}
                    className={`item`}
                    key={index}
                    style={{ 
                        opacity: index === currentSlide ? 1 : 0,
                        zIndex: index === currentSlide ? 1 : -1 
                    }}
                    >
                        <img src={item.image} alt={item.member} loading='lazy'  className='w-full sm:h-full pm:h-1/2'/>
                        <div className={`content  md:top-[15%] pm:top-[6%]`}>
                            <div className="author md:text-base pm:text-sm">GAME</div>
                            <div className="topic md:text-[5rem] sm:text-6xl pm:text-[40px] ">{item.name}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail">
            {thumbnailOrder.map((index) => {
                    const items = sliders[index];
                    return (
                        <div 
                            className="item pm:hidden sm:block" 
                            key={items.id} 
                            onClick={() => setCurrentSlide(index)}
                        >
                            <img src={items.image} alt={items.name} loading='lazy'/>
                            <div className="content">
                                <div className="title">{items.name}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="arrows sm:top-[80%] right-1/2 pm:top-[40%]">
            <button id="prev" onClick={prevSlide} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
            </button>
            <button id="next" onClick={nextSlide} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>

            </button>
        </div>
        
    </div>
    
  )
}

export default Slider
