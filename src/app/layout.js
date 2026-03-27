import "../globals.css";

export const metadata = {
  title: "Les Petits Plats",
  description: "Recettes du quotidien",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}