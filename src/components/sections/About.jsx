import { motion } from "framer-motion";
import { Code, Database, Layout, Box, Wrench, Smartphone } from "lucide-react";
import SkillCard from "../ui/SkillCard";

const About = () => {

  const timelineEvents = [
    {
      year: "Year",
      title: "Title",
      description:
        "Description",
    },
    {
      year: "Year",
      title: "Title",
      description:
        "Description",
    },
    {
      year: "Year",
      title: "Title",
      description:
        "Description",
    },
    {
      year: "Year",
      title: "Title",
      description:
        "Description",
    },
    {
      year: "Year",
      title: "Title",
      description:
        "Description",
    },
  ];

  return (
    <section className="py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        {/* Section Header */}
        <div className="text-center mb-16" >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About Us - Dhritvan Space Lab
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            style={{ textAlign: 'justify' }}
          >
            Welcome to Dhritvan Space Lab, where innovation meets exploration. We are a forward-thinking organization committed to advancing space science, fostering technological breakthroughs, and driving the future of space exploration.

            At Dhritvan Space Lab, our mission is to push the boundaries of what humanity can achieve in space. From designing state-of-the-art spacecraft to exploring the farthest reaches of our universe, we aim to contribute to humanity’s understanding of the cosmos while developing solutions that benefit life on Earth.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Our Journey
          </h3>
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />

            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-8"
              >
                <div
                  className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""
                    }`}
                >
                  <div className="w-1/2" />
                  <div className="w-6 h-6 absolute left-1/2 transform -translate-x-1/2 rounded-full bg-blue-500" />
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                      }`}
                  >
                    <div className="bg-light-nebula dark:bg-dark-nebula p-4 rounded-lg">
                      <span className="text-blue-500 font-bold">
                        {event.year}
                      </span>
                      <h4 className="font-semibold mb-1">{event.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </motion.div>
    </section>
  );
};

export default About;
