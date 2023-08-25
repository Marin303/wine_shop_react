import React from "react";
import product1 from "../Images/featured/pro-1.png";
import product2 from "../Images/featured/pro-2.png";
import product3 from "../Images/featured/pro-3.png";
import product4 from "../Images/featured/pro-4.png";
import product5 from "../Images/featured/pro-5.png";
import product6 from "../Images/featured/pro-6.png";
import useSwipe from "../Utility/SwipeEffect";

const Products = ({ currentSlide, setCurrentSlide, screenWidth }) => {
  const isDesktop = screenWidth > 800;
  const isMobile = screenWidth < 400;

  const products = [
    {
      image: product1,
      alt: "Annabelle wine",
      name: "Quinta do Crasto",
      price: 300,
      discount: 340,
    },
    {
      image: product2,
      alt: "Saint Patrick wine",
      name: "Quinta do Crasto",
      price: 300,
      discount: 340,
    },
    {
      image: product3,
      alt: "Carignan wine",
      name: "Quinta do Crasto",
      price: 300,
      discount: 340,
    },
    {
      image: product4,
      alt: "Cold Wind wine",
      name: "Quinta do Crasto",
      price: 300,
      discount: 340,
    },
    {
      image: product5,
      alt: "Trilogy wine",
      name: "Quinta do Crasto",
      price: 300,
      discount: 340,
    },
    {
      image: product6,
      alt: "Jackobs Creek wine",
      name: "Quinta do Crasto",
      price: 300,
      discount: 340,
    },
  ];

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(
    products.length,
    setCurrentSlide,
    screenWidth
  );

  const renderProducts = (start, end) => {
    return products.slice(start, end).map((product, index) => (
      <section key={index} className="inline-block relative cursor-pointer">
        <img
          src={product.image}
          alt={product.alt}
          draggable="false"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />

        {start + index === 1 && (
          <span className="triangle bg-yellow-400 inline-block p-2 rotate-[-90deg] absolute top-0 left-0 font-semibold">
            NEW
          </span>
        )}
        <p>{product.name}</p>
        <div className="flex justify-center gap-4">
          <p>${product.price}</p>
          <p className="line-through">${product.discount}</p>
        </div>
      </section>
    ));
  };

  if (isMobile) {
    return renderProducts(currentSlide, currentSlide + 1);
  }

  return (
    <>
      {isDesktop
        ? renderProducts(0, products.length)
        : isMobile
        ? renderProducts(currentSlide, currentSlide + 1)
        : renderProducts(3 * currentSlide, 3 * currentSlide + 3)}
    </>
  );
};

export default Products;
