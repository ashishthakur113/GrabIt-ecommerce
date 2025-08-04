import { NavLink } from "react-router-dom";

export default function ShopByCategory() {
  const cate = [
    {
      title: "Groceries",
      img: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=",
      path: "/category/groceries",
    },
    {
      title: "Furniture",
      img: "https://images.woodenstreet.de/image/data/Blog%20images/7thapril/2.jpg",
      path: "/category/furniture",
    },
    {
      title: "Electronics", img: "https://ecelectronics.com/wp-content/uploads/2020/04/Modern-Electronics-EC-.jpg", path: "/category/electronics" },
  
    {
      title: "Beauty Products",
      img: "https://images.yourstory.com/cs/4/211ccaf00e6d11e997fe8f165dce9bb1/Imageifxu-1596799036123-1601633425902.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75",
      path: "/category/beauty-product",
    },
  ];

  return (
    <div className="mt-16 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Shop By Category</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cate.map((cat, index) => (
          <NavLink to={cat.path} key={index} className="group">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-blue-500 transition">
                  {cat.title}
                </h3>
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="mt-10 text-center">
        <NavLink to="/category">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            View All Categories
          </button>
        </NavLink>
      </div>
    </div>
  );
}
