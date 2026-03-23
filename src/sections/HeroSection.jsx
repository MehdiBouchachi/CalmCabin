import Button from "../ui/Button";
import { ArrowRight, Star } from "lucide-react";

function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury cabin in nature"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night-950/88 via-night-950/58 to-night-950/24" />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-25 via-transparent to-transparent dark:from-night-950" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-forest-300/10 blur-3xl" />
      <div className="absolute right-[-8rem] top-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-8">
        <div className="grid w-full items-center gap-10 pb-10 pt-24 sm:pb-12 sm:pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pb-0 lg:pt-24">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl self-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md sm:text-[0.7rem]">
              Boutique cabin stays
            </p>

            <h1 className="mt-5 max-w-xl text-[2.5rem] font-extrabold leading-[0.95] tracking-tight text-white sm:text-[3.5rem] lg:text-[5rem]">
              Quiet luxury
              <span className="block text-forest-300">in the wild</span>
            </h1>

            <p className="mt-4 max-w-lg text-[0.95rem] leading-7 text-white/74 sm:mt-5 sm:text-[1.03rem] sm:leading-8">
              Discover refined cabins made for slower mornings, deeper rest, and
              memorable escapes close to nature.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">
              <Button
                to="/cabins"
                variant="secondary"
                fullWidth
                className="border-transparent bg-white text-night-900 hover:bg-warm-50 sm:w-auto"
                icon={<ArrowRight size={16} />}
              >
                Explore cabins
              </Button>

              <Button
                to="/about"
                variant="ghost"
                fullWidth
                className="sm:w-auto"
              >
                Learn more
              </Button>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 text-white/78 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <p className="text-[1.55rem] font-bold leading-none text-white sm:text-[1.85rem]">
                  50+
                </p>
                <p className="mt-1 text-xs sm:text-sm">Curated stays</p>
              </div>

              <div className="hidden h-10 w-px bg-white/15 sm:block" />

              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <p className="text-[1.55rem] font-bold leading-none text-white sm:text-[1.85rem]">
                  4.8
                </p>
                <p className="mt-1 text-xs sm:text-sm">Average rating</p>
              </div>

              <div className="hidden h-10 w-px bg-white/15 sm:block" />

              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <p className="text-[1.55rem] font-bold leading-none text-white sm:text-[1.85rem]">
                  12
                </p>
                <p className="mt-1 text-xs sm:text-sm">Destinations</p>
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
  );
}

export default HeroSection;
