import supabase from "./supabase";

function mapCabinRow(row) {
  const gallery =
    row.cabin_images?.length > 0
      ? row.cabin_images
          .sort((a, b) => a.sort_order - b.sort_order)
          .map((item) => item.image_url)
      : [row.cover_image_url];

  const amenities =
    row.cabin_amenities?.map((item) => item.amenities?.name).filter(Boolean) ??
    [];

  return {
    id: row.slug,
    dbId: row.id,
    slug: row.slug,
    name: row.name,
    location: row.location,
    category: row.category,
    price: Number(row.price_per_night),
    rating: Number(row.rating),
    capacity: row.capacity,
    featured: row.featured,
    image: row.cover_image_url,
    gallery,
    description: row.short_description,
    longDescription: row.long_description,
    amenities,
  };
}

async function fetchCabinsBaseQuery() {
  const { data, error } = await supabase
    .from("cabins")
    .select(
      `
      id,
      slug,
      name,
      location,
      category,
      short_description,
      long_description,
      price_per_night,
      rating,
      capacity,
      featured,
      cover_image_url,
      cabin_images (
        image_url,
        sort_order
      ),
      cabin_amenities (
        amenities (
          name
        )
      )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map(mapCabinRow);
}

export async function getCabins() {
  return fetchCabinsBaseQuery();
}

export async function getFeaturedCabins() {
  const cabins = await fetchCabinsBaseQuery();
  return cabins.filter((cabin) => cabin.featured);
}

export async function getCabinsByCategory(category) {
  const cabins = await fetchCabinsBaseQuery();

  if (!category || category === "all") {
    return cabins;
  }

  return cabins.filter((cabin) => cabin.category === category);
}

export async function getCabinById(id) {
  const { data, error } = await supabase
    .from("cabins")
    .select(
      `
      id,
      slug,
      name,
      location,
      category,
      short_description,
      long_description,
      price_per_night,
      rating,
      capacity,
      featured,
      cover_image_url,
      cabin_images (
        image_url,
        sort_order
      ),
      cabin_amenities (
        amenities (
          name
        )
      )
    `,
    )
    .eq("slug", id)
    .single();

  if (error) {
    if (error.code === "PGRST116") return null;
    throw new Error(error.message);
  }

  return mapCabinRow(data);
}
