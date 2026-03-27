import "./Filters.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export default function Filters() {
  return (
    <div className="filters">
      <button className="filterButton" type="button" > 
        Ingrédients 
      <FontAwesomeIcon icon={faAngleDown} /></button>

      <button className="filterButton" type="button">
        Appareils 
      <FontAwesomeIcon icon={faAngleDown} /></button>

      <button className="filterButton" type="button">
        Ustensiles 
      <FontAwesomeIcon icon={faAngleDown} /></button>
    </div>
  );
}