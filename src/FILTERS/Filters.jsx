import "./Filters.css";
import FilterDropdown from "@/RECIPEFILTER/Dropdown";

export default function Filters({
  availableFilters,
  onSelectFilter,
}) {
  return (
    <div className="filters">
      <FilterDropdown
        title="Ingrédients"
        items={availableFilters.ingredients}
        onSelect={(value) => onSelectFilter("ingredients", value)}
      />

      <FilterDropdown
        title="Appareils"
        items={availableFilters.appliances}
        onSelect={(value) => onSelectFilter("appliances", value)}
      />

      <FilterDropdown
        title="Ustensiles"
        items={availableFilters.ustensils}
        onSelect={(value) => onSelectFilter("ustensils", value)}
      />
    </div>
  );
}