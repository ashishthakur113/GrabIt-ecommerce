import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';



export default function Category() {

  const categories = [
    { title: "Men's Wear", img: "https://m.media-amazon.com/images/I/81KWzGRf--L._SL1500_.jpg", path: "/category/men-wear" },
    { title: "Women's Wear", img: "https://i.etsystatic.com/45491344/r/il/be0a6d/6018984661/il_570xN.6018984661_d9kb.jpg", path: "/category/women-wear" },
    { title: "Electronics", img: "https://ecelectronics.com/wp-content/uploads/2020/04/Modern-Electronics-EC-.jpg", path: "/category/electronics" },
    { title: "Fragrances", img: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png", path: "/category/fragrances" },
    { title: "Groceries", img: "https://media.istockphoto.com/id/1319625327/photo/shopping-basket-full-of-variety-of-grocery-products-food-and-drink-on-yellow-background.jpg?s=612x612&w=0&k=20&c=GHyTjlkoFweJnbAadmn4tzEYvfiB73MTe93KMT3GIM0=", path: "/category/groceries" },
    { title: "Furniture", img: "https://images.woodenstreet.de/image/data/Blog%20images/7thapril/2.jpg", path: "/category/furniture" },
    { title: "Beauty Products", img: "https://images.yourstory.com/cs/4/211ccaf00e6d11e997fe8f165dce9bb1/Imageifxu-1596799036123-1601633425902.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75", path: "/category/beauty-product" },
  ];
   
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="flex flex-col min-h-screen mb-20">
  <main className="flex-grow mt-20 overflow-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3  gap-8 p-4 place-items-center">
      {categories.map((category, index) => (
        <Link to={category.path} key={index} className="w-80 transform hover:scale-105 transition-transform duration-200">
          <div className="bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden">
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 text-center">
              <h1 className="text-xl font-bold text-black">{category.title}</h1>
              <p className="text-sm text-gray-600">Shop Now</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </main>
</div>

  );
}
