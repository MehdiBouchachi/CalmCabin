import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import useCreateReservation from "../features/reservation/useCreateReservation";

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
import useCabin from "../features/cabins/useCabin";
import Button from "../ui/Button";

const amenityIconMap = {
  WiFi: Wifi,
  Fireplace: Flame,
  Parking: CarFront,
  "Forest View": Trees,
  "Lake View": Waves,
  Coffee: Coffee,
  "King Bed": BedDouble,
};

function CabinDetails() {
  const { cabinId } = useParams();
  const { cabin, isLoading, error } = useCabin(cabinId);

  if (isLoading) {
    return <CabinDetailsState message="Loading cabin details..." />;
  }

  if (error) {
    return (
      <CabinDetailsState
        message={error.message || "Failed to load cabin details."}
        isError
      />
    );
  }

  if (!cabin) {
    return <CabinDetailsNotFound />;
  }

  const galleryImages = cabin.gallery?.length ? cabin.gallery : [cabin.image];
  const description = cabin.longDescription || cabin.description;

  return (
    <div className="bg-warm-25 dark:bg-night-950">
      <CabinDetailsHero cabin={cabin} />

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-8 sm:space-y-10">
            <CabinGallery images={galleryImages} cabinName={cabin.name} />
            <CabinDescription description={description} />
            <CabinAmenities amenities={cabin.amenities} />
          </div>

          <ReservationCard cabin={cabin} />
        </div>
      </section>
    </div>
  );
}

function CabinDetailsHero({ cabin }) {
  return (
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
  );
}

