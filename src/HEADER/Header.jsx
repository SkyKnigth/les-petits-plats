/* eslint-disable @next/next/no-img-element */
import "./Header.css";
import "@/globals.css";
import SearchBar from "@/SEARCHBAR/SearchBar";


export default function Header({ query, setQuery }) {
  return (
    <header className="header">
      <div className="headerOverlay"></div>

      <div className="headerTop">
        <img className="headerLogo" src="/images\Logo.png" alt="logo les petits plats"/>
      </div>

      <div className="headerCenter">
        <h1 className="headerTitle">
          DÉCOUVREZ NOS RECETTES<br />
          DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES
        </h1>

        <SearchBar query={query} setQuery={setQuery} />
      </div>
    </header>
  );
}