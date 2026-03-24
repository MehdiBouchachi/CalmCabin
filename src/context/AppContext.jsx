import { createContext, useContext, useEffect, useMemo, useState } from "react";
import supabase from "../services/supabase";

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
  const [isAuthLoading, setIsAuthLoading] = useState(true);

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

  useEffect(() => {
    let isMounted = true;

    async function loadSession() {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (!isMounted) return;

      if (error) {
        console.error("Failed to get session:", error.message);
        setUser(null);
      } else {
        setUser(session?.user ?? null);
      }

      setIsAuthLoading(false);
    }

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsAuthLoading(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  async function signInWithGoogle() {
    const redirectTo = `${window.location.origin}/`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });

    if (error) {
      throw error;
    }
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }
  }

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme,
      user,
      isAuthLoading,
      signInWithGoogle,
      logout,
    }),
    [isDark, user, isAuthLoading],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useApp };
