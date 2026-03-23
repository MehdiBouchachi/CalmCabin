function CategoryChips({
  items,
  activeKey,
  onChange,
  className = "",
  center = true,
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2.5 ${
        center ? "justify-center" : ""
      } ${className}`}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeKey === item.key;

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key)}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-[0.8125rem] font-semibold transition-all duration-200 ${
              isActive
                ? "bg-forest-600 text-white shadow-lg shadow-forest-600/20 dark:bg-forest-500 dark:shadow-forest-500/15"
                : "border border-warm-200 bg-white text-night-500 hover:border-forest-200 hover:text-forest-700 dark:border-night-700 dark:bg-night-800 dark:text-night-400 dark:hover:border-forest-800/50 dark:hover:text-forest-400"
            }`}
            aria-pressed={isActive}
          >
            <Icon size={15} strokeWidth={2.2} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryChips;
