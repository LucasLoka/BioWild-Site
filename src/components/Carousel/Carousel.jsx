import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Anterior</button>
      <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
      <button onClick={nextSlide}>Próximo</button>
    </div>
  );
};

export default Carousel;
