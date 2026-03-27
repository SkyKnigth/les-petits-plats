import Link from "next/link";
// lien pour revenir à la page d'accueil

export default function NotFound() {
  return (
    <main className="notFound">
      <h1 className="notFoundTitle">404 :(</h1>

      <p className="notFoundText">
        La recette demandée est introuvable.
      </p>


    </main>
  );
}