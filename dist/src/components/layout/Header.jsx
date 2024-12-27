import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../ui/ThemeToggle";
import { scrollToSection } from "../../utils/scroll";
import './aa.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Team", id: "team" },
    { label: "Projects", id: "projects" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    // Initial check for active section on page load
    const checkInitialSection = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      const sectionPositions = navItems.map((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceToCenter = Math.abs(
            rect.top + rect.height / 2 - viewportCenter
          );
          return { id: item.id, distance: distanceToCenter };
        }
        return { id: item.id, distance: Infinity };
      });

      const closestSection = sectionPositions.reduce((prev, curr) =>
        prev.distance < curr.distance ? prev : curr
      );

      setActiveSection(closestSection.id);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check which section is in view
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const currentSection = sections.find((section) => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    // Check initial section after a small delay
    setTimeout(checkInitialSection, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false); // Close menu first
    // Small delay before scrolling
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 10);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
        ? "bg-light-space/80 dark:bg-dark-space/80 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16" >
          {/* Logo */}
          <img
            src="src/components/layout/logo.png"
            onClick={() => handleNavClick("home")}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent qwerty"
          >
            {/* Dhritvan Space Lab */}
          </img>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg transition-colors relative group ${activeSection === item.id
                  ? "text-blue-500"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg my-1 transition-colors ${activeSection === item.id
                    ? "bg-blue-500/10 text-blue-500"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
