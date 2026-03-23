function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className = "",
}) {
  return (
    <div
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-forest-600 dark:text-forest-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-[2rem] font-bold leading-[1.08] tracking-tight text-night-800 sm:text-[2.4rem] lg:text-[3rem] dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-[0.98rem] leading-8 text-night-400 sm:text-[1.02rem] dark:text-night-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
