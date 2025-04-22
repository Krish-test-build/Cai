import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Lightbulb, Rocket, Wrench, Brain } from 'lucide-react';

const features = [
  {
    title: "Hands-On Learning",
    icon: <Wrench className="w-8 h-8 text-purple-600" />,
    description: "Get real experience by building, testing, and coding your own robots from scratch."
  },
  {
    title: "Fast Prototyping",
    icon: <Rocket className="w-8 h-8 text-blue-600" />,
    description: "Design and 3D print custom parts quickly to bring your ideas to life with minimal delay."
  },
  {
    title: "Smart Simulations",
    icon: <Brain className="w-8 h-8 text-green-600" />,
    description: "Test your code in virtual environments before jumping into physical builds."
  },
  {
    title: "Built for Students",
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    description: "No prior experience needed — everything is designed to be approachable and easy to learn."
  }
];

const MonitorSection = () => {
  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Why This Platform?
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600 mb-12"
        >
          Built with students in mind — to make robotics more fun, accessible, and powerful.
        </motion.p>
        <motion.div 
          variants={fadeIn('up', 0.5)}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={fadeIn('up', 0.6 + idx * 0.1)}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default MonitorSection;