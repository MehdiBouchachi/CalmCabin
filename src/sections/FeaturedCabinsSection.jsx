import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CabinCard from "../ui/CabinCard";
import SectionHeading from "../ui/SectionHeading";
import useCabins from "../features/cabins/useCabins";

function FeaturedCabinsSection() {
  const { cabins, isLoading, error } = useCabins({
    featuredOnly: true,
  });

  const featuredCabins = cabins.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-warm-25 py-16 dark:bg-night-950 sm:py-24 lg:py-28">
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-forest-100/50 blur-3xl dark:bg-forest-900/10" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Cabins"
          title="Exceptional stays with a stronger sense of place"
          description="A handpicked selection of premium cabins that combine atmosphere, comfort, and a setting worth traveling for."
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        {isLoading ? (
          <p className="text-sm text-night-400 dark:text-night-500">
            Loading featured cabins...
          </p>
        ) : error ? (
          <p className="text-sm text-red-600 dark:text-red-400">
            {error.message || "Failed to load featured cabins."}
          </p>
        ) : (
          <>
            <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
              {featuredCabins.map((cabin) => (
                <CabinCard key={cabin.id} cabin={cabin} />
              ))}
            </div>

            <div className="mt-10 text-center sm:mt-12">
              <Link
                to="/cabins"
                className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-forest-700 transition-colors hover:text-forest-800 dark:text-forest-400 dark:hover:text-forest-300"
              >
                Browse the full collection
                <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default FeaturedCabinsSection;
