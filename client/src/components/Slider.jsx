import React, { useState, useEffect } from 'react';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const images = [image3, image2, image1];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="slider-container w-full h-[300px] md:h-[500px] lg:h-[600px] mx-auto overflow-hidden relative">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slider-image w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />
      {/* Optional: Add navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} transition-colors duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
