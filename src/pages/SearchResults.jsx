import { useContext, useEffect, useState } from 'react';
import { searchContext } from '../Context/UserContext';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice'; 
import Star from '../Components/Star';

export default function SearchResults() {
  const { searchTerm, setSearchTerm } = useContext(searchContext);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchTerm) {
      const saved = localStorage.getItem('searchTerm');
      if (saved) {
        setSearchTerm(saved);
      }
    }
  }, [searchTerm, setSearchTerm]);

useEffect(() => {
  async function getdata() {
    const response = await fetch("/data.json");
    const data = await response.json();
    setProducts(data.products); 
  }
  getdata();
}, []);


  const filtered = products.filter((product) => {
    const search = searchTerm.trim().toLowerCase();
    const regex = new RegExp(`\\b${search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    return regex.test(product.title.toLowerCase()) || regex.test(product.category.toLowerCase());
  });

  useEffect(() => {
    if (filtered.length > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [filtered]);

  const handleCart = (product) => {
    const item = {
      id: product.id,
      image: product.images,
      title: product.title,
      price: product.price,
      quantity: 1,
      category: product.category,
    };
    toast.success("Item Added to Cart", { autoClose: 1000 });
    dispatch(AddItem(item));
  };

  return (
    <div className="w-full min-h-screen px-4 py-6 sm:px-6 md:px-10 lg:px-20">
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row bg-white shadow-lg border border-gray-300 rounded-md mb-6 p-4 gap-4"
          >
            <div className="flex justify-center md:w-1/3">
              <Link to={`/category/${product.category}/product/${product.id}`} className="block w-full">
                <img
                  src={product.images}
                  alt={product.title}
                  className="object-contain h-48 w-full max-w-xs"
                />
              </Link>
            </div>
            <div className="md:w-2/3 flex flex-col justify-between text-black">
              <Link to={`/category/${product.category}/product/${product.id}`}>
                <h3 className="font-semibold text-xl sm:text-2xl mb-2">{product.title}</h3>
                <p className="text-sm sm:text-base mb-2">{product.description}</p>
              </Link>
              <Star stars={product.rating} />
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <p className="text-lg font-semibold">${Math.floor(product.price)}</p>
                <p className="text-red-600 font-medium">-{Math.floor(product.discountPercentage)}%</p>
                <p className="text-sm text-gray-700">Category: {product.category}</p>
              </div>
              <button
                onClick={() => handleCart(product)}
                className="mt-4 w-fit px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-lg">No results found.</p>
      )}
    </div>
  );
}
