import axios from "axios";
export const fetchLikedRecipesInDB = async () => {
  try {
    const data = await axios.get("api/fetch-liked-recipes", {});
    return data.data.filteredLikedRecipes;
  } catch (error) {
    console.log(error);
  }
};
