/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

function getInitialTheme() {
  if (typeof window === "undefined") return false;

  const savedTheme = localStorage.getItem("calmcabin-theme");

  if (savedTheme === "dark") return true;
  if (savedTheme === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function AppProvider({ children }) {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("calmcabin-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("calmcabin-theme", "light");
    }
  }, [isDark]);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  function login(email) {
    setUser({ email });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AppContext.Provider value={{ isDark, toggleTheme, user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }

  return context;
}

export { AppProvider, useApp };
