"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all hover:ring-2 hover:ring-blue-500"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </button>
  );
}
