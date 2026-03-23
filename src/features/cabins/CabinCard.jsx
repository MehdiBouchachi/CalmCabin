import { Link } from "react-router-dom";
import { MapPin, Users, Star, ArrowUpRight } from "lucide-react";

const categoryStyles = {
  lake: "bg-sky-50/90 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300",
  forest:
    "bg-emerald-50/90 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  mountain:
    "bg-amber-50/90 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
};

function CabinCard({ cabin }) {
  const categoryClassName = categoryStyles[cabin.category];

  return (
    <Link
      to={`/cabins/${cabin.id}`}
      className="group block overflow-hidden rounded-[1.75rem] border border-warm-200/70 bg-white shadow-[0_10px_35px_rgba(17,24,39,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(17,24,39,0.10)] dark:border-night-700/60 dark:bg-night-900/60 dark:hover:border-night-600/70 dark:hover:shadow-[0_18px_50px_rgba(0,0,0,0.30)]"
    >
      <CabinCardMedia>
        <img
          src={cabin.image}
          alt={cabin.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />

        <CabinCardOverlay />

        <CabinCardTopRow>
          <CabinCardBadges>
            {cabin.featured && <CabinCardBadge>Featured</CabinCardBadge>}

            <CabinCardCategoryBadge className={categoryClassName}>
              {cabin.category}
            </CabinCardCategoryBadge>
          </CabinCardBadges>

          <CabinCardRating>
            <Star
              size={14}
              className="fill-amber-400 text-amber-400"
              strokeWidth={0}
            />
            <span className="text-[0.75rem] font-semibold">{cabin.rating}</span>
          </CabinCardRating>
        </CabinCardTopRow>

        <CabinCardBottomOverlay>
          <div className="flex items-end justify-between gap-4">
            <div>
              <CabinCardTitle>{cabin.name}</CabinCardTitle>

              <CabinCardLocation>
                <MapPin size={14} strokeWidth={2.2} />
                {cabin.location}
              </CabinCardLocation>
            </div>

            <CabinCardPrice>
              <p className="text-[1rem] font-bold">
                ${cabin.price}
                <span className="ml-1 text-[0.75rem] font-medium text-white/75">
                  /night
                </span>
              </p>
            </CabinCardPrice>
          </div>
        </CabinCardBottomOverlay>
      </CabinCardMedia>

      <CabinCardBody>
        <CabinCardDescription>{cabin.description}</CabinCardDescription>

        <CabinCardFooter>
          <CabinCardCapacity>
            <Users size={14} strokeWidth={2.2} />
            <span>
              Up to{" "}
              <span className="font-semibold text-night-700 dark:text-night-200">
                {cabin.capacity}
              </span>{" "}
              guests
            </span>
          </CabinCardCapacity>

          <CabinCardAction>
            View Details
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </CabinCardAction>
        </CabinCardFooter>
      </CabinCardBody>
    </Link>
  );
}

function CabinCardMedia({ children }) {
  return (
    <div className="relative aspect-16/10 overflow-hidden bg-warm-100 dark:bg-night-800">
      {children}
    </div>
  );
}

function CabinCardOverlay() {
  return (
    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-black/5" />
  );
}

function CabinCardTopRow({ children }) {
  return (
    <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
      {children}
    </div>
  );
}

function CabinCardBadges({ children }) {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
}

function CabinCardBadge({ children }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
      {children}
    </span>
  );
}

function CabinCardCategoryBadge({ children, className = "" }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-[0.6875rem] font-semibold capitalize backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
}

function CabinCardRating({ children }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-black/30 px-3 py-1.5 text-white backdrop-blur-md">
      {children}
    </div>
  );
}

function CabinCardBottomOverlay({ children }) {
  return <div className="absolute inset-x-0 bottom-0 p-5">{children}</div>;
}

function CabinCardTitle({ children }) {
  return (
    <h3 className="text-[1.15rem] font-semibold leading-tight text-white sm:text-[1.25rem]">
      {children}
    </h3>
  );
}

function CabinCardLocation({ children }) {
  return (
    <p className="mt-1 flex items-center gap-1.5 text-[0.8125rem] text-white/85">
      {children}
    </p>
  );
}

function CabinCardPrice({ children }) {
  return (
    <div className="rounded-2xl bg-white/14 px-3.5 py-2 text-right text-white backdrop-blur-md">
      {children}
    </div>
  );
}

function CabinCardBody({ children }) {
  return <div className="p-5 sm:p-6">{children}</div>;
}

function CabinCardDescription({ children }) {
  return (
    <p className="line-clamp-2 text-[0.875rem] leading-relaxed text-night-400 dark:text-night-400">
      {children}
    </p>
  );
}

function CabinCardFooter({ children }) {
  return (
    <div className="mt-5 flex items-center justify-between border-t border-warm-100 pt-4 dark:border-night-800/70">
      {children}
    </div>
  );
}

function CabinCardCapacity({ children }) {
  return (
    <div className="flex items-center gap-1.5 text-[0.8125rem] text-night-500 dark:text-night-400">
      {children}
    </div>
  );
}

function CabinCardAction({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-forest-700 transition-colors group-hover:text-forest-800 dark:text-forest-400 dark:group-hover:text-forest-300">
      {children}
    </span>
  );
}

export default CabinCard;
