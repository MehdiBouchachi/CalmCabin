import supabase from "./supabase";

export async function createReservation(reservationData) {
  const { data, error } = await supabase
    .from("reservations")
    .insert([reservationData])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
