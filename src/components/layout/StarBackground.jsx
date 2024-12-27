import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const generateStars = () => {
      const starCount = Math.floor(
        (window.innerWidth * window.innerHeight) / (isLight ? 12000 : 10000)
      );
      return Array.from({ length: starCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (isLight ? 4 : 2) + 1,
        animationDelay: Math.random() * 3,
      }));
    };

    const handleResize = () => {
      setStars(generateStars());
    };

    setStars(generateStars());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isLight]);

  return (
    <div className="star-field">
      {/* Animated shapes for light mode */}
      {isLight && (
        <>
          <div
            className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-blue-300/40 animate-float blur-xl"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute top-40 right-[15%] w-32 h-32 rounded-full bg-purple-400/40 animate-float blur-xl"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-32 left-[20%] w-48 h-48 rounded-full bg-indigo-400/40 animate-float blur-xl"
            style={{ animationDelay: "2s" }}
          />
        </>
      )}

      {/* Stars with increased visibility in light mode */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`star animate-twinkle ${
            isLight ? "bg-blue-600/40" : "bg-white"
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}

      {/* Enhanced nebula effects */}
      <div
        className={`nebula ${isLight ? "bg-purple-400" : "bg-purple-500"}`}
        style={{
          top: "20%",
          left: "10%",
          width: "40vw",
          height: "40vh",
          opacity: isLight ? "0.3" : "0.2",
        }}
      />
      <div
        className={`nebula ${isLight ? "bg-blue-400" : "bg-blue-500"}`}
        style={{
          bottom: "30%",
          right: "20%",
          width: "35vw",
          height: "35vh",
          opacity: isLight ? "0.3" : "0.2",
        }}
      />

      {/* Light mode gradient overlay with increased intensity */}
      {isLight && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(45deg, rgba(147, 197, 253, 0.3), rgba(167, 139, 250, 0.3))",
            mixBlendMode: "multiply",
          }}
        />
      )}
    </div>
  );
};

export default StarBackground;
