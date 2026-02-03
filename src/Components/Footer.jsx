import { FaInstagram, FaXTwitter, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import logo from '../../public/logo2.png'

const footerData = [
  { heading: "ABOUT", links: ["Contact Us", "About Us", "Careers", "GrabIt Stories", "Press", "Corporate Information"], },
  {  heading: "GROUP COMPANIES",  links: ["Grabjob", "Grabify", "Shopsy"],},
  { heading: "HELP", links: ["Payments", "Shipping", "Cancellation & Returns", "FAQ"], },
  {  heading: "CONSUMER POLICY",  links: ["Cancellation & Returns", "Terms Of Use", "Security", "Privacy", "Sitemap", "Grievance Redressal", "EPR Compliance"], },
];

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white px-4 sm:px-10 py-10">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 border-b border-gray-600 pb-8">
   
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl sm:text-3xl font-extrabold flex items-center font-serif text-blue-500">
           <img src={logo} alt="logo" className="w-12 h-12" /> Grab<span className="text-orange-400 font-serif">It</span>
          </h1>
          <p className="text-sm text-gray-400">Follow Us</p>
          <div className="flex space-x-4">
            <FaInstagram className="hover:text-pink-500 cursor-pointer" size={24} />
            <FaFacebook className="hover:text-blue-600 cursor-pointer" size={24} />
            <FaXTwitter className="hover:text-white cursor-pointer" size={24} />
          </div>
        </div>

        {footerData.map((section, i) => (
          <div key={i}>
            <h4 className="text-sm text-gray-400 font-semibold mb-2">{section.heading}</h4>
            <ul className="space-y-1">
              {section.links.map((link, idx) => (
                <li
                  key={idx}
                  className="text-sm text-white hover:underline cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 text-sm text-gray-400">

        <span>© 2025 GrabIt. All rights reserved.</span>
 
        <p className="text-center">
          Website Created by <span className="text-white font-semibold">Ashish Tomar</span>
        </p>
        <div className="flex items-center space-x-4 text-white text-lg">
          <a href="https://www.linkedin.com/in/ashish-thakur-90b415330/" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ashishthakur113" target="_blank" rel="noreferrer" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="mailto:ashishtomar365@gmail.com" className="hover:text-red-400">
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </footer>
  );
}
