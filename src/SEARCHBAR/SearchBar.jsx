import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar({ query, setQuery }) {
  return (
    <div className="searchBar">
      <input
        className="searchBarInput"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher une recette, un ingrédient, ..."
      />
      <button className="searchBarButton" type="button" aria-label="Rechercher"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  );
}