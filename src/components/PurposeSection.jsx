import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PurposeSection = () => {
  const features = [
    {
      icon: "🔧", 
      title: "Hands-on Innovation",
      description: "Whether you’re a student, educator, or enthusiast, our platform empowers you to build functional robots from scratch using CAD tools, 3D printing, and easy-to-use programming interfaces"
    },
    {
      icon: "🧪", 
      title: " Built for Learning & Experimentation",
      description: "From virtual simulations to physical builds, we offer a complete ecosystem for exploring robotics, testing ideas, and pushing the boundaries of creative engineering"

    },
    
    {
      icon: "🌐", 
      title: " Made for Makers",
      description: "This isn’t just a toolkit — it’s a platform built for builders. Whether you're prototyping a classroom project or experimenting with automation, we’ve got your back."
    },
    {
      icon: "🧠", 
      title: "Software Meets Hardware",
      description: "We integrate intuitive control software with 3D-printed components, letting you test, modify, and deploy robotic behavior quickly and efficiently"
    }
  ];

  return (
    <section id="about" className="w-full bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 grid-cols-1 gap-8"
        >
          <motion.div variants={fadeIn('right', 0.3)}>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              className="text-xl text-purple-600 font-bold mb-2 md:w-9/10 \n"
            >
              Build Smarter.  Innovate Faster. Learn by Creating 
            </motion.div>
            
            <motion.h2 
              variants={textVariant(0.5)}
              className="text-5xl md:w-9/10 md:text-5xl font-bold text-gray-900 tracking-wide"
            >
              Bridging robotics and 3D printing for effortless innovation
            </motion.h2>
          </motion.div>

          <motion.div 
            variants={fadeIn('left', 0.3)}
            className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="flex items-start space-x-4"
              >
                <motion.div 
                  variants={fadeIn('right', 0.4 * (index + 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-lg"
                >
                  {feature.icon}
                </motion.div>
                <motion.div variants={fadeIn('left', 0.4 * (index + 1))}>
                  <motion.h3 
                    variants={textVariant(0.3)}
                    className="text-xl font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    variants={fadeIn('up', 0.4)}
                    className="text-gray-600"
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;