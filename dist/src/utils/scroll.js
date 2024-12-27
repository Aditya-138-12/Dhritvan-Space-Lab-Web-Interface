export const scrollToSection = (sectionId) => {
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      // Check if device is mobile
      const isMobile = window.innerWidth < 768;
      // Add positive offset for mobile, negative for desktop
      const offset = isMobile ? 180 : 30;

      window.scrollTo({
        top: elementPosition - headerHeight + offset, // Now adding the offset for mobile
        behavior: "smooth",
      });
    }
  }, 50);
};
