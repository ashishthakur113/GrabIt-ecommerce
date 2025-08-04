import React, { useEffect, useState } from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';

export default function CategoryProducts() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

 useEffect(() => {
  async function getdata() {
    const response = await fetch("/data.json");
    const data = await response.json();
    setProducts(data.products); 
  }
  getdata();
}, []);

  useEffect(() => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   }, []);



  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <>
      <h1 className="text-3xl mt-5 ml-10 text-black font-bold">
        {categoryName === 'men-wear' ? "Men's Wear" :
          categoryName === 'women-wear' ? "Women's Wear" :
            categoryName.replace(/-/g, " ").toUpperCase()}

      </h1>

      <div className="mt-6 px-2 sm:px-4 md:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 xl:gap-x-8 mb-20">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative border border-gray-500 rounded-lg p-2"
          >
            <Link
              to={`/category/${product.category}/product/${product.id}`}
              state={{ category: product.category, productName: product.title }}
            >

              <img
                alt={product.imageAlt}
                src={product.images}
                className="w-full h-40 sm:h-60 lg:h-80 object-cover rounded-md bg-gray-200"
              />
              <div className="mt-3">
                <h3 className="text-sm sm:text-base lg:text-xl text-black text-center font-semibold h-12 overflow-hidden">
                  {product.title}
                </h3>
                <div className="hidden sm:flex sm:flex-col items-center mt-2 space-y-1">
                  <p className="text-xs sm:text-sm lg:text-base text-gray-900">
                    Category: {product.category}
                  </p>
                  <p className="text-xs sm:text-sm  lg:text-base text-red-500">
                    Price: ${Math.floor(product.price)}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-red-500">
                    Discount: {Math.floor(product.discountPercentage)}%
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex flex-row sm:hidden justify-evenly">
              <h4>${product.price}</h4>
            </div>


          </div>
        ))}
      </div>
    </>
  );
}
