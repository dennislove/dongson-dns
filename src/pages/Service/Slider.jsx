import React, { useEffect, useRef, useState } from 'react'
import '../Service/style.css'
import data from "../../assets/data.json"

function Slider() {
    const sliders = data.slider;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideDirection, setSlideDirection] = useState("");
    const [transform, setTransform] = useState("")
    const [thumbnailOrder, setThumbnailOrder] = useState(sliders.map((_, index) => index));
   
   
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
    <div className={`carousel ${slideDirection} ${transform}`}>
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
                        <img src={item.image} alt={item.member} loading='lazy' />
                        <div className={`content  md:top-[15%] pm:top-[6%]`}>
                            <div className="author md:text-base pm:text-sm">{item.author}</div>
                            <div className="topic md:text-[5rem] pm:text-[60px]">{item.member}</div>
                            <div className="des">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="thumbnail">
            {thumbnailOrder.map((index) => {
                    const items = sliders[index];
                    return (
                        <div 
                            className="item" 
                            key={items.id} 
                            onClick={() => setCurrentSlide(index)}
                        >
                            <img src={items.image} alt={items.member} loading='lazy'/>
                            <div className="content">
                                <div className="title">{items.member}</div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="arrows">
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
