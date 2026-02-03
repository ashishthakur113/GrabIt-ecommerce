import { Link } from "react-router-dom";
import Star from "./Star";

export default function RelatedProducts({ products }) {
  return (
    <div className="sm:m-10 m-2 px-4">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/category/${item.category}/product/${item.id}`}
            className="group bg-white border border-gray-200  rounded-xl  lg:w-100 shadow-sm hover:shadow-lg transition-all duration-300"
          >
        
            <div className="overflow-hidden rounded-t-xl p-2 ">
              <img
                src={item.images}
                alt={item.title}
                className="w-full h-28 md:h-36 sm:h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-3 flex flex-col gap-1">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
                {item.title}
              </h3>

              <div className="flex justify-between">
                <Star stars={item.rating} />
                <span className="text-xs text-gray-500">
                  ({item.rating})
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>

              <p className="text-sm sm:text-base font-bold text-red-500 mt-1">
                ${Math.floor(item.price)}.00
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
