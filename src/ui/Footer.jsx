import { Link } from "react-router-dom";
import {
  Trees,
  Instagram,
  Mail,
  MapPin,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

function Footer() {
  const exploreLinks = [
    { to: "/cabins", label: "All Cabins" },
    { to: "/about", label: "Our Story" },
    { to: "/login", label: "Sign In" },
  ];

  const categoryLinks = [
    { label: "Lakeside Retreats", query: "lake" },
    { label: "Forest Hideaways", query: "forest" },
    { label: "Mountain Lodges", query: "mountain" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-warm-200/60 bg-warm-50 transition-colors duration-300 dark:border-night-800/50 dark:bg-night-950">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-10 h-56 w-56 rounded-full bg-forest-100/60 blur-3xl dark:bg-forest-900/10" />
        <div className="absolute right-[-7rem] bottom-0 h-64 w-64 rounded-full bg-warm-200/40 blur-3xl dark:bg-night-800/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Top CTA strip */}
        <div className="mb-14 overflow-hidden rounded-[2rem] border border-warm-200/70 bg-white/80 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm dark:border-night-800/70 dark:bg-night-900/70 dark:shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-forest-600 dark:text-forest-400">
                Stay connected
              </p>
              <h3 className="mt-3 text-[1.7rem] font-bold tracking-tight text-night-800 dark:text-white sm:text-[2rem]">
                Discover cabins worth slowing down for
              </h3>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-7 text-night-500 dark:text-night-300">
                Explore curated stays, quiet destinations, and boutique retreats
                designed for rest, atmosphere, and meaningful time away.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                to="/cabins"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-forest-600 px-6 py-3.5 text-[0.9rem] font-semibold text-white shadow-[0_10px_25px_rgba(61,107,61,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-700 dark:bg-forest-500 dark:hover:bg-forest-400"
              >
                Explore cabins
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-warm-200 bg-white px-6 py-3.5 text-[0.9rem] font-semibold text-night-700 transition-all duration-300 hover:border-warm-300 hover:bg-warm-25 dark:border-night-700 dark:bg-night-950/70 dark:text-night-100 dark:hover:border-night-600 dark:hover:bg-night-900"
              >
                Learn more
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.15fr_0.7fr_0.7fr_0.9fr] xl:gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-600 text-white shadow-[0_10px_25px_rgba(61,107,61,0.22)] dark:bg-forest-500">
                <Trees size={18} strokeWidth={2.2} />
              </div>

              <div className="leading-none">
                <span className="block text-[1.15rem] font-bold tracking-tight text-night-800 dark:text-white">
                  Calm
                  <span className="text-forest-600 dark:text-forest-400">
                    Cabin
                  </span>
                </span>
                <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-night-400 dark:text-night-500">
                  Boutique Stays
                </span>
              </div>
            </Link>

            <p className="mt-5 text-[0.92rem] leading-7 text-night-500 dark:text-night-300">
              Curated cabin stays for travelers who value stillness, warm
              design, and a closer connection to nature.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3 text-sm text-night-500 dark:text-night-400">
                <Mail
                  size={16}
                  className="mt-0.5 text-forest-600 dark:text-forest-400"
                />
                <span>hello@calmcabin.co</span>
              </div>

              <div className="flex items-start gap-3 text-sm text-night-500 dark:text-night-400">
                <MapPin
                  size={16}
                  className="mt-0.5 text-forest-600 dark:text-forest-400"
                />
                <span>
                  Thoughtfully curated stays across serene destinations
                </span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-night-400 dark:text-night-500">
              Explore
            </h4>

            <ul className="space-y-3.5">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-[0.9rem] text-night-600 transition-colors duration-200 hover:text-forest-700 dark:text-night-400 dark:hover:text-forest-400"
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      size={15}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-night-400 dark:text-night-500">
              Categories
            </h4>

            <ul className="space-y-3.5">
              {categoryLinks.map((cat) => (
                <li key={cat.label}>
                  <Link
                    to={`/cabins?category=${cat.query}`}
                    className="group inline-flex items-center gap-2 text-[0.9rem] text-night-600 transition-colors duration-200 hover:text-forest-700 dark:text-night-400 dark:hover:text-forest-400"
                  >
                    <span>{cat.label}</span>
                    <ChevronRight
                      size={15}
                      className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-night-400 dark:text-night-500">
              Connect
            </h4>

            <div className="space-y-3.5">
              <a
                href="mailto:hello@calmcabin.co"
                className="group flex items-center gap-3 rounded-2xl border border-warm-200/70 bg-white/70 px-4 py-3 text-sm text-night-600 transition-all duration-300 hover:border-forest-200 hover:bg-white dark:border-night-800 dark:bg-night-900/60 dark:text-night-300 dark:hover:border-forest-800/60 dark:hover:bg-night-900"
              >
                <Mail
                  size={16}
                  className="text-forest-600 dark:text-forest-400"
                />
                <span>Email us</span>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 rounded-2xl border border-warm-200/70 bg-white/70 px-4 py-3 text-sm text-night-600 transition-all duration-300 hover:border-forest-200 hover:bg-white dark:border-night-800 dark:bg-night-900/60 dark:text-night-300 dark:hover:border-forest-800/60 dark:hover:bg-night-900"
              >
                <Instagram
                  size={16}
                  className="text-forest-600 dark:text-forest-400"
                />
                <span>Instagram</span>
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 rounded-2xl border border-warm-200/70 bg-white/70 px-4 py-3 text-sm text-night-600 transition-all duration-300 hover:border-forest-200 hover:bg-white dark:border-night-800 dark:bg-night-900/60 dark:text-night-300 dark:hover:border-forest-800/60 dark:hover:bg-night-900"
              >
                <Trees
                  size={16}
                  className="text-forest-600 dark:text-forest-400"
                />
                <span>Pinterest</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-warm-200/60 pt-7 sm:flex-row sm:items-center sm:justify-between dark:border-night-800/60">
          <p className="text-xs text-night-400 dark:text-night-500">
            &copy; {new Date().getFullYear()} CalmCabin. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-night-400 dark:text-night-500">
            <span>Crafted for quiet moments.</span>
            <span className="hidden h-1 w-1 rounded-full bg-night-300 dark:bg-night-700 sm:block" />
            <Link
              to="/about"
              className="transition-colors hover:text-forest-700 dark:hover:text-forest-400"
            >
              About
            </Link>
            <span className="hidden h-1 w-1 rounded-full bg-night-300 dark:bg-night-700 sm:block" />
            <Link
              to="/cabins"
              className="transition-colors hover:text-forest-700 dark:hover:text-forest-400"
            >
              Cabins
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
