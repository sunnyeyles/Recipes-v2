"use client";
import { useEffect, useState } from "react";
import { RecipeType } from "@/types/mainTypes";
import { RecipeCard } from "@/components/custom/recipe-card";
import { Nav } from "../../components/custom/nav";
import { SearchBar } from "@/components/custom/search-bar";
import { fetchAllRecipesInDB } from "@/api-client/fetchAllRecipesInDB";
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

  return (
    <div>
      <Nav>
        <SearchBar onDataReceived={fetchRecipes} />
      </Nav>
      <div className="m-12">
        <h1>The users recipes</h1>
        {recipes && recipes.length > 0 ? (
          recipes
            .slice()
            .reverse()
            .map((recipe) => (
              <RecipeCard
                {...recipe}
                recipeName={recipe.recipeName}
                ingredients={recipe.ingredients}
                method={recipe.method}
                key={String(recipe._id)}
              />
            ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};
export default Recipes;
