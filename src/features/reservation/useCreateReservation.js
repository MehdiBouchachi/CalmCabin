import { useMutation } from "@tanstack/react-query";
import { createReservation } from "../../services/apiReservations";

function useCreateReservation() {
  const mutation = useMutation({
    mutationFn: createReservation,
  });

  return {
    createReservation: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    createdReservation: mutation.data,
  };
}

export default useCreateReservation;
