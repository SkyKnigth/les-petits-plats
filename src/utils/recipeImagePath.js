export function recipeImagePath(recipe) {
  const id = String(recipe.id).padStart(2, "0"); // 1 -> 01
  return `/images/recettes/Recette${id}.jpg`;
}

