"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={clsx(
        "p-2 rounded-full transition-all duration-300 shadow-md",
        "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
      )}
      aria-label="Cambiar tema"
    >
      {theme === "light" ? (
        <Sun className="text-yellow-500" size={20} />
      ) : (
        <Moon className="text-blue-400" size={20} />
      )}
    </button>
  );
}
