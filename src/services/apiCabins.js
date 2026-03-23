const cabins = [
  {
    id: "aurora-lake-house",
    name: "Aurora Lake House",
    location: "Lake Tahoe, California",
    category: "lake",
    price: 320,
    rating: 4.9,
    capacity: 4,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A serene lakeside cabin with warm wood interiors, panoramic water views, and a restorative boutique atmosphere.",
    longDescription:
      "Aurora Lake House is designed for travelers who want stillness without sacrificing comfort. Large windows frame the lake throughout the day, while the interior combines soft textures, warm wood finishes, and a calm palette that feels grounded and refined. Whether you are planning a quiet weekend, a romantic stay, or a slower work retreat, this cabin offers an elevated experience that feels intimate, private, and memorable.",
    amenities: [
      "WiFi",
      "Lake View",
      "Fireplace",
      "Parking",
      "Coffee",
      "King Bed",
    ],
  },
  {
    id: "mosswood-retreat",
    name: "Mosswood Retreat",
    location: "Bend, Oregon",
    category: "forest",
    price: 280,
    rating: 4.8,
    capacity: 3,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-c8a3f4f8b7b8?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Nestled among tall pines, this forest cabin offers privacy, warm minimal interiors, and a deeply calming atmosphere.",
    longDescription:
      "Mosswood Retreat brings together forest immersion and boutique comfort. The experience is intentionally quiet: filtered light through the trees, clean interior lines, and enough warmth in the materials to make the cabin feel welcoming rather than rustic. It is the kind of place where the setting does most of the work, and the design simply supports it.",
    amenities: ["WiFi", "Forest View", "Fireplace", "Parking", "Coffee"],
  },
  {
    id: "summit-ridge-lodge",
    name: "Summit Ridge Lodge",
    location: "Aspen, Colorado",
    category: "mountain",
    price: 410,
    rating: 4.9,
    capacity: 6,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-c8a3f4f8b7b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "An elevated mountain stay with expansive views, premium finishes, and room to gather in comfort.",
    longDescription:
      "Summit Ridge Lodge is built for guests who want the drama of a mountain destination with the polish of a premium hospitality experience. The layout is generous, the palette is warm and restrained, and the surrounding views give the stay a stronger sense of occasion from the moment you arrive.",
    amenities: ["WiFi", "Fireplace", "Parking", "Coffee", "King Bed"],
  },
  {
    id: "willow-bay-cabin",
    name: "Willow Bay Cabin",
    location: "Flathead Lake, Montana",
    category: "lake",
    price: 295,
    rating: 4.7,
    capacity: 4,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A calm lake escape with bright interiors, outdoor seating, and a relaxed boutique feel.",
    longDescription:
      "Willow Bay Cabin is a softer, brighter take on the lakeside retreat. It is ideal for guests who want quiet mornings, easy access to the water, and a place that feels both relaxed and considered.",
    amenities: ["WiFi", "Lake View", "Parking", "Coffee"],
  },
  {
    id: "cedar-hollow",
    name: "Cedar Hollow",
    location: "Olympic Peninsula, Washington",
    category: "forest",
    price: 265,
    rating: 4.8,
    capacity: 2,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A quiet forest hideaway for slower mornings, private evenings, and a deeply restful stay.",
    longDescription:
      "Cedar Hollow is the kind of cabin that feels immediately calm. It favors intimacy over scale, with a layout that supports quiet routines, slower meals, and a more private retreat experience.",
    amenities: ["WiFi", "Forest View", "Fireplace", "Coffee"],
  },
  {
    id: "alpine-light-cabin",
    name: "Alpine Light Cabin",
    location: "Jackson Hole, Wyoming",
    category: "mountain",
    price: 365,
    rating: 4.8,
    capacity: 5,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1505693416388-c8a3f4f8b7b8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-c8a3f4f8b7b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "A mountain cabin with clean lines, open views, and a warm modern interior language.",
    longDescription:
      "Alpine Light Cabin pairs a more contemporary aesthetic with the emotional pull of a mountain retreat. The design is uncluttered, the layout is generous, and the overall stay feels elevated without becoming cold or overly polished.",
    amenities: ["WiFi", "Fireplace", "Parking", "King Bed"],
  },
];

export function getCabins() {
  return cabins;
}

export function getFeaturedCabins() {
  return cabins.filter((cabin) => cabin.featured);
}

export function getCabinsByCategory(category) {
  if (!category || category === "all") return cabins;
  return cabins.filter((cabin) => cabin.category === category);
}

export function getCabinById(id) {
  return cabins.find((cabin) => String(cabin.id) === String(id));
}
