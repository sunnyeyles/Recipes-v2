"use client";
import { useEffect, useState } from "react";
import { RecipeType } from "@/types/mainTypes";
import { RecipeCard } from "@/components/custom/recipe-card";
import { Nav } from "../../components/custom/nav";
import { SearchBar } from "@/components/custom/search-bar";
import { deleteRecipe } from "@/api-client/deleteRecipe";
import { likeRecipe } from "@/api-client/likeRecipe";
import { fetchLikedRecipesInDB } from "@/api-client/fetchLikedRecipes";

const Recipes = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const fetchRecipes = async () => {
    try {
      const response = await fetchLikedRecipesInDB();

      if (response) {
        setRecipes(response);
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  useEffect(() => {
    fetchRecipes();
  }, []);

  // delete recipe
  const handleDelete = (key: string) => {
    deleteRecipe(key);
    console.log("deleted");
  };
  const handleLike = (key: string) => {
    likeRecipe(key);
    console.log("liked");
  };

  return (
    <div>
      <Nav>
        <SearchBar onDataReceived={fetchRecipes} />
      </Nav>
      <div className="m-12">
        {recipes.length ? (
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
                deleteRecipe={() => handleDelete(String(recipe._id))}
                likeRecipe={() => handleLike(String(recipe._id))}
              />
            ))
        ) : (
          <div>Looks like you don't have any liked recipes</div>
        )}
      </div>
    </div>
  );
};
export default Recipes;
