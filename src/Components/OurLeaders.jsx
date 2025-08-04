import RDJ from '../assets/Rdj.jpg'
import { motion } from 'framer-motion';

const leaders = [
  {
     name: "Aarav Mehta",
    title: "Chief Executive Officer",
    image: RDJ,
  },
  {
    name: "Ravi Sharma",
    title: "Chief Technology Officer",
    image: RDJ,
  },
  {
    name: "Kabir Verma",
    title: "Chief Marketing Officer",
    image: RDJ,
  },
  {
    name: "Tanvi Iyer",
    title: "Chief Product Officer",
    image: RDJ,
  },
  {
    name: "Manish Roy",
    title: "Chief Operating Officer",
    image: RDJ,
  },
    {
    name: "Niraj Bansal",
    title: "Chief Customer Experience Officer",
    image: RDJ,
  },
];

export default function OurLeaders() {
  return (
 
    <div className="w-full bg-[#f9f9f9] py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Meet our <span className="text-pink-600">leaders</span>
      </h2>

      <div className="overflow-x-auto no-scrollbar cursor-pointer">
        <div className="flex gap-10 w-max px-4 sm:px-10">
          {leaders.map((leader, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex md:flex-col flex-row items-start md:items-center text-left md:text-center relative pl-10 md:pl-0"
              >
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl duration-300 flex flex-col items-center p-6 min-w-[220px] sm:min-w-[250px] transition-all border-2 border-transparent hover:border-pink-500"
            >
               
              <img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 sm:w-28 sm:h-28 p-1 object-cover rounded-full mb-4 border"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {leader.name}
              </h3>
              <p className="text-sm sm:text-base text-pink-600 mt-1 text-center">
                {leader.title}
              </p>
            </div>
              </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
