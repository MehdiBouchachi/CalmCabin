import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MapPin,
  Star,
  Users,
  Wifi,
  Flame,
  CarFront,
  Trees,
  Waves,
  Coffee,
  BedDouble,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { getCabinById } from "../services/apiCabins";

const amenityIconMap = {
  WiFi: Wifi,
  Fireplace: Flame,
  Parking: CarFront,
  "Forest View": Trees,
  "Lake View": Waves,
  Coffee: Coffee,
  "King Bed": BedDouble,
};

function formatDateInput(date) {
  return date.toISOString().split("T")[0];
}

function CabinDetails() {
  const { cabinId } = useParams();
  const cabin = getCabinById(cabinId);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const thumbnails = cabin?.gallery?.length
    ? cabin.gallery
    : cabin
      ? [cabin.image]
      : [];

  const nightCount = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  }, [checkIn, checkOut]);

  const total = nightCount * (cabin?.price || 0);

  function handleReserve(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!checkIn || !checkOut) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    if (end <= start) {
      setError("Check-out must be after check-in.");
      return;
    }

    if (guests < 1) {
      setError("Please select at least 1 guest.");
      return;
    }

    if (guests > cabin.capacity) {
      setError(`This cabin allows up to ${cabin.capacity} guests.`);
      return;
    }

    setSuccess(
      `Reservation confirmed for ${guests} guest${guests > 1 ? "s" : ""} from ${checkIn} to ${checkOut}.`,
    );
  }

  if (!cabin) {
    return (
      <section className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <h1 className="text-3xl font-bold text-night-800 dark:text-white">
          Cabin not found
        </h1>
        <p className="mt-4 text-night-400 dark:text-night-400">
          The cabin you are looking for does not exist.
        </p>
        <Link
          to="/cabins"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-forest-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-700 dark:bg-forest-500 dark:hover:bg-forest-600"
        >
          <ArrowLeft size={16} />
          Back to cabins
        </Link>
      </section>
    );
  }

  return (
    <div className="bg-warm-25 dark:bg-night-950">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cabin.image}
            alt={cabin.name}
            className="h-[24rem] w-full object-cover sm:h-[28rem] lg:h-[36rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-night-950/35 to-night-950/15" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-10 lg:pb-14 lg:pt-12">
          <Link
            to="/cabins"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/15"
          >
            <ArrowLeft size={16} />
            Back to cabins
          </Link>

          <div className="mt-24 max-w-3xl sm:mt-32 lg:mt-64">
            <div className="mb-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md sm:text-xs">
                {cabin.category}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[0.7rem] font-semibold text-white backdrop-blur-md sm:text-xs">
                <Star
                  size={13}
                  className="fill-amber-400 text-amber-400"
                  strokeWidth={0}
                />
                {cabin.rating}
              </span>
            </div>

            <h1 className="max-w-2xl text-[2rem] font-bold leading-tight tracking-tight text-white sm:text-[2.75rem] lg:text-[3.5rem]">
              {cabin.name}
            </h1>

            <div className="mt-4 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 sm:text-base">
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} />
                {cabin.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users size={16} />
                Up to {cabin.capacity} guests
              </span>
              <span className="font-semibold text-white">
                ${cabin.price}/night
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-8 sm:space-y-10">
            {/* Gallery */}
            <div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4">
                {thumbnails.slice(0, 4).map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className={`overflow-hidden rounded-[1.25rem] border border-warm-200/70 bg-white dark:border-night-800/70 dark:bg-night-900/60 sm:rounded-[1.5rem] ${
                      index === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${cabin.name} gallery ${index + 1}`}
                      className={`w-full object-cover ${
                        index === 0 ? "h-52 sm:h-[26rem]" : "h-36 sm:h-60"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="rounded-[1.5rem] border border-warm-200/70 bg-white p-5 dark:border-night-800/70 dark:bg-night-900/60 sm:rounded-[1.75rem] sm:p-8">
              <h2 className="text-[1.35rem] font-semibold tracking-tight text-night-800 dark:text-white sm:text-2xl">
                About this cabin
              </h2>
              <p className="mt-4 text-[0.95rem] leading-7 text-night-500 dark:text-night-300 sm:mt-5 sm:text-[0.97rem] sm:leading-8">
                {cabin.longDescription || cabin.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="rounded-[1.5rem] border border-warm-200/70 bg-white p-5 dark:border-night-800/70 dark:bg-night-900/60 sm:rounded-[1.75rem] sm:p-8">
              <h2 className="text-[1.35rem] font-semibold tracking-tight text-night-800 dark:text-white sm:text-2xl">
                Amenities
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
                {cabin.amenities.map((item) => {
                  const Icon = amenityIconMap[item] || SparkFallback;

                  return (
                    <div
                      key={item}
                      className="flex min-h-[92px] flex-col items-start gap-3 rounded-2xl border border-warm-100 bg-warm-50 px-3 py-3.5 dark:border-night-800 dark:bg-night-950/60 sm:min-h-0 sm:flex-row sm:items-center sm:px-4 sm:py-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-700 dark:bg-forest-900/20 dark:text-forest-400 sm:h-11 sm:w-11">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-medium leading-5 text-night-700 dark:text-night-200">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Reservation Card */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[1.5rem] border border-warm-200/70 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)] dark:border-night-800/70 dark:bg-night-900/75 dark:shadow-[0_14px_40px_rgba(0,0,0,0.22)] sm:rounded-[1.75rem] sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[2rem] font-bold tracking-tight text-night-800 dark:text-white sm:text-3xl">
                    ${cabin.price}
                  </p>
                  <p className="mt-1 text-sm text-night-400 dark:text-night-400">
                    per night
                  </p>
                </div>

                <div className="rounded-2xl bg-warm-50 px-3 py-2 text-right dark:bg-night-950/70">
                  <div className="flex items-center justify-end gap-1 text-night-700 dark:text-night-200">
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      strokeWidth={0}
                    />
                    <span className="text-sm font-semibold">
                      {cabin.rating}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-night-400 dark:text-night-500">
                    Guest rating
                  </p>
                </div>
              </div>

              <form onSubmit={handleReserve} className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
                      Check-in
                    </label>
                    <input
                      type="date"
                      min={formatDateInput(new Date())}
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-3 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100 sm:px-4"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
                      Check-out
                    </label>
                    <input
                      type="date"
                      min={checkIn || formatDateInput(new Date())}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-3 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100 sm:px-4"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-4 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100"
                  >
                    {Array.from(
                      { length: cabin.capacity },
                      (_, i) => i + 1,
                    ).map((count) => (
                      <option key={count} value={count}>
                        {count} guest{count > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                {nightCount > 0 && (
                  <div className="rounded-2xl bg-warm-50 p-4 dark:bg-night-950/70">
                    <div className="flex items-center justify-between gap-3 text-sm text-night-500 dark:text-night-300">
                      <span>
                        ${cabin.price} × {nightCount} night
                        {nightCount > 1 ? "s" : ""}
                      </span>
                      <span className="shrink-0 font-semibold text-night-800 dark:text-white">
                        ${total}
                      </span>
                    </div>
                  </div>
                )}

                {error && (
                  <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/20 dark:text-red-300">
                    {error}
                  </p>
                )}

                {success && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/20 dark:text-emerald-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                      <span>{success}</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-forest-600 px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-700 active:scale-[0.99] dark:bg-forest-500 dark:hover:bg-forest-600"
                >
                  Reserve now
                </button>

                <p className="text-center text-xs leading-5 text-night-400 dark:text-night-500">
                  No payment required for this demo reservation flow.
                </p>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function SparkFallback(props) {
  return <SparkleDot {...props} />;
}

function SparkleDot({ size = 18 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-forest-500/80"
    />
  );
}

export default CabinDetails;
