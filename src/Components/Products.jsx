import React from "react";
import product1 from "../Images/featured/pro-1.png";
import product2 from "../Images/featured/pro-2.png";
import product3 from "../Images/featured/pro-3.png";
import product4 from "../Images/featured/pro-4.png";
import product5 from "../Images/featured/pro-5.png";
import product6 from "../Images/featured/pro-6.png";

const Products = () => {
  
  return (
    <>
      <section className="inline-block relative">
        <img src={product1} alt="Annabelle wine" />
        <span className="triangle bg-yellow-400 inline-block p-2 rotate-[-90deg] absolute top-0 left-0 font-semibold">
          NEW
        </span>
        <p>Quinta do Crasto</p>
        <div className="flex justify-center gap-4">
          <p>$300</p>
          <p className="line-through">$340</p>
        </div>
      </section>
      <section key={product2}>
        <img src={product2} alt="Saint Patrick wine" />
        <p>Quinta do Crasto</p>
        <div className="flex justify-center gap-4">
          <p>$300</p>
          <p className="line-through">$340</p>
        </div>
      </section>
      <section key={product3}>
        <img src={product3} alt="Carignan wine" />
        <p>Quinta do Crasto</p>
        <div className="flex justify-center gap-4">
          <p>$300</p>
          <p className="line-through">$340</p>
        </div>
      </section>

      <section key={product4}>
        <img src={product4} alt="Cold Wind wine" />
        <p>Quinta do Crasto</p>
        <div className="flex justify-center gap-4">
          <p>$300</p>
          <p className="line-through">$340</p>
        </div>
      </section>
      <section key={product5}>
        <img src={product5} alt="Trilogy wine" />
        <p>Quinta do Crasto</p>
        <div className="flex justify-center gap-4">
          <p>$300</p>
          <p className="line-through">$340</p>
        </div>
      </section>
      <section key={product6}>
        <img src={product6} alt="Jackobs Creek wine" />
        <p>Quinta do Crasto</p>
        <div className="flex justify-center gap-4">
          <p>$300</p>
          <p className="line-through">$340</p>
        </div>
      </section>
    </>
  );
};

export default Products;
