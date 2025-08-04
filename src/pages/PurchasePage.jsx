import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { searchContext } from "../Context/UserContext";
import { toast } from "react-toastify";

export default function PurchasePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [productsToBuy, setProductsToBuy] = useState([]);
  const { userData, isloggedIn, loading } = useContext(searchContext);
  const [paymentMode, setPaymentMode] = useState("Cash on Delivery");
  const [formData, setFormData] = useState({});

 useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);


  useEffect(() => {
    if (userData?.email) {
      const saved = localStorage.getItem(`deliveryDetails_${userData.email}`);
      if (saved) {
        setFormData(JSON.parse(saved));
      }
    }
  }, [userData]);

  useEffect(() => {
    const stateProducts = location.state?.products;
    if (stateProducts) {
      setProductsToBuy(stateProducts);
    }
  }, [location]);

  const fields = [
    { title: "Name", type: "text" },
    { title: "Last Name", type: "text" },
    { title: "Mobile No.", type: "tel" },
    { title: "Email", type: "email" },
    { title: "Pincode", placeholder: "Enter 6 Digits PIN-Code", type: "number" },
    { title: "Flat, House No., Building, Apartment", type: "text" },
    { title: "Area, Street, Sector, Village", type: "text" },
    { title: "Landmark", type: "text" },
    { title: "City", type: "text" },
    { title: "State", type: "text" },
  ];

  const totalAmount = productsToBuy.reduce((acc, p) => acc + p.price * (p.quantity || 1), 0);

 const handleSubmit = (e) => {
   e.preventDefault();
   if (!userData?.email) { 
    alert("Please log in to place an order."); 
    navigate("/sign-in");
    return;
  }

  localStorage.setItem(`deliveryDetails_${userData.email}`, JSON.stringify(formData));

  const order = {
    id: Date.now(),
    date: new Date().toLocaleString(),
    products: productsToBuy,
    total: totalAmount.toFixed(2),
    paymentMode,
    status: "Placed",
  };

  const orderKey = `yourOrders_${userData.email}`;
  const existingOrders = JSON.parse(localStorage.getItem(orderKey)) || [];
  const updatedOrders = [...existingOrders, order];
  localStorage.setItem(orderKey, JSON.stringify(updatedOrders));

  toast.success("Your Order Placed Successfully", { autoClose: 1000 });
  navigate("/yourorder");
};


  if (loading) return <p className="text-center py-10 text-gray-600">Loading...</p>;

  return (
    <div  className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row-reverse gap-8">

        <div className="w-full lg:w-1/3 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="max-h-72 overflow-auto pr-2 space-y-4">
            {productsToBuy.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b pb-2">
                <div className="flex gap-3 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-gray-800">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <button
            form="orderForm"
            type="submit"
            className="mt-6 bg-green-600 text-white w-full py-3 rounded-md hover:bg-green-700"
          >
            Place Order
          </button>
        </div>

        <div className="w-full lg:w-2/3 bg-white p-6 rounded-md shadow-md">
          <h1 className="text-xl font-semibold mb-6">Delivery Address</h1>
          <form
            id="orderForm"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
          >
            {fields.map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-sm text-gray-700 font-medium mb-1">
                  {field.title}
                </label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder || ""}
                  value={formData[field.title] || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.title]: e.target.value })
                  }
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
          </form>

          <div className="mt-6 rounded-md p-4 bg-gray-50">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Select Payment Mode:</h2>
            <select
              value={paymentMode}
              onChange={(e) => setPaymentMode(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Cash on Delivery</option>
              <option>Online Payment</option>
              <option>UPI / Wallet</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
