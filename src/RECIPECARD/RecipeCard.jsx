/* eslint-disable @next/next/no-img-element */
import "./RecipeCard.css";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
  return (
    <article className="recipeCard">
      <Link href={`/recette/${recipe.slug}`}>
        <div className="recipeCardImageWrapper">
          <img
            className="recipeCardImage"
            src={recipe.image}
            alt={recipe.name}
          />
          <span className="recipeCardTime">{recipe.time}min</span>
        </div>

        <div className="recipeCardBody">
          <h2 className="recipeCardTitle">{recipe.name}</h2>

          <p className="recipeCardSectionTitle">RECETTE</p>
          <p className="recipeCardDescription">{recipe.description}</p>

          <p className="recipeCardSectionTitle">INGRÉDIENTS</p>
          <div className="recipeCardIngredients">
            {recipe.ingredients.slice(0, 6).map((ingredient, index) => (
              <div className="recipeCardIngredient" key={index}>
                <span className="ingredientName">{ingredient.ingredient}</span>
                <span className="ingredientValue">
                  {ingredient.quantity ? ingredient.quantity : ""}
                  {ingredient.unit ? ` ${ingredient.unit}` : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}