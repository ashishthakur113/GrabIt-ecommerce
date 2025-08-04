import { useContext, useEffect, useRef, useState } from "react";
import { FaRegUserCircle, FaHeart } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { searchContext } from "../Context/UserContext";
import { FaTruck } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function UserProfile() {
  const { logoutUser, userData, DeleteAccount } = useContext(searchContext);
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const [activeSection, setActiveSection] = useState("personal");
  const [formData, setFormData] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email) {
      const saved = localStorage.getItem(`deliveryDetails_${user.email}`);
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

    useEffect(()=>{
        window.scrollTo({top:0 , behavior:"smooth"})
      })

  const [isChanged, setIsChanged] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userData?.email) {
      const saved = localStorage.getItem(`deliveryDetails_${userData.email}`);
      if (saved) {
        setFormData(JSON.parse(saved));
      } else {
        setFormData({});
      }
    } else {
      setFormData({});
    }
  }, [userData]);

  const handleScrollToContent = () => {
    if (window.innerWidth < 768 && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    handleScrollToContent();
  };

  const handleFormChange = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      setIsChanged(true);
      return updated;
    });
  };

  const handleSave = () => {
    if (!userData?.email) return;
    localStorage.setItem(
      `deliveryDetails_${userData.email}`,
      JSON.stringify(formData)
    );
    setIsChanged(false);
    setMessage("Details saved successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const handleloggout = () => {
    logoutUser();
    navigate("/sign-in");
  };

  const handleDelete = () => {
    DeleteAccount();
    navigate("/");
  };

  const addressFields = [
    { title: "Pincode", placeholder: "Enter 6 Digits PIN-Code", type: "number" },
    { title: "Flat, House No., Building, Apartment", type: "text" },
    { title: "Area, Street, Sector, Village", type: "text" },
    { title: "Landmark", type: "text" },
    { title: "City", type: "text" },
    { title: "State", type: "text" },
  ];

  const btnLink =
    "hover:bg-gray-100 w-full flex items-center gap-3 text-left py-3 mt-1 hover:text-blue-400 text-gray-600 cursor-pointer font-semibold text-xl pl-5 uppercase";

  const btns = [
    { title: "my order", to: "/yourorder", icon: FaTruck },
    { title: "my cart", to: "/cart", icon: IoMdCart },
    { title: "my wishlist", to: "/wishList", icon: FaHeart },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-20 lg:px-20 flex flex-col lg:flex-row gap-10 ">
      {/* Hello Div --------- */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:hidden bg-white w-full shadow-xl flex items-center p-4 rounded-md"
      >
        <FaRegUserCircle className="rounded-full text-blue-300 mr-4" size={60} />
        <div>
          <h5 className="text-sm text-gray-600">Hello,</h5>
          <span className="text-gray-800 text-xl font-semibold">
            {userData?.name || "Guest"}
          </span>
        </div>
      </motion.div>

      {/* Sidebar -------- */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-6 w-full lg:w-1/3"
      >
        <div className="bg-white w-full shadow-xl items-center p-4 rounded-md hidden lg:flex border-1 border-gray-400">
          <FaRegUserCircle className="rounded-full text-blue-300 mr-4" size={60} />
          <div>
            <h5 className="text-sm text-gray-600">Hello,</h5>
            <span className="text-gray-800 text-xl font-semibold">
              {userData?.name || "Guest"}
            </span>
          </div>
        </div>

        <div className="bg-white w-full shadow-xl py-5 rounded-md border-1 border-gray-400">
          <h1 className="text-xl uppercase font-semibold text-slate-600 mb-4 pl-5">Account Settings</h1>

          <button
            onClick={() => handleSectionChange("personal")}
            className="hover:bg-gray-100 w-full text-left py-3 hover:text-blue-400 cursor-pointer text-xl pl-5"
          >
            Personal Information
          </button>

          <button
            onClick={() => handleSectionChange("address")}
            className="hover:bg-gray-100 w-full text-left py-3 mt-1 hover:text-blue-400 cursor-pointer text-xl pl-5"
          >
            Manage Address
          </button>

          {btns.map(({ title, to, icon: Icon }, index) => (
            <div key={index}>
              <NavLink to={to}>
                <button className={btnLink}>
                  <Icon size={20} />
                  {title}
                </button>
              </NavLink>
              <hr className="border-gray-300" />
            </div>
          ))}

          {userData?.email ? (
            <>
              <button
                onClick={handleloggout}
                className="text-xl text-black pl-6 mt-4 cursor-pointer font-semibold flex hover:text-red-600 items-center gap-3"
              >
                <FiLogOut size={20} /> Log Out
              </button>
              <hr className="border-gray-300 mt-2" />
              <button
                onClick={handleDelete}
                className="text-xl text-red-500 pl-6 mt-6 cursor-pointer font-semibold flex hover:text-red-600 items-center gap-3"
              >
                <MdDelete size={20} /> Delete Account Permanent
              </button>
            </>
          ) : (
            <NavLink to="/sign-in">
              <button className="text-xl text-green-500 pl-6 mt-6 cursor-pointer font-bold flex hover:underline items-center gap-3">
                <IoKeyOutline size={28} /> Sign In
              </button>
            </NavLink>
          )}
        </div>
      </motion.div>

      {/* Right content panel --------*/}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white w-full lg:w-2/3 p-6 rounded-md shadow-2xl overflow-y-auto max-h-[84vh] border-1 border-gray-400"
      >
        {activeSection === "personal" && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["Name", "Last Name", "Mobile No.", "Email"].map((label, index) => (
                <div key={index} className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700">{label}</label>
                  <input
                    type={label === "Email" ? "email" : label === "Mobile No." ? "tel" : "text"}
                    placeholder={label}
                    value={formData[label] || ""}
                    onChange={(e) => handleFormChange(label, e.target.value)}
                    className="border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
            {isChanged && (
              <button
                onClick={handleSave}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Save Details
              </button>
            )}
            {message && <p className="text-green-600 mt-3 font-medium">{message}</p>}
          </>
        )}

        {activeSection === "address" && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Manage Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {addressFields.map((field, index) => (
                <div key={index} className="flex flex-col">
                  <label className="mb-1 font-medium text-gray-700">{field.title}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder || ""}
                    value={formData[field.title] || ""}
                    onChange={(e) => handleFormChange(field.title, e.target.value)}
                  className="border border-gray-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}
            </div>
            {isChanged && (
              <button
                onClick={handleSave}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Save Details
              </button>
            )}
           {message && <p className="text-green-600 mt-3 font-medium">{message}</p>}
          </>
        )}
      </motion.div>
    </div>
  );
}
