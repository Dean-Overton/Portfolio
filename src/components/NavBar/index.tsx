import { useEffect, useState } from "react";
import { DayAndNightToggle } from "react-day-and-night-toggle";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDarkMode(true);
    } else if (saved === "light") {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-gradient-to-b from-white/80 to-transparent dark:from-gray-900/80
        backdrop-blur-md shadow-md
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Dean Overton
        </h1>
        <ul className="flex items-center gap-4">
          <li>
            <DayAndNightToggle onChange={toggleTheme} checked={isDarkMode} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
