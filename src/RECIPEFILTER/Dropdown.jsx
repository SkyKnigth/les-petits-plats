import "Dropdown.css";
import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { cleanText } from "@/utils/cleanText";

export default function FilterDropdown({
  title,
  items,
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredItems = useMemo(() => {
    const cleanedSearch = cleanText(searchValue);

    if (!cleanedSearch) {
      return items;
    }

    return items.filter((item) =>
      cleanText(item).includes(cleanedSearch)
    );
  }, [items, searchValue]);

  return (
    <div className={`filterDropdown ${isOpen ? "open" : ""}`}>
      <button
        className="filterDropdownButton"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <FontAwesomeIcon icon={faChevronDown} className="filterDropdownChevron" />
      </button>

      {isOpen && (
        <div className="filterDropdownPanel">
          <div className="filterDropdownSearch">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={`Rechercher ${title.toLowerCase()}`}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>

          <ul className="filterDropdownList">
            {filteredItems.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="filterDropdownItem"
                  onClick={() => {
                    onSelect(item);
                    setSearchValue("");
                    setIsOpen(false);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}