import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {LogIn,LogOut,UserRound,Heart,Truck} from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { searchContext } from "../Context/UserContext";

export default function UserDropdown() {
  const { isloggedIn, logoutUser } = useContext(searchContext);
  const [open, setOpen] = useState(false);

  const css = "hover:bg-gray-200 cursor-pointer p-1 font-sans flex items-center";

  const dropDown = [
    { to: "/user-profile", label: "Profile", icon: UserRound },
    { to: "/wishList", label: "WishList", icon: Heart },
    { to: "/yourorder", label: "Your Order", icon: Truck },
   
  ];

  return (
    <div className="relative z-50">
      <div onClick={() => setOpen(!open)} className="flex items-center cursor-pointer text-1xl gap-1" >
        <FaUserCircle className="size-7 hover:scale-110 transition-transform duration-200 ease-in-out bg-amber-400 rounded-full" />
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          ></div>

          <div className="absolute flex flex-col mt-4 right-0 z-50 w-48 shadow-lg bg-white text-black rounded-sm p-2 border border-black">
            {dropDown.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={css}
                onClick={() => setOpen(false)}
              >
                <Icon width={20} className="inline-block mr-2 text-amber-300" />
                {label}
              </NavLink>
            ))}

            <hr className="my-2" />

            {isloggedIn ? (
              <button
                onClick={() => {
                  logoutUser();
                  setOpen(false);
                }}
                className={`${css} text-red-500`}
              >
                <LogOut width={20} className="inline-block mr-2" />
                Log Out
              </button>
            ) : (
              <NavLink
                to="/sign-in"
                className={`${css} text-green-600`}
                onClick={() => setOpen(false)}
              >
                <LogIn width={20} className="inline-block mr-2" />
                Sign In
              </NavLink>
            )}
          </div>
        </>
      )}
    </div>
  );
}
