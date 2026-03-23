import CabinCard from "./CabinCard";

function CabinsGrid({ cabins }) {
  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {cabins.map((cabin) => (
        <CabinCard key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}

export default CabinsGrid;
