import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number; // Time in ms between slides
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setSlideIn(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setSlideIn(true);
      }, 500); // Match the transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">No images provided</div>;
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ borderRadius: '0.5rem' }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
            style={{ borderRadius: '0.5rem' }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
