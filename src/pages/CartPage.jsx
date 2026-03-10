import { useDispatch, useSelector } from 'react-redux';
import { RemoveItem, IncrementQty, DecrementQty } from '../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { FaOpencart } from "react-icons/fa";
import { useContext, useEffect } from 'react';
import { searchContext } from '../Context/UserContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import SEO from '../Components/SEO';


export default function CartPage() {

  const { userData } = useContext(searchContext)
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate = useNavigate();

  const handleProceedbtn = () => {
    navigate("/purchase", {
      state: {
        from: "cart",
        products: cart,
      },
    });
  };

  useEffect(() => {
    if (userData?.email) {
      localStorage.setItem(`cart_${userData.email}`, JSON.stringify(cart))
    }
  }, [cart, userData])

  return (
    <div className="md:max-w-4xl mx-2 md:mx-auto p-6 my-10 bg-gray-50 shadow-lg rounded-2xl ">
      <SEO
        title="Your Cart | Grabit"
        description="Review the items in your cart on Grabit. Update quantities, remove products, and proceed to checkout securely."
      />
      <h2 className=" text-3xl font-semibold text-center text-gray-800 mb-6"> My Cart  <FaOpencart size={28} className='inline-block text-slate-600 mb-1' strokeWidth={3} /> </h2>
      {cart.length === 0 ? (
        <p className="text-center text-red-600 text-lg">Your cart is empty!</p>
      ) : (
        <div className="flex flex-col gap-2 md:gap-6">
          {cart.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-1 md:gap-6 bg-white p-4 rounded-xl shadow" >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 rounded-md object-cover"
              />
              <div className="flex-1">
                <Link to={`/category/${item.category}/product/${item.id}`}
                  state={{ category: item.category }}>
                  <h4 className="md:text-lg text-sm font-medium text-gray-700">{item.title}</h4>
                  <p className="text-green-600 font-semibold">$ {item.price}</p>
                </Link>
                <div className="flex items-center gap-3 mt-2">
                  <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm md:text-xl font-bold" onClick={() => dispatch(DecrementQty(item.id))}>
                    -
                  </button>
                  <span className="md:text-lg text-sm font-semibold">{item.quantity}</span>
                  <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm md:text-xl font-bold" onClick={() => dispatch(IncrementQty(item.id))}>
                    +
                  </button>
                </div>
              </div>

              <button className=" text-red-500 text-2xl px-4 py-2 cursor-pointer rounded-md hover:bg-red-600" onClick={() => dispatch(RemoveItem(item.id))}>
                <RiDeleteBin6Line />
              </button>
            </div>

          ))}
        </div>
      )}

      <div className="mt-10 flex justify-between items-center">
        <h3 className="md:text-xl text-sm font-semibold text-gray-800"> <strong>Total:</strong> ${total.toFixed(2)} </h3>
        <button className={`md:px-6 md:py-3 p-2 rounded-xl text-sm md:text-lg transition-all cursor-pointer
       ${cart.length === 0 ? "bg-gray-400 cursor-not-allowed text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
          onClick={handleProceedbtn} disabled={cart.length === 0}>
          Proceed to Checkout
        </button>

      </div>
    </div>
  );
}
