import "./Tags.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Tags({ selectedFilters, onRemoveFilter }) {
  const allTags = [
    ...selectedFilters.ingredients.map((tag) => ({
      type: "ingredients",
      value: tag,
    })),
    ...selectedFilters.appliances.map((tag) => ({
      type: "appliances",
      value: tag,
    })),
    ...selectedFilters.ustensils.map((tag) => ({
      type: "ustensils",
      value: tag,
    })),
  ];

  return (
    <div className="tags">
      {allTags.map((tag) => (
        <div key={`${tag.type}-${tag.value}`} className="tag">
          <span>{tag.value}</span>

          <button
            type="button"
            className="tagRemove"
            onClick={() => onRemoveFilter(tag.type, tag.value)}
            aria-label={`Supprimer ${tag.value}`}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      ))}
    </div>
  );
}