import { Moon, Sun } from "lucide-react";
import { useApp } from "../context/AppContext";

function ThemeToggle() {
  const { isDark, toggleTheme } = useApp();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-warm-200/80 bg-white/90 text-night-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-warm-300 hover:text-night-700 hover:shadow-md dark:border-night-700/70 dark:bg-night-900/80 dark:text-night-300 dark:hover:border-night-600 dark:hover:text-white"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-white/0 to-forest-100/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-white/0 dark:to-forest-900/20" />

      <span className="relative">
        {isDark ? (
          <Sun size={17} strokeWidth={2.1} />
        ) : (
          <Moon size={17} strokeWidth={2.1} />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
