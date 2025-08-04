import { useContext, useEffect, useState } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import { searchContext } from '../Context/UserContext';

export default function SignIn() {

  const [formData , setFormData] = useState({  contact:'', password:'' });
  const [error ,setError] = useState();
  const {userData , setUserData } = useContext(searchContext);
  const { loginUser} = useContext(searchContext);

  const navigate = useNavigate();

  const inputcss = 'border border-gray-300 mb-8 rounded-sm p-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus:ring focus:ring-blue-600 transition-all';
  
  const handleSubmit = (e) => {
  e.preventDefault();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (
    storedUser &&
    (storedUser.contact === formData.contact ||
     storedUser.email === formData.contact ||
     storedUser.mobile === formData.contact) &&
    storedUser.password === formData.password
  ) {
    loginUser(storedUser);  
    navigate("/");
  } else {
    setError("❌ Invalid contact or password");
  }
};  

     useEffect(()=>{
         window.scrollTo({top:0 , behavior:"smooth"})
       })


  const handleChange=(e)=>{
     setFormData({
      ...formData,
      [e.target.name]:e.target.value
     })
     setError('')
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center px-4'>
      <div className='bg-white w-full max-w-lg sm:w-[90%] md:w-[60%] lg:w-[36%] py-8 px-6 sm:px-10 rounded-2xl shadow-2xl'>
        <h1 className='font-semibold text-3xl text-center underline font-serif text-blue-500'>Grab<span className='text-orange-500 font-mono'>It</span></h1>
        {error && <p className='text-red-500 text-center'>{error}</p>}
        {/* ============== FORM ---------------- */}
        <form className='flex flex-col mt-10' onSubmit={handleSubmit}>
          <label className='mb-1 mt-6 font-semibold text-1xl ml-1 '>Enter Email or Mobile No.</label>
          <input 
          type="text" 
          className={inputcss} 
          name="contact"
          value={formData.contact}
          onChange={handleChange}
           />

          <label className='mb-1 mt-6 font-semibold text-1xl ml-1'>Password</label>
          <input 
          type="password"
          className={inputcss}
          name="password"
          value={formData.password}
          onChange={handleChange}
           />
          <button className='mt-6 w-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer font-semibold py-2 text-1xl rounded-lg'>Log-In</button>
          <h4 className='text-center font-sans my-6'>
            Already have an account?{' '}
            <NavLink to="/sign-up" className="text-blue-500 font-semibold hover:underline">Sign-up</NavLink>
          </h4>
        </form>
      </div>
    </div>
  );

}