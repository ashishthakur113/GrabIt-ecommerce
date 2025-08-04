import { useState, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Searchbar from './Searchbar';
import UserDropdown from './UserDropdown';
import { User, Heart, Truck, ShieldCheck, LogIn, LogOut, ShoppingCartIcon } from "lucide-react";
import { FaOpencart } from "react-icons/fa6";
import { searchContext } from "../Context/UserContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isloggedIn, logoutUser } = useContext(searchContext);

  const navLinkStyle = ({ isActive }) => isActive ? "text-yellow-400  font-semibold" : " ";

  const userLinks = [
    { to: "/user-profile", label: "Profile", icon: User },
    { to: "/cart", label: "Cart", icon: ShoppingCartIcon },
    { to: "/wishList", label: "Wishlist", icon: Heart },
    { to: "/yourorder", label: "Your Orders", icon: Truck },
  ];

  return (
    <div className='sm:mb-10 mb-0 lg:mb-0'>
      <nav className="w-full text-white shadow-md fixed top-0 left-0 z-50" style={{ backgroundColor: "#073b4c" }}>
        <div className="flex justify-between items-center h-22 px-6 md:px-12">
          <div className='flex'>
            <div className="text-3xl font-bold font-serif text-blue-500 mr-4">
              <NavLink to='/'>
                Grab<span className="text-orange-400 font-mono">It</span>
              </NavLink> 
            </div>
            <div className="hidden lg:block ">
              <Searchbar />
            </div>
          </div>

          <ul className="hidden md:flex space-x-6 text-lg font-medium">
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>
            <NavLink to="/products" className={navLinkStyle}>Products</NavLink>
            <NavLink to="/category" className={navLinkStyle}>Category</NavLink>
            <NavLink to="/contactus" className={navLinkStyle}>Contact Us</NavLink>
            <div className="flex items-center gap-8">
              <NavLink to="/cart" >
                <FaOpencart className="hover:text-amber-400 size-7 hover:scale-110 transition-transform duration-200 ease-in-out" />
              </NavLink>
              <UserDropdown />
            </div>
          </ul>

          <div className="md:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        <div className="block lg:hidden px-4  mb-2 w-full flex justify-center">
          <div className="w-full max-w-md">
            <Searchbar />
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-[70%] sm:w-[50%] bg-gray-800 text-white z-[60] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col p-6 pt-24 space-y-4 text-lg font-medium">
          <NavLink className={navLinkStyle} to='/' onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink className={navLinkStyle} to='/products' onClick={() => setIsOpen(false)}>Products</NavLink>
          <NavLink className={navLinkStyle} to='/category' onClick={() => setIsOpen(false)}>Category</NavLink>
          <NavLink className={navLinkStyle} to='/contactus' onClick={() => setIsOpen(false)}>Contact Us</NavLink>

          <hr className="border-gray-600 my-2" />

          <p className="text-sm uppercase tracking-wide text-gray-400">Your Account</p>
          {userLinks.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} onClick={() => setIsOpen(false)} className={navLinkStyle}>
              <Icon className="inline-block w-4 h-4 mr-2" /> {label}
            </NavLink>
          ))}

          <hr className="border-gray-600 my-2" />

          <p className="text-sm uppercase tracking-wide text-gray-400">Auth</p>
          {isloggedIn ? (
            <>
             
              <button onClick={() => { logoutUser(); setIsOpen(false); }} className="text-left text-red-400">
                <LogOut className="inline-block w-4 h-4 mr-2" /> Log Out
              </button>
            </>
          ) : (
            <NavLink to="/sign-in" onClick={() => setIsOpen(false)} className="text-green-400">
              <LogIn className="inline-block w-4 h-4 mr-2" /> Sign In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
