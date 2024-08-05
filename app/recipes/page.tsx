"use client";
import { useEffect, useState } from "react";
import { RecipeType } from "@/types/mainTypes";
import { RecipeCard } from "@/components/custom/recipe-card";
import { SearchBar } from "@/components/custom/search-bar";
import { fetchAllRecipesInDB } from "@/api-client/fetchAllRecipesInDB";
import { deleteRecipe } from "@/api-client/deleteRecipe";
import { likeRecipe } from "@/api-client/likeRecipe";
import { NavBarWrapper } from "@/components/custom/nav-bar-wrapper";
const Recipes = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const fetchRecipes = async () => {
    try {
      const response = await fetchAllRecipesInDB();
      if (response && response.data && response.data.recipes) {
        setRecipes(response.data.recipes);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, [recipes]);

  const handleDelete = (key: string) => {
    deleteRecipe(key);
  };
  const handleLike = (key: string) => {
    likeRecipe(key);
  };

  return (
    <div>
      <NavBarWrapper />
      <div>
        <div className="flex justify-center my-16">
          <SearchBar onDataReceived={fetchRecipes} />
        </div>
        <div className="flex flex-wrap justify-center">
          {recipes
            .slice()
            .reverse()
            .map((recipe) => (
              <RecipeCard
                {...recipe}
                recipeName={recipe.recipeName}
                ingredients={recipe.ingredients}
                method={recipe.method}
                key={String(recipe._id)}
                deleteRecipe={() => handleDelete(String(recipe._id))}
                likeRecipe={() => handleLike(String(recipe._id))}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Recipes;
