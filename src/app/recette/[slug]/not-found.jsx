import Link from "next/link";
import Footer from "@/FOOTER/Footer";

export default function NotFound() {
  return (
    <>
      <main className="notFound">
        <div className="notFoundOverlay"></div>

        <div className="notFoundLogo">
          <img src="/images/Logo.png" alt="Logo Les Petits Plats" />
        </div>

        <section className="notFoundContent">
          <h1 className="notFoundTitle">404 :(</h1>

          <p className="notFoundText">
            La page que vous demandez est introuvable.
          </p>

          <Link href="/" className="notFoundLink">
            Retour à l’accueil
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}