function CabinGallery({ images, cabinName }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {images.slice(0, 4).map((image, index) => (
          <div
            key={`${image}-${index}`}
            className={`overflow-hidden rounded-[1.25rem] border border-warm-200/70 bg-white dark:border-night-800/70 dark:bg-night-900/60 sm:rounded-[1.5rem] ${
              index === 0 ? "col-span-2" : ""
            }`}
          >
            <img
              src={image}
              alt={`${cabinName} gallery ${index + 1}`}
              className={`w-full object-cover ${
                index === 0 ? "h-52 sm:h-[26rem]" : "h-36 sm:h-60"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function CabinDescription({ description }) {
  return (
    <div className="rounded-[1.5rem] border border-warm-200/70 bg-white p-5 dark:border-night-800/70 dark:bg-night-900/60 sm:rounded-[1.75rem] sm:p-8">
      <h2 className="text-[1.35rem] font-semibold tracking-tight text-night-800 dark:text-white sm:text-2xl">
        About this cabin
      </h2>

      <p className="mt-4 text-[0.95rem] leading-7 text-night-500 dark:text-night-300 sm:mt-5 sm:text-[0.97rem] sm:leading-8">
        {description}
      </p>
    </div>
  );
}

function CabinAmenities({ amenities }) {
  return (
    <div className="rounded-[1.5rem] border border-warm-200/70 bg-white p-5 dark:border-night-800/70 dark:bg-night-900/60 sm:rounded-[1.75rem] sm:p-8">
      <h2 className="text-[1.35rem] font-semibold tracking-tight text-night-800 dark:text-white sm:text-2xl">
        Amenities
      </h2>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
        {amenities.map((item) => {
          const Icon = amenityIconMap[item] || AmenityFallbackIcon;

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
  );
}

function ReservationCard({ cabin }) {
  const [successMessage, setSuccessMessage] = useState("");

  const { createReservation, isCreating } = useCreateReservation();

  const today = useMemo(() => formatDateInput(new Date()), []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      guest_name: "",
      guest_email: "",
      guest_phone: "",
      check_in: "",
      check_out: "",
      guests_count: Math.min(2, cabin.capacity),
      special_requests: "",
    },
  });

  const checkIn = watch("check_in");
  const checkOut = watch("check_out");
  // eslint-disable-next-line no-unused-vars
  const guestsCount = Number(watch("guests_count") || 1);

  const nightCount = useMemo(() => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return nights > 0 ? nights : 0;
  }, [checkIn, checkOut]);

  const total = nightCount * cabin.price;
  const minCheckoutDate = checkIn || today;

  async function onSubmit(values) {
    setSuccessMessage("");

    const start = new Date(values.check_in);
    const end = new Date(values.check_out);

    if (end <= start) {
      setError("check_out", {
        type: "manual",
        message: "Check-out must be after check-in.",
      });
      return;
    }

    if (Number(values.guests_count) > cabin.capacity) {
      setError("guests_count", {
        type: "manual",
        message: `This cabin allows up to ${cabin.capacity} guests.`,
      });
      return;
    }

    const reservationPayload = {
      cabin_id: cabin.dbId,
      guest_id: null,
      guest_name: values.guest_name.trim(),
      guest_email: values.guest_email.trim(),
      guest_phone: values.guest_phone?.trim() || null,
      check_in: values.check_in,
      check_out: values.check_out,
      guests_count: Number(values.guests_count),
      price_per_night: Number(cabin.price),
      total_price: total,
      status: "pending",
      special_requests: values.special_requests?.trim() || null,
    };

    try {
      const reservation = await createReservation(reservationPayload);

      setSuccessMessage(
        `Reservation created successfully. Reference: ${reservation.id.slice(0, 8)}`,
      );

      reset({
        guest_name: "",
        guest_email: "",
        guest_phone: "",
        check_in: "",
        check_out: "",
        guests_count: Math.min(2, cabin.capacity),
        special_requests: "",
      });
    } catch (error) {
      setError("root", {
        type: "server",
        message: error.message || "Failed to create reservation.",
      });
    }
  }

  return (
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
              <span className="text-sm font-semibold">{cabin.rating}</span>
            </div>
            <p className="mt-1 text-xs text-night-400 dark:text-night-500">
              Guest rating
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
              Full name
            </label>
            <input
              type="text"
              {...register("guest_name", {
                required: "Full name is required.",
              })}
              placeholder="Your full name"
              className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-4 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100"
            />
            {errors.guest_name && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                {errors.guest_name.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
              Email
            </label>
            <input
              type="email"
              {...register("guest_email", {
                required: "Email is required.",
              })}
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-4 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100"
            />
            {errors.guest_email && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                {errors.guest_email.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
              Phone
            </label>
            <input
              type="text"
              {...register("guest_phone")}
              placeholder="+213 ..."
              className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-4 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
                Check-in
              </label>
              <input
                type="date"
                min={today}
                {...register("check_in", {
                  required: "Check-in date is required.",
                })}
                className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-3 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100 sm:px-4"
              />
              {errors.check_in && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                  {errors.check_in.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
                Check-out
              </label>
              <input
                type="date"
                min={minCheckoutDate}
                {...register("check_out", {
                  required: "Check-out date is required.",
                })}
                className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-3 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100 sm:px-4"
              />
              {errors.check_out && (
                <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                  {errors.check_out.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
              Guests
            </label>
            <select
              {...register("guests_count", {
                required: "Please select guests.",
                valueAsNumber: true,
              })}
              className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-4 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100"
            >
              {Array.from({ length: cabin.capacity }, (_, i) => i + 1).map(
                (count) => (
                  <option key={count} value={count}>
                    {count} guest{count > 1 ? "s" : ""}
                  </option>
                ),
              )}
            </select>
            {errors.guests_count && (
              <p className="mt-2 text-xs text-red-600 dark:text-red-400">
                {errors.guests_count.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-night-700 dark:text-night-200">
              Special requests
            </label>
            <textarea
              rows={4}
              {...register("special_requests")}
              placeholder="Anything you'd like us to know?"
              className="w-full rounded-2xl border border-warm-200 bg-warm-25 px-4 py-3 text-sm text-night-700 outline-none transition focus:border-forest-400 dark:border-night-700 dark:bg-night-950 dark:text-night-100"
            />
          </div>

          {nightCount > 0 && (
            <div className="rounded-2xl bg-warm-50 p-4 dark:bg-night-950/70">
              <div className="flex items-center justify-between gap-3 text-sm text-night-500 dark:text-night-300">
                <span>
                  ${cabin.price} × {nightCount} night{nightCount > 1 ? "s" : ""}
                </span>
                <span className="shrink-0 font-semibold text-night-800 dark:text-white">
                  ${total}
                </span>
              </div>
            </div>
          )}

          {errors.root?.message && (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/40 dark:bg-red-950/20 dark:text-red-300">
              {errors.root.message}
            </p>
          )}

          {successMessage && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/20 dark:text-emerald-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                <span>{successMessage}</span>
              </div>
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            fullWidth
            className={isCreating ? "pointer-events-none opacity-70" : ""}
          >
            {isCreating ? "Creating reservation..." : "Reserve now"}
          </Button>

          <p className="text-center text-xs leading-5 text-night-400 dark:text-night-500">
            Your reservation is stored in Supabase.
          </p>
        </form>
      </div>
    </aside>
  );
}

function CabinDetailsState({ message, isError = false }) {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24">
      <p
        className={
          isError
            ? "text-sm text-red-600 dark:text-red-400"
            : "text-sm text-night-400 dark:text-night-500"
        }
      >
        {message}
      </p>
    </section>
  );
}

function CabinDetailsNotFound() {
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

function AmenityFallbackIcon({ size = 18 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-forest-500/80"
    />
  );
}

function formatDateInput(date) {
  return date.toISOString().split("T")[0];
}

export default CabinDetails;
