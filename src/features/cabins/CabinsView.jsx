import { useState } from "react";
import EmptyState from "../../ui/EmptyState";
import CabinsHeader from "./CabinsHeader";
import CabinsResultsInfo from "./CabinsResultsInfo";
import CabinsGrid from "./CabinsGrid";
import useCabins from "./useCabins";

function CabinsView() {
  const [activeCategory, setActiveCategory] = useState("all");

  const { cabins, isLoading, error } = useCabins({
    category: activeCategory,
  });

  const hasCabins = cabins.length > 0;

  return (
    <div>
      <CabinsHeader
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pb-32 sm:pt-12">
        {isLoading ? (
          <p className="text-sm text-night-400 dark:text-night-500">
            Loading cabins...
          </p>
        ) : error ? (
          <p className="text-sm text-red-600 dark:text-red-400">
            {error.message || "Failed to load cabins."}
          </p>
        ) : hasCabins ? (
          <>
            <CabinsResultsInfo
              cabinsCount={cabins.length}
              activeCategory={activeCategory}
            />
            <CabinsGrid cabins={cabins} />
          </>
        ) : (
          <EmptyState />
        )}
      </section>
    </div>
  );
}

export default CabinsView;
