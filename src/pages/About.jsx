import { Heart, Leaf, Eye, Compass } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";

function About() {
  const values = [
    {
      icon: Heart,
      title: "Crafted with Care",
      description:
        "Every cabin in our collection is personally visited and vetted. We ensure it meets our standards of warmth, beauty, and comfort.",
    },
    {
      icon: Leaf,
      title: "Rooted in Nature",
      description:
        "We partner with properties that respect their natural surroundings, promoting sustainable practices and ecological harmony.",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description:
        "From the thread count of the linens to the view from the window — we consider every element that shapes your experience.",
    },
    {
      icon: Compass,
      title: "Spirit of Discovery",
      description:
        "We seek out hidden gems and off-the-beaten-path retreats so your stays feel less like tourism and more like adventure.",
    },
  ];

  const team = [
    {
      name: "Elena Voss",
      role: "Founder & Curator",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    },
    {
      name: "Marcus Reed",
      role: "Design Lead",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    },
    {
      name: "Ava Chen",
      role: "Community & Hosts",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
    },
  ];

  return (
    <div>
      {/* ──────────── HERO ──────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-50/50 to-warm-25 dark:from-forest-900/10 dark:to-night-950">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/2 translate-y-[-30%] rounded-full bg-forest-100/30 blur-3xl dark:bg-forest-900/10" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 inline-block rounded-full border border-forest-200 bg-forest-50 px-4 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-forest-700 dark:border-forest-800/40 dark:bg-forest-900/20 dark:text-forest-400">
              Our Story
            </p>
            <h1 className="text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-night-800 sm:text-[2.75rem] lg:text-[3.25rem] dark:text-white">
              Born from a love of{" "}
              <span className="bg-gradient-to-r from-forest-600 to-forest-800 bg-clip-text text-transparent dark:from-forest-400 dark:to-forest-300">
                quiet places
              </span>
            </h1>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-night-400 sm:text-lg dark:text-night-400">
              CalmCabin was created by a small team of nature lovers, designers,
              and wanderers who believe that the right space can change the way
              you feel, think, and rest.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────── ORIGIN STORY ──────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl shadow-night-900/10 dark:shadow-night-950/40">
              <img
                src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&h=675&fit=crop&q=80"
                alt="A beautiful cabin beside a lake at sunset"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-forest-100 dark:bg-forest-900/20" />
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-forest-600 dark:text-forest-400">
              The Beginning
            </p>
            <h2 className="text-[1.75rem] font-bold leading-tight tracking-tight text-night-800 sm:text-[2rem] dark:text-white">
              It started with one cabin and a weekend of rain
            </h2>
            <div className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed text-night-500 dark:text-night-400">
              <p>
                In 2021, our founder booked a cabin in the Pacific Northwest on
                a whim. It rained the entire weekend. There was no Wi-Fi, no
                agenda, and no noise — just the sound of water on leaves and a
                wood-burning fire.
              </p>
              <p>
                That weekend became a turning point. The idea for CalmCabin was
                born: a platform dedicated to finding and sharing places that
                offer genuine stillness. Not luxury resorts. Not glamping parks.
                Just honest, beautiful cabins in honest, beautiful places.
              </p>
              <p>
                Today, we curate a growing collection of cabins across North
                America — each handpicked for its character, setting, and the
                feeling it gives you when you walk through the door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── VALUES ──────────── */}
      <section className="border-y border-warm-200/60 bg-warm-50/50 dark:border-night-800/40 dark:bg-night-900/20">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="What we believe in"
            description="These are the principles that guide every decision we make — from the cabins we select to the experiences we design."
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <FeatureCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── MISSION QUOTE ──────────── */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-warm-200/80 bg-white p-10 text-center shadow-sm sm:p-14 dark:border-night-700/60 dark:bg-night-800/40">
            {/* Decorative quote mark */}
            <div className="absolute left-6 top-4 text-[6rem] font-serif leading-none text-forest-100 select-none dark:text-forest-900/30">
              &ldquo;
            </div>
            <div className="relative">
              <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-forest-600 dark:text-forest-400">
                Our Mission
              </p>
              <blockquote className="text-xl font-semibold leading-relaxed text-night-700 sm:text-2xl dark:text-night-200">
                To connect people with places where they can slow down, breathe
                deeply, and rediscover the simple joy of being surrounded by
                nature.
              </blockquote>
              <p className="mt-6 text-[0.8125rem] font-medium text-night-400 dark:text-night-500">
                — The CalmCabin Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── TEAM ──────────── */}
      <section className="border-t border-warm-200/60 bg-warm-50/50 dark:border-night-800/40 dark:bg-night-900/20">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="The Team"
            title="Small team, big heart"
            description="We're a tiny crew that cares deeply about getting every detail right."
            className="mb-14"
          />
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-warm-200/80 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:shadow-lg dark:border-night-700/60 dark:bg-night-800/40"
              >
                <div className="mb-5 h-20 w-20 overflow-hidden rounded-full ring-4 ring-warm-100 dark:ring-night-700">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-[0.9375rem] font-semibold text-night-800 dark:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-[0.8125rem] text-night-400 dark:text-night-500">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
