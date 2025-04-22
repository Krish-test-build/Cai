import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Layers, Lightbulb, Clock3, Settings } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const features = [
  {
    title: "Robot Builder",
    icon: <Layers className="w-8 h-8 text-violet-600" />,
    description: "Easily design custom robots with modular tools made for students.",
  },
  {
    title: "AI-Powered Matching",
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    description: "Use intelligent search to match parts and optimize your build.",
  },
  {
    title: "Automation Tools",
    icon: <Settings className="w-8 h-8 text-red-500" />,
    description: "Automate testing and calibration of your robot systems in seconds.",
  },
  {
    title: "Smart Scheduling",
    icon: <Clock3 className="w-8 h-8 text-cyan-500" />,
    description: "Schedule builds, tests, and prints with precision and simplicity.",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-white">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        {/* Left Section */}
        <motion.div variants={fadeIn('right', 0.4)}>
          <motion.h2 
            variants={textVariant(0.2)}
            className="text-4xl font-bold text-gray-900 mb-6 mt-8"
          >
            Future of Robotics <br /> 
            with Seamless Workflow
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 0.5)}
            className="text-gray-600 mb-8"
          >
            Design, simulate, and build — all in one integrated student-friendly platform.
            Transform your ideas into reality with our comprehensive robotics solution.
            Experience the next generation of robot development tools.
          </motion.p>
          <motion.ul 
            variants={fadeIn('up', 0.6)}
            className="space-y-4 mb-8"
          >
            <motion.li variants={fadeIn('right', 0.7)} className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-violet-600 rounded-full shadow-md animate-ping" />
              <span className="text-sm text-gray-700">Visual Robot Programming</span>
            </motion.li>
            <motion.li variants={fadeIn('right', 0.8)} className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-violet-600 rounded-full shadow-md animate-ping" />
              <span className="text-sm text-gray-700">Advanced Simulation Environment</span>
            </motion.li>
            <motion.li variants={fadeIn('right', 0.9)} className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-violet-600 rounded-full shadow-md animate-ping" />
              <span className="text-sm text-gray-700">Real-time Performance Analytics</span>
            </motion.li>
          </motion.ul>
          <motion.button 
            variants={fadeIn('up', 0.9)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/signin')}
            className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          variants={fadeIn('left', 0.4)}
          className="grid sm:grid-cols-2 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn('up', 0.3 * (idx + 1))}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out group"
            >
              <motion.div variants={fadeIn('down', 0.4 * (idx + 1))} className="mb-4">
                {feature.icon}
              </motion.div>
              <motion.h3 
                variants={textVariant(0.3)}
                className="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition"
              >
                {feature.title}
              </motion.h3>
              <motion.p 
                variants={fadeIn('up', 0.5 * (idx + 1))}
                className="text-sm text-gray-600 mt-2"
              >
                {feature.description}
              </motion.p>
              <motion.a
                variants={fadeIn('up', 0.6 * (idx + 1))}
                href="#"
                className="inline-block mt-4 text-sm text-violet-600 font-semibold group-hover:underline"
              >
                LEARN MORE
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ServicesSection;