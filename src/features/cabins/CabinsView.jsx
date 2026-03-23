import { useMemo, useState } from "react";
import { getCabinsByCategory } from "../../services/apiCabins";
import EmptyState from "../../components/EmptyState";
import CabinsHeader from "./CabinsHeader";
import CabinsFilters from "./CabinsFilters";
import CabinsResultsInfo from "./CabinsResultsInfo";
import CabinsGrid from "./CabinsGrid";

function CabinsView() {
  const [activeCategory, setActiveCategory] = useState("all");

  const cabins = useMemo(() => {
    return getCabinsByCategory(activeCategory);
  }, [activeCategory]);

  const hasCabins = cabins.length > 0;

  return (
    <div>
      <CabinsHeader
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pb-32 sm:pt-12">
        {hasCabins ? (
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
