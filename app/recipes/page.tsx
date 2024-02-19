"use client";
import { useEffect, useState } from "react";
import { RecipeType } from "@/types/mainTypes";
import { RecipeCard } from "@/components/custom/recipe-card";
import { Nav } from "../../components/custom/nav";
import { SearchBar } from "@/components/custom/search-bar";
import { fetchAllRecipesInDB } from "@/api-client/fetchAllRecipesInDB";
import { deleteRecipe } from "@/api-client/deleteRecipe";
import { likeRecipe } from "@/api-client/likeRecipe";
import { RiLayoutGridLine } from "react-icons/ri";
import { RiLayoutRowLine } from "react-icons/ri";
const Recipes = () => {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [layout, setLayout] = useState<boolean>(false);
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
      <Nav>
        <SearchBar onDataReceived={fetchRecipes} />
      </Nav>
      <div className={`${layout ? "" : "flex"} flex-wrap justify-center`}>
        <button onClick={() => (layout ? setLayout(false) : setLayout(true))}>
          {layout ? <RiLayoutGridLine /> : <RiLayoutRowLine />}
        </button>
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
  );
};
export default Recipes;
