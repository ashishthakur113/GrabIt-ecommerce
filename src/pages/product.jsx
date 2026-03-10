import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Star from "../Components/Star";

export default function Products({ products }) {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <h1 className="text-3xl mt-5 ml-10 md:mt-10 font-bold text-black">Trending Products</h1>

      <div className="mt-6 px-2 sm:px-4 md:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-10 mb-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <Link
              to={`/category/${product.category}/product/${product.id}`}
              state={{ category: product.category, productName: product.title }}
            >
              <div className="overflow-hidden rounded-t-xl py-3">
                <img
                  alt={product.imageAlt}
                  src={product.images}
                  className="w-full h-40 sm:h-56 lg:h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex justify-between">
                  <Star stars={product.rating} />
                  <span className="text-xs text-gray-500">
                    ({product.rating})
                  </span>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-2">
                  <span className="text-lg font-bold text-red-500">
                    ${Math.floor(product.price)}.00
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}