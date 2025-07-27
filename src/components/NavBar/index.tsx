import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DayAndNightToggle } from "react-day-and-night-toggle";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

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
        bg-transparent
        backdrop-blur-md
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Dean Overton</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`
                  relative py-2 text-sm font-medium transition-colors duration-200
                  ${
                    location.pathname === item.path
                      ? "text-text-important"
                      : "text-text-secondary"
                  }
                  after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                  after:transform after:scale-x-0
                  after:transition-transform after:duration-200 after:origin-left
                  hover:after:scale-x-100
                  ${location.pathname === item.path ? "after:scale-x-100" : ""}
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <DayAndNightToggle onChange={toggleTheme} checked={isDarkMode} />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <DayAndNightToggle onChange={toggleTheme} checked={isDarkMode} />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-text transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-text transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-text transition-transform duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden shadow-md border-t transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100 shadow-lg"
            : "max-h-0 opacity-0"
        } overflow-hidden`}
        style={{
          boxShadow: isMobileMenuOpen ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <ul className="px-4 py-2 space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
          block py-3 px-2 rounded-md text-sm font-medium transition-colors duration-200
          ${
            location.pathname === item.path
              ? "text-text-important"
              : "text-text-secondary"
          }
            `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
