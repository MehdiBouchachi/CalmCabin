function CabinsResultsInfo({ cabinsCount, activeCategory }) {
  const isSingleCabin = cabinsCount === 1;
  const showCategory = activeCategory !== "all";

  return (
    <p className="mb-8 text-[0.8125rem] text-night-400 dark:text-night-500">
      Showing{" "}
      <span className="font-semibold text-night-600 dark:text-night-300">
        {cabinsCount}
      </span>{" "}
      {isSingleCabin ? "cabin" : "cabins"}
      {showCategory && (
        <>
          {" "}
          in{" "}
          <span className="font-semibold capitalize text-night-600 dark:text-night-300">
            {activeCategory}
          </span>
        </>
      )}
    </p>
  );
}

export default CabinsResultsInfo;
