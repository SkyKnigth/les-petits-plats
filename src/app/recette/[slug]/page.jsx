/* eslint-disable @next/next/no-img-element */
import recipesData from "@/data/recipes.json";
import { createSlug } from "@/utils/createSlug";
import { recipeImagePath } from "@/utils/recipeImagePath";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/FOOTER/Footer";

export default async function Page({ params }) {
  const { slug } = await params;

  const recipe = recipesData
    .map((recipe) => ({
      ...recipe,
      slug: recipe.slug || createSlug(recipe.name),
      image: recipeImagePath(recipe),
    }))
    .find((recipe) => recipe.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <header className="recipeHeader">
        <div className="recipeHeaderOverlay"></div>

        <Link href="/" className="recipeHeaderLogo">
          <img src="/images/Logo.png" alt="Logo Les Petits Plats" />
        </Link>
      </header>

      <main className="recipePage container">
        <div className="recipePageImageBlock">
          <img
            className="recipePageImage"
            src={recipe.image}
            alt={recipe.name}
          />
        </div>

        <div className="recipePageContent">
          <h1 className="recipePageTitle">{recipe.name}</h1>

          <h2 className="recipePageSectionTitle">TEMPS DE PRÉPARATION</h2>
          <div className="recipePageTime">{recipe.time}min</div>

          <h2 className="recipePageSectionTitle">INGRÉDIENTS</h2>

          <div className="recipePageIngredients">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="recipePageIngredient">
                <span className="recipePageIngredientName">
                  {ingredient.ingredient}
                </span>

                <span className="recipePageIngredientValue">
                  {ingredient.quantity ? ingredient.quantity : ""}
                  {ingredient.unit ? ` ${ingredient.unit}` : ""}
                </span>
              </div>
            ))}
          </div>

          <h2 className="recipePageSectionTitle">USTENSILES NÉCESSAIRES</h2>
          <p className="recipePageText">{(recipe.ustensils || []).join(", ")}</p>

          <h2 className="recipePageSectionTitle">APPAREILS NÉCESSAIRES</h2>
          <p className="recipePageText">{recipe.appliance}</p>

          <h2 className="recipePageSectionTitle">RECETTE</h2>
          <p className="recipePageInstructions">{recipe.description}</p>
        </div>
      </main>

      <Footer />
    </>
  );
}