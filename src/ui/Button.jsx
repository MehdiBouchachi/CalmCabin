import { Link } from "react-router-dom";

function Button({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  size = "md",
  icon,
  fullWidth = false,
  type = "button",
}) {
  const sizes = {
    sm: "px-4 py-2 text-[0.82rem]",
    md: "px-6 py-3.5 text-[0.92rem]",
  };
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 active:scale-[0.98]";

  const variants = {
    primary:
      "bg-forest-600 text-white shadow-[0_10px_25px_rgba(61,107,61,0.20)] hover:bg-forest-700 dark:bg-forest-500 dark:hover:bg-forest-400",

    secondary:
      "border border-warm-200 bg-white text-night-700 hover:border-warm-300 hover:bg-warm-25 dark:border-night-700 dark:bg-night-900 dark:text-night-200 dark:hover:border-night-600",

    ghost:
      "bg-white/10 text-white backdrop-blur-md hover:bg-white/15 border border-white/20",
  };

  const width = fullWidth ? "w-full" : "";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${width} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} type={type}>
      {children}
      {icon && icon}
    </button>
  );
}

export default Button;
