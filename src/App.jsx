import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import Layout from './Components/Layout';
import Products from './pages/product';
import Infopage from './pages/Infopage';
import Category from './pages/Category';
import ErrorPage from './pages/ErrorPage';
import  ContactUs  from './pages/ContactUs';
import CategoryProducts from './pages/CategoryProducts';
import AboutUs from './pages/AboutUs';
import SearchResults from './pages/SearchResults'
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import PurchasePage from './pages/PurchasePage';
import YourOrder from './pages/YourOrder';
import SignIn from './User-Components/SignIn';
import SignUp from './User-Components/SignUp';
import UserProfile from './User-Components/UserProfile';
import {ToastContainer} from "react-toastify"


function App() {
  return (
    <Router>
      <Header />
      <Layout>
          <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={< Products />} />
          <Route path='/category/:category/product/:id' element={<Infopage />} />
          <Route path="/category" element={<Category />} /> 
          <Route path="/*" element={<ErrorPage />} /> 
         <Route path="/contactus" element={< ContactUs/>} />
          <Route path="/category/:categoryName" element={<CategoryProducts />} />
          <Route path="/aboutus" element={< AboutUs/>} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishList" element={<WishlistPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/yourorder" element={<YourOrder />} />
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/sign-Up" element={<SignUp/>}></Route>
          <Route path="/user-profile" element={<UserProfile/>}></Route>
           </Routes>
      </Layout>
     
    </Router>
  );
}

export default App;
