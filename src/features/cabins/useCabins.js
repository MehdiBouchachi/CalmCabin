import { useQuery } from "@tanstack/react-query";
import {
  getCabins,
  getCabinsByCategory,
  getFeaturedCabins,
} from "../../services/apiCabins";

async function fetchCabins({ category = "all", featuredOnly = false }) {
  if (featuredOnly) {
    return getFeaturedCabins();
  }

  if (category && category !== "all") {
    return getCabinsByCategory(category);
  }

  return getCabins();
}

function useCabins(options = {}) {
  const { category = "all", featuredOnly = false } = options;

  const query = useQuery({
    queryKey: ["cabins", { category, featuredOnly }],
    queryFn: () => fetchCabins({ category, featuredOnly }),
  });

  return {
    cabins: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
  };
}

export default useCabins;
