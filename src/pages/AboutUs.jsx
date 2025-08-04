import { motion } from 'framer-motion';
import Aboutus from '../assets/Aboutus.png';
import shoppingOnline2 from '../assets/shoppingOnline2.webp';
import Business2 from '../assets/business2.webp';
import OurLeaders from '../Components/OurLeaders';
import { useEffect } from 'react';

const timelineData = [
  { year: "2020", title: "Founded GrabIt", desc: "GrabIt was born with a mission to simplify online shopping." },
  { year: "2021", title: "10K+ Customers", desc: "We reached 10,000 customers and expanded across India." },
  { year: "2022", title: "Seller Network", desc: "Welcomed 500+ sellers to our platform." },
  { year: "2023", title: "App Launch", desc: "Launched our mobile app with 100K+ downloads." },
  { year: "2024", title: "Pan India Growth", desc: "Operating in 500+ cities with fast delivery services." }
];

export default function AboutUs() {

  useEffect(() => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   }, []);
   
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center my-15 sm:mt-2"
      >
        <img src={Aboutus} alt="About Us" className="w-4/4 sm:w-4/6 sm:rounded-lg shadow-lg" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center mt-10 mb-20 sm:mb-20"
      >
        <div className="bg-orange-50 border-orange-400 text-center border rounded-2xl mx-1 sm:mx-0 sm:p-10 p-4 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-3 sm:mb-5 text-orange-600">Our Purpose</h2>
          <p className="text-[16px] font-semibold text-orange-600 leading-relaxed">
            To inspire vibrant &amp; joyous self-expression, by<br />
            expanding fashion possibilities for India.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center px-4 sm:px-10 md:px-20 mt-10 mb-8"
      >
        <div className="w-full max-w-5xl bg-white shadow-md rounded-xl border-l-[10px] border-blue-500 p-3 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">What We Do</h2>
          <p className="text-normal text-gray-800 leading-relaxed">
            At <span className="font-semibold">GrabIt</span>, we simplify online shopping by connecting people with the products they need — from fashion to gadgets, home essentials to personal care.
            <br /><br />
            We curate quality products, ensure fair pricing, and deliver them with speed and trust. Our platform bridges the gap between local sellers and nationwide buyers, enabling a seamless shopping experience that’s fast, reliable, and secure.
          </p>
        </div>
      </motion.div>

   
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 bg-slate-200 shadow-md rounded-2xl p-4 sm:p-12 mb-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-800 mb-4">For Customers</h2>
            <p className="text-[17px] sm:text-lg text-slate-800 mb-3">
              We believe shopping should be joyful — not stressful. Our platform is designed for everyday Indians, offering:
            </p>
            <ul className="list-disc list-inside text-slate-800 text-normal sm:text-lg  space-y-2">
              <li>A wide range of handpicked products</li>
              <li>Affordable pricing with regular deals</li>
              <li>Easy returns and reliable delivery</li>
              <li>Secure payment options</li>
            </ul>
            <p className="text-lg text-slate-700 mt-4">
              Whether you’re shopping for fashion, electronics, or daily needs — we’re here to make your life simpler and better.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={shoppingOnline2} alt="Online shopping" className="w-[90%] max-w-[500px] rounded-xl shadow-md" />
          </div>
        </div>
     

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-slate-200 shadow-md rounded-2xl p-4 sm:p-12">
          <div className="md:w-1/2 flex justify-center">
            <img src={Business2} alt="Sell with us" className="w-[90%] max-w-[500px] rounded-xl shadow-md" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-800 mb-4">For Businesses & Brands</h2>
            <p className="text-lg text-slate-800 mb-3">
              We empower sellers, startups, and established brands to grow their reach and boost sales through our ecommerce platform.
            </p>
            <ul className="list-disc list-inside text-slate-800 text-[17px] sm:text-lg space-y-1 sm:space-y-2">
              <li>Nationwide reach to customers across India</li>
              <li>Sales & analytics tools to track and improve performance</li>
              <li>Logistics & fulfillment support for fast delivery</li>
              <li>Marketing and promotional visibility</li>
              <li>Secure, smooth transactions and return handling</li>
            </ul>
            <p className="text-lg text-slate-700 mt-4">
              Whether you're a local seller or a growing brand — we make selling online simpler and more powerful.
            </p>
          </div>
        </div>
     

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-white py-16 px-4 sm:px-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-12">
          Our Journey
        </h2>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="absolute top-[24px] left-0 w-full h-1 bg-blue-300 hidden md:block"></div>
          <div className="absolute top-0 left-[24px] h-full w-1 bg-blue-300 block md:hidden"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-12 md:gap-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex md:flex-col flex-row items-start md:items-center text-left md:text-center relative pl-10 md:pl-0"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md absolute left-3.5 sm:left-0 top-1 sm:top-3 md:mt-2.5 md:static md:mb-4"></div>
                <div className="ml-4 md:ml-0">
                  <p className="text-sm font-bold text-blue-800">{item.year}</p>
                  <p className="text-normal font-semibold text-gray-600">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
 <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full bg-white py-16 px-4 sm:px-10"
      >
      <OurLeaders />
      </motion.div>
    </div>
  );
}
