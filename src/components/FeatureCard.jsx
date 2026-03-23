function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-warm-200/80 bg-white p-7 transition-all duration-300 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-600/[0.04] dark:border-night-700/60 dark:bg-night-800/40 dark:hover:border-forest-800/50 dark:hover:shadow-forest-400/[0.03]">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-600 transition-colors duration-300 group-hover:bg-forest-100 dark:bg-forest-900/20 dark:text-forest-400 dark:group-hover:bg-forest-900/30">
        <Icon size={20} strokeWidth={2} />
      </div>
      <h3 className="mb-2 text-[0.9375rem] font-semibold text-night-800 dark:text-white">
        {title}
      </h3>
      <p className="text-[0.8125rem] leading-relaxed text-night-400 dark:text-night-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
