import { TreePine, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";

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

function WhyChooseSection() {
  return (
    <section className="relative border-y border-warm-200/70 bg-linear-to-b from-warm-50 to-warm-25 py-16 dark:border-night-800/60 dark:bg-linear-to-b dark:from-night-900/60 dark:to-night-950 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Designed to feel premium, calm, and personal"
          description="A stronger hospitality experience comes from thoughtful curation, better spaces, and visual consistency across the journey."
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
