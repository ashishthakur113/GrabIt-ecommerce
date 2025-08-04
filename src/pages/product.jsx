import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Star from "../Components/Star";
import { motion } from 'framer-motion';

export default function Products() {
  const [products, setProduct] = useState([]);

   useEffect(()=>{
    window.scrollTo({})
   })
useEffect(() => {
  async function getdata() {
    const response = await fetch("/data.json");
    const data = await response.json();
    setProduct(data.products); 
  }
  getdata();
}, []);


  return (
    <>
      <h1 className="text-3xl mt-5 ml-10 font-bold text-black">Trending Products</h1>

      <div className="mt-6 px-2 sm:px-4 md:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-10 mb-20">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.05 * index,
              type: "spring",
              bounce: 0.1,
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="group relative border border-gray-300 rounded-lg shadow-md p-2 transform hover:scale-105 transition-transform duration-200"
          >
            <Link
              to={`/category/${product.category}/product/${product.id}`}
              state={{ category: product.category, productName: product.title }}
            >
              <img
                alt={product.imageAlt}
                src={product.images}
                className="w-full h-40 sm:h-60 lg:h-64 object-cover rounded-md bg-gray-200"
              />
              <div className="mt-3">
                <h3 className="text-sm sm:text-base lg:text-xl text-black text-center font-semibold h-12 overflow-hidden">
                  {product.title}
                </h3>
                <div className="hidden sm:flex sm:flex-col items-center mt-2 space-y-1">
                  <Star stars={product.rating} />
                  <p className="text-xs sm:text-sm lg:text-base text-red-500">
                    ${Math.floor(product.price)}.00
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex flex-row sm:hidden justify-evenly">
              <h4>${product.price}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
