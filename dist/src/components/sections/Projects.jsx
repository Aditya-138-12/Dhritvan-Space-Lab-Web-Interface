import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");


  const categories = [
    { id: "all", label: "All Projects" },
    { id: "activities", label: "Activities" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "web", label: "Web Apps" },
    { id: "ai_ml", label: "AI/ML" },
    { id: "satellites", label: "Satellites" }
  ];

  const projects = [];

  /*
  const projects = [
    {
      id: 1,
      title: "SmartChef",
      description:
        "SmartChef is an innovative Android app blending AI-driven recipe recommendations with intelligent cooking assistance.",
      tags: ["Android", "AI", "Food-Tech"],
      categories: ["ai_ml", "mobile"],
      github: "https://github.com/Debojit-mitra/SmartChef",
      demo: "https://github.com/Debojit-mitra/SmartChef/releases/latest",
      image: "https://i.ibb.co/P6ZW8GP/Screenshot-2024-12-15-200947.png",
    },
    {
      id: 2,
      title: "SmartChef - Backend",
      description:
        "The backend infrastructure for SmartChef, an AI-powered recipe recommendation and cooking assistance platform.",
      tags: ["Backend", "AI", "API"],
      categories: ["ai_ml", "web"],
      github: "https://github.com/Debojit-mitra/SmartChef-backend",
      image: "https://i.ibb.co/jfznnj3/Screenshot-2024-12-15-201259.png",
    },
    {
      id: 3,
      title: "My Space Portfolio",
      description:
        "A modern, responsive portfolio website built with React and styled with Tailwind CSS, featuring a captivating space theme and smooth animations.",
      tags: ["React", "Vite", "portfolio", "Frontend"],
      categories: "web",
      github: "https://github.com/Debojit-mitra/Debojit-mitra.github.io",
      demo: "https://debojit-mitra.github.io",
      image: "https://i.ibb.co/6FwTmK8/Screenshot-2024-12-24-113507.webp",
    },
    {
      id: 4,
      title: "Infinite-API",
      description:
        "A versatile FastAPI-based project that brings together multiple APIs.",
      tags: ["Python", "FastAPI", "API", "Backend"],
      categories: "web",
      github: "https://github.com/Debojit-mitra/Infinite-API",
      image: "https://i.ibb.co/2ysJXgR/image.png",
    },
    {
      id: 5,
      title: "Infinite-API Documentation",
      description:
        "Documentation to explore API endpoints, built with React for a responsive and interactive experience.",
      tags: ["React", "Documentation", "Frontend"],
      categories: "web",
      github: "https://github.com/Debojit-mitra/Infinite-API",
      demo: "https://debojit-mitra.github.io/Infinite-API",
      image: "https://i.ibb.co/pjqXQXW/image.png",
    },
    {
      id: 6,
      title: "You See",
      description:
        "An Android app for streaming anime, movies, series, and Asian dramas.",
      tags: ["Android", "Java", "Streaming"],
      categories: "mobile",
      github: "https://github.com/Debojit-mitra/You-See",
      demo: "https://github.com/Debojit-mitra/You-See/releases/latest",
      image: "https://i.ibb.co/0s37Zdq/Screenshot-7.png",
    },
    {
      id: 7,
      title: "Anify",
      description:
        "An Android app that turns your home screen into a dynamic mix of fascinating facts and anime images.",
      tags: ["Android", "Java", "Widget"],
      categories: "mobile",
      github: "https://github.com/Debojit-mitra/Anify",
      demo: "https://github.com/Debojit-mitra/Anify/releases/latest",
      image:
        "https://github.com/Debojit-mitra/Anify/raw/master/screenshots/Screenshot-1.jpg",
    },
    {
      id: 8,
      title: "async.ai",
      description:
        "AI chatbot designed to revolutionize the way you tackle computer science questions.",
      tags: ["AI", "Chatbot", "Education"],
      categories: ["ai_ml", "mobile"],
      github: "https://github.com/Debojit-mitra/async.ai",
      image:
        "https://raw.githubusercontent.com/Debojit-mitra/async.ai/master/Screenshots/1.jpg",
    },
    {
      id: 9,
      title: "Mystic Artistry",
      description:
        "MysticArtistry, a website dedicated to showcasing and promoting the beauty and craftsmanship of Northeast Handicrafts.",
      tags: ["Web", "E-commerce", "Culture"],
      categories: "web",
      github: "https://github.com/Debojit-mitra/MysticArtistry",
      demo: "https://mysticartistry.pages.dev",
      image:
        "https://github.com/Debojit-mitra/MysticArtistry/blob/main/screenshots/Screenshot-1.png?raw=true",
    },
    {
      id: 10,
      title: "Calculator",
      description:
        "A comprehensive scientific calculator Android application with a user-friendly interface and advanced mathematical functions.",
      tags: ["Android", "Java", "Mathematics"],
      categories: "mobile",
      github: "https://github.com/Debojit-mitra/Calculator",
      demo: "https://github.com/Debojit-mitra/Calculator/releases/latest",
      image:
        "https://github.com/Debojit-mitra/Calculator/raw/master/screenshots/Screenshot-1.jpg",
    },
    {
      id: 11,
      title: "StoryFrame",
      description:
        "A Python Streamlit app that creates stories and images based on user prompts using Gemini and Replicate APIs.",
      tags: ["Python", "Streamlit", "AI"],
      categories: ["ai_ml", "web"],
      github: "https://github.com/Debojit-mitra/StoryFrame",
      image:
        "https://github.com/Debojit-mitra/StoryFrame/raw/main/screenshots/Screenshot-1.png",
    },
    {
      id: 12,
      title: "Agrigroww",
      description:
        "Agrigroww is a farmer advisory app that provides tailored guidance and tips to optimize farming practices.",
      tags: ["Mobile", "Agriculture", "Advisory"],
      categories: "mobile",
      github: "https://github.com/Debojit-mitra/AgriGroww",
      image:
        "https://github.com/Debojit-mitra/AgriGroww/raw/f45b34f9b4c3b69a1637dea67fdfabd9f5735a6d/Images/main/Screenshot_20240105_123810.png?raw=true",
    },
    {
      id: 13,
      title: "Splash Wallpaper",
      description:
        "My first Android app, featuring a wallpaper gallery with an admin panel, built using Kotlin.",
      tags: ["Android", "Kotlin", "Gallery"],
      categories: "mobile",
      github: "https://github.com/Debojit-mitra/Splash-Wallpaper",
      image: "https://i.ibb.co/kcDG09n/splash-wallpaper.webp",
    },
    {
      id: 14,
      title: "FixMyRoad",
      description:
        "An android app that lets users report road issues with images and locations, aiding quick repairs and better road safety.",
      tags: ["Android", "Social", "Civic"],
      categories: "mobile",
      github: "https://github.com/Debojit-mitra/Fix-My-Road",
      image: "https://i.ibb.co/PrzV1z4/fix-my-road.webp",
    },
  ];
  */

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" ||
      project.categories.includes(selectedCategory)
  );


  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A showcase of our best work, featuring Various Space Applications, Antenna Development.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full ${selectedCategory === category.id
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
