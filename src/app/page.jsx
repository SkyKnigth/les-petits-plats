"use client";

import { useMemo, useState } from "react";
import recipesData from "@/data/recipes.json";

import Header from "@/HEADER/Header";
import Filters from "@/FILTERS/Filters";
import Tags from "@/TAGS/Tags";
import RecipeCard from "@/RECIPECARD/RecipeCard";
import Footer from "@/FOOTER/Footer";

import { createSlug } from "@/utils/createSlug";
import { recipeImagePath } from "@/utils/recipeImagePath";
import { filterRecipes, getAvailableFilters } from "@/utils/filterRecipes";

export default function Home() {
  const [query, setQuery] = useState("");

  const [selectedFilters, setSelectedFilters] = useState({
    ingredients: [],
    appliances: [],
    ustensils: [],
  });

  const recipes = useMemo(() => {
    return recipesData.map((recipe) => ({
      ...recipe,
      slug: createSlug(recipe.name),
      image: recipeImagePath(recipe),
    }));
  }, []);

  const filteredRecipes = useMemo(() => {
    return filterRecipes(recipes, query, selectedFilters);
  }, [recipes, query, selectedFilters]);

  const availableFilters = useMemo(() => {
    return getAvailableFilters(filteredRecipes, selectedFilters);
  }, [filteredRecipes, selectedFilters]);

  function handleSelectFilter(type, value) {
    setSelectedFilters((previous) => {
      if (previous[type].includes(value)) {
        return previous;
      }

      return {
        ...previous,
        [type]: [...previous[type], value],
      };
    });
  }

  function handleRemoveFilter(type, value) {
    setSelectedFilters((previous) => ({
      ...previous,
      [type]: previous[type].filter((item) => item !== value),
    }));
  }

  return (
    <>
      <Header query={query} setQuery={setQuery} />

      <main className="container homeContent">
        <div className="filtersRow">
          <div className="filtersLeft">
            <div className="filtersTop">
              <Filters
                availableFilters={availableFilters}
                onSelectFilter={handleSelectFilter}
              />
            </div>

            <Tags
              selectedFilters={selectedFilters}
              onRemoveFilter={handleRemoveFilter}
            />
          </div>

          <div className="recipesCount">{filteredRecipes.length} recettes</div>
        </div>

        {filteredRecipes.length === 0 ? (
          <p className="noResults">
            Aucune recette ne contient “{query}”.
          </p>
        ) : (
          <section className="recipesGrid">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
