import React, { useEffect, useState } from "react";
import SEO from "../Components/SEO";

export default function YourOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const authEmail = localStorage.getItem("authEmail");
    if (!authEmail) return;

    const orderKey = `yourOrders_${authEmail}`;
    const savedOrders =
      JSON.parse(localStorage.getItem(orderKey)) || [];

    setOrders([...savedOrders].reverse());
  }, []);

  if (orders.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-200">
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-2xl font-bold text-gray-700">
            No orders found
          </h2>
          <p className="text-gray-500">
            Your recent orders will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-200 min-h-screen px-6  sm:px-20 py-10">
      <SEO
        title="Your Orders | Grabit"
        description="View and manage your orders on Grabit. Track your purchases, review order details, and stay updated on your deliveries."
      />
      <div className="bg-white rounded-md shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

        <div className="flex flex-col gap-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-md p-4"
            >
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">
                    Order ID:{" "}
                    <span className="font-medium text-[12px] md:text-lg">{order.id}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Date:{" "}
                    <span className="font-medium text-[12px] md:text-lg">{order.date}</span>
                  </p>
                </div>
                <p className="text-green-600 font-semibold">
                  {order.status}
                </p>
              </div>

              {order.products.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between border-b pb-2 mb-2"
                >
                  <div className="flex md:gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 h-14 rounded"
                    />
                    <div>
                      <p className="font-semibold text-[12px] md:text-lg text-wrap">{item.title}</p>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity || 1}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-sm md:text-lg">${item.price}</p>
                </div>
              ))}

              <div className="text-right font-bold text-sm md:text-lg">
                Total: ${order.total}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
