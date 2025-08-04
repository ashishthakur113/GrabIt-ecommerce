import { createContext, useEffect, useState } from 'react';
import { LoadCart, ClearCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { ClearWish , LoadWish } from '../redux/wishListSlice';

export const searchContext = createContext();

export default function UserContext({ children }) {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [isloggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const loginStatus = localStorage.getItem("isloggedIn");

    if (storedUser && loginStatus === "true") {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    setLoading(false); 
  }, []);

  useEffect(() => {
    if (userData && isloggedIn) {
      const savedCart = JSON.parse(localStorage.getItem(`cart_${userData.email}`)) || [];
      dispatch(LoadCart(savedCart));
    }
  }, [userData, isloggedIn]);

   useEffect(() => {
    if (userData && isloggedIn) {
      const savedWish = JSON.parse(localStorage.getItem(`wish_${userData.email}`)) || [];
      dispatch(LoadWish(savedWish));
    }
  }, [userData, isloggedIn]);

 const loginUser = (userObj) => {
  setUserData(userObj);
  setIsLoggedIn(true);
  localStorage.setItem("user", JSON.stringify(userObj));
  localStorage.setItem("isloggedIn", "true");

  const savedCart = JSON.parse(localStorage.getItem(`cart_${userObj.email}`)) || [];
  dispatch(LoadCart(savedCart));

  const savedWish = JSON.parse(localStorage.getItem(`wish_${userObj.email}`)) || [];
  dispatch(LoadWish(savedWish)); 
};

  const logoutUser = () => {
    setUserData(null);
    setIsLoggedIn(false);
    localStorage.removeItem("isloggedIn");
    dispatch(ClearWish());
    dispatch(ClearCart());
  };

  const DeleteAccount = () => {
    setUserData(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isloggedIn");
    dispatch(ClearCart());
    dispatch(ClearWish());
  };

  const data = {
    searchTerm,
    setSearchTerm,
    userData,
    setUserData,
    loginUser,
    logoutUser,
    isloggedIn,
    DeleteAccount,
    loading,
  };

  return (
    <searchContext.Provider value={data}>
      {children}
    </searchContext.Provider>
  );
}
