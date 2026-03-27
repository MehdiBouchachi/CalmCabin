/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Trees,
  Menu,
  X,
  LogIn,
  LogOut,
  User,
  ChevronRight,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useApp } from "../context/AppContext";

function Header({ isHomePage = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useApp();
  const location = useLocation();
  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to sign out:", error.message);
    }
  }
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cabins", label: "Cabins" },
    { to: "/about", label: "About" },
  ];

  const shouldOverlayHero = isHomePage && !scrolled && !mobileOpen;

  function desktopLinkClass({ isActive }) {
    if (shouldOverlayHero) {
      return [
        "relative inline-flex items-center rounded-full px-4 py-2 text-[0.875rem] font-medium transition-all duration-300",
        isActive
          ? "bg-white/10 text-white shadow-sm backdrop-blur-md"
          : "text-white/75 hover:bg-white/10 hover:text-white",
      ].join(" ");
    }

    return [
      "relative inline-flex items-center rounded-full px-4 py-2 text-[0.875rem] font-medium transition-all duration-300",
      isActive
        ? "bg-forest-50 text-forest-700 shadow-sm dark:bg-forest-900/25 dark:text-forest-300"
        : "text-night-500 hover:bg-white/70 hover:text-night-800 dark:text-night-400 dark:hover:bg-night-900/70 dark:hover:text-night-100",
    ].join(" ");
  }

  function mobileLinkClass({ isActive }) {
    return [
      "flex items-center justify-between rounded-2xl px-4 py-3.5 text-[0.95rem] font-medium transition-all duration-200",
      isActive
        ? "bg-forest-50 text-forest-700 dark:bg-forest-900/25 dark:text-forest-300"
        : "text-night-600 hover:bg-warm-100 dark:text-night-300 dark:hover:bg-night-800/80",
    ].join(" ");
  }

  return (
    <header
      className={`z-50 transition-all duration-300 ${
        isHomePage
          ? shouldOverlayHero
            ? "absolute inset-x-0 top-0"
            : "fixed inset-x-0 top-0"
          : "fixed inset-x-0 top-0"
      } ${
        shouldOverlayHero
          ? " bg-transparent"
          : "border-b border-warm-200/70 bg-warm-25/80 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-2xl dark:border-night-800/70 dark:bg-night-950/80 dark:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
      }`}
    >
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand */}
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-2xl text-white shadow-[0_10px_25px_rgba(61,107,61,0.22)] transition-all duration-300 group-hover:scale-[1.04] ${
              shouldOverlayHero
                ? "bg-forest-500/90 group-hover:bg-forest-400"
                : "bg-forest-600 group-hover:bg-forest-700 dark:bg-forest-500 dark:group-hover:bg-forest-400"
            }`}
          >
            <Trees size={18} strokeWidth={2.2} />
          </div>

          <div className="leading-none">
            <span
              className={`block text-[1.1rem] font-bold tracking-tight ${
                shouldOverlayHero
                  ? "text-white"
                  : "text-night-800 dark:text-white"
              }`}
            >
              Calm
              <span className="text-forest-400 dark:text-forest-400">
                Cabin
              </span>
            </span>
            <span
              className={`mt-1 hidden text-[0.68rem] font-semibold uppercase tracking-[0.16em] sm:block ${
                shouldOverlayHero
                  ? "text-white/60"
                  : "text-night-400 dark:text-night-500"
              }`}
            >
              Boutique Stays
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={desktopLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          {user ? (
            <div className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-sm ${
                  shouldOverlayHero
                    ? "border-white/15 bg-white/10 text-white backdrop-blur-md"
                    : "border-warm-200/70 bg-white/80 text-forest-700 dark:border-night-700 dark:bg-night-900/80 dark:text-forest-300"
                }`}
              >
                <User size={16} strokeWidth={2.2} />
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className={`inline-flex items-center gap-2 rounded-2xl border border-transparent px-4 py-2.5 text-[0.85rem] font-medium transition-all duration-300 ${
                  shouldOverlayHero
                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                    : "text-night-500 hover:bg-white/80 hover:text-night-800 dark:text-night-400 dark:hover:bg-night-900/80 dark:hover:text-night-100"
                }`}
              >
                <LogOut size={15} />
                Sign out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className={`inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-[0.875rem] font-semibold text-white shadow-[0_10px_25px_rgba(61,107,61,0.22)] transition-all duration-300 hover:-translate-y-0.5 ${
                shouldOverlayHero
                  ? "bg-forest-500/95 hover:bg-forest-400"
                  : "bg-forest-600 hover:bg-forest-700 dark:bg-forest-500 dark:hover:bg-forest-400"
              }`}
            >
              <LogIn size={15} />
              Sign in
            </Link>
          )}
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm backdrop-blur-md transition-all duration-300 ${
              shouldOverlayHero
                ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
                : "border-warm-200/70 bg-white/85 text-night-600 hover:bg-white dark:border-night-700 dark:bg-night-900/80 dark:text-night-200 dark:hover:bg-night-900"
            }`}
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen
            ? "max-h-[420px] border-t border-warm-200/60 opacity-100 dark:border-night-800/70"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-warm-25/95 px-5 pb-6 pt-4 backdrop-blur-xl dark:bg-night-950/95">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={mobileLinkClass}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="opacity-50" />
              </NavLink>
            ))}

            <div className="my-2 h-px bg-warm-200/70 dark:bg-night-800/70" />

            {user ? (
              <button
                type="button"
                onClick={async () => {
                  try {
                    await logout();
                    setMobileOpen(false);
                  } catch (error) {
                    console.error("Failed to sign out:", error.message);
                  }
                }}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[0.95rem] font-medium text-night-600 transition-all duration-200 hover:bg-warm-100 dark:text-night-300 dark:hover:bg-night-800/80"
              >
                <span className="inline-flex items-center gap-2.5">
                  <LogOut size={17} />
                  Sign out
                </span>
                <ChevronRight size={16} className="opacity-50" />
              </button>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-forest-600 px-4 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-300 hover:bg-forest-700 dark:bg-forest-500 dark:hover:bg-forest-400"
              >
                <LogIn size={17} />
                Sign in
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
