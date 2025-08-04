import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { searchContext } from '../Context/UserContext';

export default function SignUp() {
  const [formData, setFormData] = useState({name: '', contact: '', password: '', confirmPassword: ''});
  const [errors, setErrors] = useState({});
  const { setUserData  , loginUser} = useContext(searchContext);
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;

    useEffect(()=>{
        window.scrollTo({top:0 , behavior:"smooth"})
      })

      

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({});
  };



  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!emailRegex.test(formData.contact) && !mobileRegex.test(formData.contact)) {
      newErrors.contact = 'Enter a valid mobile number or email';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Minimum 6 characters required';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
   const newUser = {
  name: formData.name,
  contact: formData.contact,
  email: emailRegex.test(formData.contact) ? formData.contact : '',
  mobile: mobileRegex.test(formData.contact) ? formData.contact : '',
  password: formData.password,
};

    localStorage.setItem("user", JSON.stringify(newUser));
   loginUser(newUser); 
   navigate("/");
  }
};

  const fields = [
    { title: "Your Name", type: "text", name: "name" },
    { title: "Enter Mobile Number or email", type: "text", name: "contact" },
    { title: "Password (at least 6 characters)", type: "password", name: "password" },
    { title: "Re-enter Password", type: "password", name: "confirmPassword" },
  ];

  return (
    <div className='bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center py-20 px-4'>
      <div className='bg-white w-full max-w-lg sm:w-[90%] md:w-[60%] lg:w-[36%] py-4 px-6 sm:px-10 rounded-2xl shadow-2xl'>
        <h1 className='font-semibold text-3xl text-center underline font-serif text-blue-500'>
          Grab<span className='text-orange-400 font-mono'>It</span>
        </h1>
        <form onSubmit={handleSubmit}>
          {fields.map((field, index) => (
            <div className='flex flex-col' key={index}>
              <label className='mb-1 mt-8 font-semibold text-1xl ml-1 '>{field.title}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className='border border-gray-300 rounded-sm p-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none focus:ring focus:ring-blue-600 transition-all'
              />
              {errors[field.name] && (
                <span className="text-red-500 text-sm mt-1">{errors[field.name]}</span>
              )}
            </div>
          ))}
          <button
            type='submit'
            className='mt-6 w-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer font-semibold py-2 text-1xl rounded-lg'
          >
            Sign Up
          </button>
        </form>
        <h4 className='text-center mt-4 font-sans'>
          Already have an account?{' '}
          <NavLink to="/sign-in" className="text-blue-500 font-semibold hover:underline">
            Sign-In
          </NavLink>
        </h4>
      </div>
    </div>
  );
}
