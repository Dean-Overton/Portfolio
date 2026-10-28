import { useEffect, useState } from "react";
import { DayAndNightToggle } from "@/components/ui/day-night-toggle";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDarkMode(isDark);
  };

  useEffect(() => {
    // Default to the white canvas the intro gate hands over to; dark mode is
    // opt-in via the toggle rather than inherited from the OS preference.
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setIsDarkMode(isDark);
  }, []);

  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <DayAndNightToggle onChange={toggleTheme} checked={isDarkMode} />
    </nav>
  );
};

export default NavBar;
