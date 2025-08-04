import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="w-full bg-white px-4 sm:px-10 py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-y-10 md:gap-x-16">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col justify-center items-start space-y-5"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-transparent bg-clip-text drop-shadow-md text-left">
            GrabIt
          </h1>

          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-700 text-left"
          >
            Your Shopping Destination
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed text-left"
          >
            Discover top groceries, beauty, fragrances, and furniture items. <br />
            Enjoy great deals and excellent service, all in one place. <br />
            Simplify your shopping experience with us.
          </motion.p>

          <Link to="/aboutus">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded mt-2">
              About Us
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center items-center"
        >
          <img
            src={hero}
            alt="Shopping"
            className="w-[90%] sm:w-[80%] md:w-[350px] lg:w-[420px] max-h-[420px] object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
