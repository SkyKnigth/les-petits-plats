import { cleanText } from "./cleanText";

export function filterRecipes(recipes, query, selectedFilters) {
  const cleanedQuery = cleanText(query);

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeName = cleanText(recipe.name);
    const recipeDescription = cleanText(recipe.description);
    const recipeIngredients = recipe.ingredients.map((ingredient) =>
      cleanText(ingredient.ingredient)
    );
    const recipeIngredientsText = recipeIngredients.join(" ");
    const recipeAppliance = cleanText(recipe.appliance);
    const recipeUstensils = recipe.ustensils.map((ustensil) =>
      cleanText(ustensil)
    );

    const matchesMainSearch =
      cleanedQuery.length < 3 ||
      recipeName.includes(cleanedQuery) ||
      recipeDescription.includes(cleanedQuery) ||
      recipeIngredientsText.includes(cleanedQuery);

    const matchesFilters =
      selectedFilters.ingredients.every((tag) =>
        recipeIngredients.includes(cleanText(tag))
      ) &&
      selectedFilters.appliances.every(
        (tag) => recipeAppliance === cleanText(tag)
      ) &&
      selectedFilters.ustensils.every((tag) =>
        recipeUstensils.includes(cleanText(tag))
      );

    const matchesRecipe = matchesMainSearch && matchesFilters;

    return matchesRecipe;
  });

  return filteredRecipes;
}

export function getAvailableFilters(recipes, selectedFilters) {
  const ingredientsSet = new Set();
  const appliancesSet = new Set();
  const ustensilsSet = new Set();

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      ingredientsSet.add(ingredient.ingredient);
    });

    appliancesSet.add(recipe.appliance);

    recipe.ustensils.forEach((ustensil) => {
      ustensilsSet.add(ustensil);
    });
  });

  const removeSelected = (items, selectedItems) =>
    [...items].filter((item) => !selectedItems.includes(item));

  return {
    ingredients: removeSelected(ingredientsSet, selectedFilters.ingredients)
      .sort((a, b) => a.localeCompare(b)),
    appliances: removeSelected(appliancesSet, selectedFilters.appliances)
      .sort((a, b) => a.localeCompare(b)),
    ustensils: removeSelected(ustensilsSet, selectedFilters.ustensils)
      .sort((a, b) => a.localeCompare(b)),
  };
}