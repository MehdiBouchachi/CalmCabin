import { Link } from "react-router-dom";
import {
  ArrowRight,
  TreePine,
  ShieldCheck,
  Sparkles,
  Star,
  Quote,
  Clock3,
  HeartHandshake,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";
import CabinCard from "../components/CabinCard";
import { getFeaturedCabins } from "../services/apiCabins";

function Home() {
  const featuredCabins = getFeaturedCabins().slice(0, 3);

  const features = [
    {
      icon: TreePine,
      title: "Immersive natural settings",
      description:
        "Every stay is selected for atmosphere first — deep forest silence, lakeside calm, and elevated mountain views.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy you can feel",
      description:
        "Boutique cabins with a sense of retreat, distance, and calm — far from crowded hospitality experiences.",
    },
    {
      icon: Sparkles,
      title: "Refined interior comfort",
      description:
        "Warm textures, clean design, and thoughtful details that make every space feel intentional and restorative.",
    },
    {
      icon: HeartHandshake,
      title: "Curated with care",
      description:
        "We focus on quality over quantity, featuring memorable stays that feel personal rather than generic.",
    },
  ];

  const testimonials = [
    {
      name: "Emma & Lucas",
      quote:
        "It felt less like booking a cabin and more like arriving at a private retreat designed to help us slow down.",
    },
    {
      name: "Sophie Martin",
      quote:
        "Beautiful atmosphere, calm design, and the kind of place where every detail feels considered.",
    },
    {
      name: "Noah Bennett",
      quote:
        "The photos were stunning, but the real experience was even better. Quiet, warm, and genuinely memorable.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80"
            alt="Luxury cabin in nature"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night-950/82 via-night-950/48 to-night-950/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-25 via-transparent to-transparent dark:from-night-950" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-forest-300/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-8">
          <div className="grid w-full items-center gap-10 pt-24 sm:pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pt-24">
            {/* LEFT CONTENT */}
            <div className="max-w-2xl self-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md">
                Boutique cabin stays
              </p>

              <h1 className="mt-5 max-w-xl text-[3rem] font-extrabold leading-[0.95] tracking-tight text-white sm:text-[4.2rem] lg:text-[5rem]">
                Quiet luxury
                <span className="block text-forest-300">in the wild</span>
              </h1>

              <p className="mt-5 max-w-lg text-[0.98rem] leading-8 text-white/74 sm:text-[1.03rem]">
                Discover refined cabins made for slower mornings, deeper rest,
                and memorable escapes close to nature.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/cabins"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-[0.92rem] font-semibold text-night-900 shadow-[0_14px_34px_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-warm-50"
                >
                  Explore cabins
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3.5 text-[0.92rem] font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
                >
                  Learn more
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-white/78 sm:gap-6">
                <div>
                  <p className="text-[1.85rem] font-bold leading-none text-white">
                    50+
                  </p>
                  <p className="mt-1 text-sm">Curated stays</p>
                </div>

                <div className="hidden h-10 w-px bg-white/15 sm:block" />

                <div>
                  <p className="text-[1.85rem] font-bold leading-none text-white">
                    4.8
                  </p>
                  <p className="mt-1 text-sm">Average rating</p>
                </div>

                <div className="hidden h-10 w-px bg-white/15 sm:block" />

                <div>
                  <p className="text-[1.85rem] font-bold leading-none text-white">
                    12
                  </p>
                  <p className="mt-1 text-sm">Unique destinations</p>
                </div>
              </div>
            </div>

            {/* RIGHT VISUAL CARD */}
            <div className="hidden self-center lg:flex lg:justify-end">
              <div className="w-full max-w-[23rem] xl:max-w-[24.5rem]">
                <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                  <div className="relative aspect-[4/4.8] overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                      alt="Featured luxury cabin"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-950/85 via-night-950/10 to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                        Featured stay
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-lg">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-lg font-semibold text-white">
                              Mosswood Retreat
                            </p>
                            <p className="mt-1 text-sm text-white/70">
                              Bend, Oregon
                            </p>
                          </div>
                          <div className="rounded-full bg-white/14 px-3 py-1.5 text-sm font-semibold text-white">
                            $280<span className="text-white/65">/night</span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2">
                          <div className="flex -space-x-2">
                            {[
                              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
                              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
                            ].map((src) => (
                              <img
                                key={src}
                                src={src}
                                alt="Guest"
                                className="h-9 w-9 rounded-full border-2 border-white/70 object-cover"
                              />
                            ))}
                          </div>

                          <div className="ml-2">
                            <div className="flex items-center gap-1.5 text-white">
                              <Star
                                size={14}
                                className="fill-amber-400 text-amber-400"
                                strokeWidth={0}
                              />
                              <span className="text-sm font-semibold">
                                4.8 rating
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-white/68">
                              Loved for its calm atmosphere
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="-mt-7 ml-5 w-fit rounded-2xl border border-white/15 bg-white/12 px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <p className="text-sm font-semibold text-white">
                    Boutique hospitality
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Thoughtful stays with a quieter feel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CABINS */}
      <section className="relative overflow-hidden bg-warm-25 py-20 dark:bg-night-950 sm:py-28">
        <div className="absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-forest-100/50 blur-3xl dark:bg-forest-900/10" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Featured Cabins"
            title="Exceptional stays with a stronger sense of place"
            description="A handpicked selection of premium cabins that combine atmosphere, comfort, and a setting worth traveling for."
            className="mb-14"
          />

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {featuredCabins.map((cabin) => (
              <CabinCard key={cabin.id} cabin={cabin} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/cabins"
              className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-forest-700 transition-colors hover:text-forest-800 dark:text-forest-400 dark:hover:text-forest-300"
            >
              Browse the full collection
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative border-y border-warm-200/70 bg-gradient-to-b from-warm-50 to-warm-25 py-20 dark:border-night-800/60 dark:bg-gradient-to-b dark:from-night-900/60 dark:to-night-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Designed to feel premium, calm, and personal"
            description="A stronger hospitality experience comes from thoughtful curation, better spaces, and visual consistency across the journey."
            className="mb-14"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-warm-25 py-20 dark:bg-night-950 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Guest Trust"
            title="What guests remember most"
            description="A simple trust section with a more elevated presentation and cleaner visual rhythm."
            className="mb-14"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.75rem] border border-warm-200/70 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] dark:border-night-800/60 dark:bg-night-900/70"
              >
                <div className="flex items-center gap-2 text-forest-600 dark:text-forest-400">
                  <Quote size={18} />
                  <div className="flex items-center gap-1">
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                  </div>
                </div>

                <p className="mt-5 text-[0.95rem] leading-8 text-night-500 dark:text-night-300">
                  “{item.quote}”
                </p>

                <p className="mt-6 text-sm font-semibold text-night-800 dark:text-white">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
