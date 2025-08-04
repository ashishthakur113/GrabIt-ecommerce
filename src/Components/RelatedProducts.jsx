
import { Link } from "react-router-dom";
import Star from "./Star";

export default function RelatedProducts({ products }) {
  return (
    <div className="mt-12 px-4">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 p-2 flex justify-center item-center rounded-md"
          >
            <Link to={`/category/${item.category}/product/${item.id}`}>
              <img
                src={item.images}
                alt={item.title}
                className="h-50 w-100 object-cover rounded-md mb-2"
              />
              <h3 className="text-md font-semibold sm:justify-between">
                {item.title} <Star stars={item.rating} />
              </h3>
              <p className="text-1xl text-red-500">${Math.floor(item.price)}</p>
              <p className="text-xs text-gray-500">
                {item.discountPercentage}% off
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
