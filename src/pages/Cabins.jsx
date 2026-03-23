import { useState } from "react";
import { getCabinsByCategory } from "../services/apiCabins";
import SectionHeading from "../components/SectionHeading";
import CabinCard from "../components/CabinCard";
import EmptyState from "../components/EmptyState";
import {
  Waves,
  TreePine,
  Mountain as MountainIcon,
  LayoutGrid,
} from "lucide-react";

const categories = [
  { key: "all", label: "All Stays", icon: LayoutGrid },
  { key: "lake", label: "Lakeside", icon: Waves },
  { key: "forest", label: "Forest", icon: TreePine },
  { key: "mountain", label: "Mountain", icon: MountainIcon },
];

function Cabins() {
  const [activeCategory, setActiveCategory] = useState("all");
  const cabins = getCabinsByCategory(activeCategory);

  return (
    <div>
      {/* ──────────── HEADER ──────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-50/50 to-warm-25 dark:from-forest-900/10 dark:to-night-950">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] translate-x-[-40%] translate-y-[-30%] rounded-full bg-forest-100/30 blur-3xl dark:bg-forest-900/10" />

        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
          <SectionHeading
            eyebrow="Our Collection"
            title="Find your perfect retreat"
            description="Browse our handpicked selection of cabins — each one chosen for its beauty, serenity, and connection to the natural world."
            className="mb-10"
          />

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-[0.8125rem] font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-forest-600 text-white shadow-lg shadow-forest-600/20 dark:bg-forest-500 dark:shadow-forest-500/15"
                      : "border border-warm-200 bg-white text-night-500 hover:border-forest-200 hover:text-forest-700 dark:border-night-700 dark:bg-night-800 dark:text-night-400 dark:hover:border-forest-800/50 dark:hover:text-forest-400"
                  }`}
                >
                  <Icon size={15} strokeWidth={2.2} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────── GRID ──────────── */}
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pb-32 sm:pt-12">
        {cabins.length > 0 ? (
          <>
            <p className="mb-8 text-[0.8125rem] text-night-400 dark:text-night-500">
              Showing{" "}
              <span className="font-semibold text-night-600 dark:text-night-300">
                {cabins.length}
              </span>{" "}
              {cabins.length === 1 ? "cabin" : "cabins"}
              {activeCategory !== "all" && (
                <>
                  {" "}
                  in{" "}
                  <span className="font-semibold capitalize text-night-600 dark:text-night-300">
                    {activeCategory}
                  </span>
                </>
              )}
            </p>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {cabins.map((cabin) => (
                <CabinCard key={cabin.id} cabin={cabin} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </section>
    </div>
  );
}

export default Cabins;
