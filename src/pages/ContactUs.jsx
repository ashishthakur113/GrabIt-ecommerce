import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import globe from "../assets/globe2.webp";

export default function ContactUs ()  {
  const form = useRef();
  const [success, setSuccess] = useState(false); 
   
   useEffect(()=>{
      window.scrollTo({top:0 , behavior:"smooth"})
    })

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vcq031g', 'template_791vzrz', form.current, {
        publicKey: 'NBhrJnd5wEwOtzDKv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccess(true); 
          form.current.reset(); 

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="relative min-h-screen bg-blue-100 flex items-center justify-center p-6">

      {success && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-xl font-semibold px-6 py-4 rounded shadow-lg z-50">
          Send Successfully!
        </div>
      )}

      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-6xl z-10">
     
        <div className="flex-1 h-[400px] md:h-auto">
          <img
            src={globe}
            alt="Globe"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
              required
            />
            <button
              type="submit"
              className="bg-sky-400 text-white px-6 py-2 rounded hover:bg-sky-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
