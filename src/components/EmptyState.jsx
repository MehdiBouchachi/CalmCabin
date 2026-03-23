import { Search } from "lucide-react";

function EmptyState({ message = "No cabins found for this category." }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-warm-300 bg-warm-50/50 px-8 py-20 text-center dark:border-night-700 dark:bg-night-800/20">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-warm-100 text-night-300 dark:bg-night-800 dark:text-night-500">
        <Search size={28} strokeWidth={1.5} />
      </div>
      <p className="text-base font-medium text-night-500 dark:text-night-400">
        {message}
      </p>
      <p className="mt-1.5 text-[0.8125rem] text-night-400 dark:text-night-500">
        Try selecting a different category above.
      </p>
    </div>
  );
}

export default EmptyState;
