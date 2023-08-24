export const renderDots = (numberOfDots, activeDot) => {
    return (
      <div 
        className="dots-container flex justify-center align-center gap-1 absolute bottom-[-10px] w-100"
      >
        {Array.from({ length: numberOfDots }).map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeDot ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    );
  };
  