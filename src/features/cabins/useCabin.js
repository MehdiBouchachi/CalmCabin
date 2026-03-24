import { useQuery } from "@tanstack/react-query";
import { getCabinById } from "../../services/apiCabins";

function useCabin(cabinId) {
  const query = useQuery({
    queryKey: ["cabin", cabinId],
    queryFn: () => getCabinById(cabinId),
    enabled: Boolean(cabinId),
  });

  return {
    cabin: query.data ?? null,
    isLoading: query.isLoading,
    error: query.error,
  };
}

export default useCabin;
