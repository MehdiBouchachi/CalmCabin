import SectionHeading from "../../ui/SectionHeading";
import CabinsFilters from "./CabinsFilters";

function CabinsHeader({ activeCategory, setActiveCategory }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-forest-50/50 to-warm-25 dark:from-forest-900/10 dark:to-night-950">
      <div className="absolute left-0 top-0 h-100 w-100 translate-x-[-40%] translate-y-[-30%] rounded-full bg-forest-100/30 blur-3xl dark:bg-forest-900/10" />

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        <SectionHeading
          eyebrow="Our Collection"
          title="Find your perfect retreat"
          description="Browse our handpicked selection of cabins — each one chosen for its beauty, serenity, and connection to the natural world."
          className="mb-10"
        />
        <CabinsFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
    </section>
  );
}

export default CabinsHeader;
