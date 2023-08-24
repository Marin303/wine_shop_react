import { useState } from "react";

const useSwipe = (itemsCount, setCurrentSlide, screenWidth) => {
  const [startX, setStartX] = useState(0);
  const [swiping, setSwiping] = useState(false);

  const itemsPerPage =
    screenWidth < 400 ? 1 : screenWidth <= 800 ? 3 : itemsCount;

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (swiping) return;

    const touchX = e.touches[0].clientX;
    const deltaX = startX - touchX;
    const maxPosition = Math.ceil(itemsCount / itemsPerPage) - 1;

    switch (true) {
      case deltaX > 50:
        setCurrentSlide((prev) => {
          const nextSlide = prev + 1;
          return nextSlide > maxPosition ? 0 : nextSlide;
        });
        setSwiping(true);
        break;
      case deltaX < -50:
        setCurrentSlide((prev) => {
          const prevSlide = prev - 1;
          return prevSlide < 0 ? maxPosition : prevSlide;
        });
        setSwiping(true);
        break;
      default:
        break;
    }
  };

  const handleTouchEnd = () => {
    setSwiping(false);
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useSwipe;
