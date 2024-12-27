import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { scrollToSection } from "../../utils/scroll";
import "./hero.css";

const Hero = () => {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerEnded, setTimerEnded] = useState(false);
  const intervalRef = useRef(null);

  const calculateRemainingTime = () => {
    const targetDate = new Date("December 30, 2024 21:58:00 GMT+05:30");
    const now = new Date();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(intervalRef.current);
      setTimerEnded(true);
    } else {
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(calculateRemainingTime, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "",
      label: "GitHub",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Linkedin,
      href: "",
      label: "LinkedIn",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/dhritvan_space_lab/",
      label: "Instagram",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    { icon: Mail, href: "mailto:", label: "Email" },
  ];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      {/* Animated background element */}
      <motion.div
        className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-dark-accent/20 dark:bg-dark-accent/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            DHRITVAN SPACE LAB
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8" style={{ textAlign: 'justify' }}>
            Exploring Beyond Boundaries, Innovating for the Future.<br></br>
            At Dhritvan Space Lab, we are dedicated to unlocking the mysteries of the cosmos through cutting-edge technology, groundbreaking research, and sustainable innovation. Join us on our mission to revolutionize space exploration and inspire the next generation of pioneers..
          </p>



          {/* Countdown Timer */}
          <div className="mb-8" style={{ border: "0.1px solid rgba(255, 255, 255, 0.2)", padding: "20px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            {!timerEnded ? (
              <div className="flex justify-center items-center gap-4 text-center">
                <h1 className="text-2xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent timer">
                  BGS Arpit Lanuch
                </h1>
                <div>
                  <p className="text-4xl font-bold">{days}<span style={{ opacity: "0" }}>.</span>:</p>
                  <p className="text-sm">Days</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">{hours}<span style={{ opacity: "0" }}>.</span>:</p>
                  <p className="text-sm">Hours</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">{minutes}<span style={{ opacity: "0" }}>.</span>:</p>
                  <p className="text-sm">Minutes</p>
                </div>
                <div>
                  <p className="text-4xl font-bold">{seconds}</p>
                  <p className="text-sm">Seconds</p>
                </div>
              </div>
            ) : (
              <p className="text-lg font-bold text-red-500">The countdown has ended!</p>
            )}
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2"
              onClick={() => scrollToSection("projects")}
            >
              View Our Projects
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href="mailto:debojit16mitra@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-lg"
            >
              Wanna Join Us!
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Animated Illustration */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Floating astronaut placeholder */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full"
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
