import { Quote, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

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

function TestimonialsSection() {
  return (
    <section className="bg-warm-25 py-16 dark:bg-night-950 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Guest Trust"
          title="What guests remember most"
          description="A simple trust section with a more elevated presentation and cleaner visual rhythm."
          className="mb-10 sm:mb-12 lg:mb-14"
        />

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[1.5rem] border border-warm-200/70 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] dark:border-night-800/60 dark:bg-night-900/70 sm:rounded-[1.75rem] sm:p-7"
            >
              <div className="flex items-center gap-2 text-forest-600 dark:text-forest-400">
                <Quote size={18} />
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[0.92rem] leading-7 text-night-500 dark:text-night-300 sm:mt-5 sm:text-[0.95rem] sm:leading-8">
                “{item.quote}”
              </p>

              <p className="mt-5 text-sm font-semibold text-night-800 dark:text-white sm:mt-6">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
