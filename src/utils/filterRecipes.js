import { cleanText } from "./cleanText";

export function filterRecipes(recipes, query, selectedFilters) {
  const cleanedQuery = cleanText(query);

  return recipes.filter((recipe) => {
    const recipeName = cleanText(recipe.name);
    const recipeDescription = cleanText(recipe.description);
    const recipeIngredients = recipe.ingredients
      .map((ingredient) => cleanText(ingredient.ingredient))
      .join(" ");

    const matchesMainSearch =
      cleanedQuery.length < 3 ||
      recipeName.includes(cleanedQuery) ||
      recipeDescription.includes(cleanedQuery) ||
      recipeIngredients.includes(cleanedQuery);

    const recipeIngredientNames = recipe.ingredients.map((ingredient) =>
      cleanText(ingredient.ingredient)
    );

    const recipeAppliance = cleanText(recipe.appliance);

    const recipeUstensils = recipe.ustensils.map((ustensil) =>
      cleanText(ustensil)
    );

    const matchesIngredients = selectedFilters.ingredients.every((tag) =>
      recipeIngredientNames.includes(cleanText(tag))
    );

    const matchesAppliances = selectedFilters.appliances.every(
      (tag) => recipeAppliance === cleanText(tag)
    );

    const matchesUstensils = selectedFilters.ustensils.every((tag) =>
      recipeUstensils.includes(cleanText(tag))
    );

    return (
      matchesMainSearch &&
      matchesIngredients &&
      matchesAppliances &&
      matchesUstensils
    );
  });
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

  const removeSelected = (items, selectedItems) => {
    return [...items].filter(
      (item) => !selectedItems.includes(item)
    );
  };

  return {
    ingredients: removeSelected(ingredientsSet, selectedFilters.ingredients).sort(
      (a, b) => a.localeCompare(b)
    ),
    appliances: removeSelected(appliancesSet, selectedFilters.appliances).sort(
      (a, b) => a.localeCompare(b)
    ),
    ustensils: removeSelected(ustensilsSet, selectedFilters.ustensils).sort(
      (a, b) => a.localeCompare(b)
    ),
  };
}