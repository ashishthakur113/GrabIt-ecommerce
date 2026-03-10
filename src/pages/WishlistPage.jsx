
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromWish } from '../redux/wishListSlice';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { searchContext } from '../Context/UserContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import SEO from '../Components/SEO';


export default function WishlistPage() {
  const { userData } = useContext(searchContext)
  const wish = useSelector((state) => state.wishlist);
  const dispatch = useDispatch()

  useEffect(() => {
    if (userData?.email) {
      localStorage.setItem(`wish${userData.email}`, JSON.stringify(wish))
    }
  }, [wish]);


  return (
    <div className="md:max-w-4xl mx-3 md:mx-auto p-2 md:p-6 my-10   rounded-2xl">
      <SEO
        title="Your Wishlist | Grabit"
        description="View and manage your wishlist on Grabit. Save your favorite products and purchase them anytime."
      />

      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 ">❤️ My wishList</h2>
      {wish.length === 0 ? (
        <p className="text-center text-red-600 text-lg">Your wishList is empty!</p>
      ) : (
        <div className="flex flex-col gap-6">
          {wish.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 bg-white p-4 justify-between rounded-xl shadow" >
              <Link to={`/category/${item.category}/product/${item.id}`}
                state={{ category: item.category }}>
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-md object-cover"
                  />
                  <div className='flex-col ml-5'>
                    <h4 className="md:text-lg text-sm font-medium text-gray-700">{item.title}</h4>
                    <p className="text-green-600 font-semibold">$ {item.price}</p>
                  </div>
                </div>
              </Link>
              <button className="text-red-500 text-2xl px-4 py-2 rounded-md hover:bg-red-600" onClick={() => dispatch(RemoveFromWish(item.id))}>
                <RiDeleteBin6Line />
              </button>
            </div>
          ))}
        </div>
      )}


    </div>
  );
}
