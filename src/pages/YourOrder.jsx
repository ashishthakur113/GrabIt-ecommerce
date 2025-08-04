import React, { useContext, useEffect, useState } from "react";
import { searchContext } from '../Context/UserContext';

export default function YourOrder() {
  const [orders, setOrders] = useState([]);
  const { userData } = useContext(searchContext);
 useEffect(()=>{
    window.scrollTo({top:0 , behavior:"smooth"})
  })
  useEffect(() => {
    if (userData?.email) {
      const savedOrders = JSON.parse(localStorage.getItem(`yourOrders_${userData.email}`)) || [];
      setOrders(savedOrders.reverse()); 
    }
  }, [userData]); 
  

  if (orders.length === 0) {
    return (
      <div className="bg-slate-200 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-700">No orders found</h2>
          <p className="text-gray-500">Your recent orders will appear here.</p>
        </div>
      </div>
    );
  }

  
  return (
    <div className="bg-slate-200 min-h-screen w-full px-6 sm:px-20 py-10">
      <div className="bg-white rounded-md shadow-sm p-6">
        <h1 className="font-bold text-2xl mb-6">Your Orders</h1>

        <div className="flex flex-col gap-8">
          {orders.map((order) => (
            <div key={order.id} className="border border-gray-300 rounded-md p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-600">Order ID: <span className="font-medium">{order.id}</span></p>
                  <p className="text-sm text-gray-600">Date: <span className="font-medium">{order.date}</span></p>
                </div>
                <p className="text-sm font-semibold text-green-600">{order.status}</p>
              </div>

              <div className="mb-4">
                <h2 className="font-bold text-gray-800 mb-1">Products</h2>
                <div className="space-y-3">
                  {order.products.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b pb-2">
                      <div className="flex gap-3 items-center">
                        <img src={item.image} alt={item.title} className="w-14 h-14 rounded object-cover" />
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="text-md font-semibold text-gray-800">${item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-right font-bold text-lg text-gray-800">
                Total: ${order.total}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
