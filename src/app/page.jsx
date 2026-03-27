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

export default function HomePage() {
  const [query, setQuery] = useState("");

  const recipes = useMemo(() => {
    return recipesData.map((recipe) => ({
      ...recipe,
      slug: createSlug(recipe.name),
      image: recipeImagePath(recipe),
    }));
  }, []);

  return (
    <>
      <Header query={query} setQuery={setQuery} />

      <main className="container homeContent">
        <div className="filtersRow">
          <div className="filtersLeft">
            <div className="filtersTop">
              <Filters />
            </div>

            <Tags />
          </div>

          <div className="recipesCount">{recipes.length} recettes</div>
        </div>

        <section className="recipesGrid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}