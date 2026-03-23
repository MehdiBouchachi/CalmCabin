import CategoryChips from "../../ui/CategoryChips";
import { CABIN_CATEGORIES } from "./cabinsCategories";

function CabinsFilters({ activeCategory, onCategoryChange }) {
  return (
    <CategoryChips
      items={CABIN_CATEGORIES}
      activeKey={activeCategory}
      onChange={onCategoryChange}
    />
  );
}

export default CabinsFilters;
